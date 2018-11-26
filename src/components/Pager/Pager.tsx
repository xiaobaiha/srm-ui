import React from 'react';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const defaultStyle = {
    button: {
        minWidth: "40px",
        padding: "0"
    },
    marginR_8: {
        marginRight: "8px"
    },
    disabled: {

    }
};

interface PagerProps {
    current?: number;
    sum: number;
    onJump?: (page: number) => any;
    showNumber?: number;
    buttonStyle?: object;
    style?: object;
}

class Pager extends React.Component<PagerProps> {
    calcPages(current: number, sum: number, showNumber: number) {
        const pages: number[] = [];
        pages.push(1);
        const interval = Math.floor(showNumber / 2) - 1;
        const left = Math.min(Math.max(2, current - interval), sum + 2 - showNumber);
        for (var i = 0; i < showNumber - 2; i++) {
            pages.push(left + i);
        }
        pages.push(sum);
        return pages.filter((e,i) => i===0?true:e>pages[0]).filter((e,i) => i===0?true:e>pages[i-1]);
    }
    render(){
        const {current = 1, sum, onJump, showNumber = 5, buttonStyle, style}: PagerProps = this.props;
        const pages = this.calcPages(current, sum, showNumber);
        const showLeftEllipsis = pages[0] + 1 < pages[1];
        const showRightEllipsis = pages[showNumber-2] + 1 < pages[showNumber-1];
        return (
            <div style={{display: 'flex', ...style}}>
                <Button 
                    disabled={current <= 1} 
                    style={{...defaultStyle.button, ...defaultStyle.marginR_8, ...buttonStyle}}
                    onClick={() => (onJump && onJump(current-1))}
                    >
                    <KeyboardArrowLeft />
                </Button>
                <div>
                <Button 
                    color={current===1?"primary":"default"} 
                    variant={current===1?"contained":"outlined"} 
                    style={{...defaultStyle.button, ...defaultStyle.marginR_8}}
                    onClick={() => (onJump && onJump(1))}
                    >
                    1
                </Button> 
                {showLeftEllipsis && <Button disabled style={{...defaultStyle.button, ...defaultStyle.marginR_8}}>···</Button>}
                {pages.slice(1, sum>=5?showNumber - 1:sum-1).map(page => (
                    <Button 
                        color={current===page?"primary":"default"} 
                        variant={current===page?"contained":"outlined"} 
                        style={{...defaultStyle.button, ...defaultStyle.marginR_8}}
                        onClick={() => (onJump && onJump(page))}
                        >
                        {page}
                    </Button>
                ))}
                {showRightEllipsis && <Button disabled style={{...defaultStyle.button, ...defaultStyle.marginR_8}}>···</Button>}
                {(sum>1) && <Button 
                    color={current===sum?"primary":"default"} 
                    variant={current===sum?"contained":"outlined"} 
                    style={{...defaultStyle.button, ...defaultStyle.marginR_8}}
                    onClick={() => (onJump && onJump(sum))}
                    >
                    {sum}
                </Button>}
                </div>
                <Button 
                    disabled={current >= sum} 
                    style={defaultStyle.button}
                    onClick={() => (onJump && onJump(current+1))}
                    >
                    <KeyboardArrowRight />
                </Button>
            </div>
        );
    }
}


export default Pager;