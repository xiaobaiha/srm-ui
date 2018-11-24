import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const style = {
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
}

const calcPages = (current: number, sum: number, showNumber: number) => {
    var pages: number[] = [];
    pages.push(1);
    var interval = Math.floor(showNumber / 2) - 1;
    var left = Math.min(Math.max(2, current - interval), sum + 2 - showNumber);
    for (var i = 0; i < showNumber - 2; i++) {
        pages.push(left + i);
    }
    pages.push(sum);
    return pages;
}

const Pager = (props: PagerProps) => {
    const [current, setCurrent] = useState(props.current || 1);
    const [sum, setSum] = useState(props.sum);
    const [onJump, setOnJump] = useState(props.onJump);
    const [showNumber, setShowNumber] = useState(props.showNumber || 5);
    const pages = calcPages(current, sum, showNumber);
    const showLeftEllipsis = pages[0] + 1 < pages[1];
    const showRightEllipsis = pages[showNumber-2] + 1 < pages[showNumber-1];
    return (
        <div style={{display: 'flex'}}>
            <Button disabled={current <= 1} style={{...style.button, ...style.marginR_8}}><KeyboardArrowLeft /></Button>
            <div>
            <Button 
                color={current===1?"primary":"default"} 
                variant={current===1?"contained":"outlined"} 
                style={{...style.button, ...style.marginR_8}}
                >
                1
            </Button> 
            {showLeftEllipsis && <Button disabled style={{...style.button, ...style.marginR_8}}>···</Button>}
            {pages.slice(1, showNumber - 1).map(page => (
                <Button 
                    color={current===page?"primary":"default"} 
                    variant={current===page?"contained":"outlined"} 
                    style={{...style.button, ...style.marginR_8}}
                    >
                    {page}
                </Button>
            ))}
            {showRightEllipsis && <Button disabled style={{...style.button, ...style.marginR_8}}>···</Button>}
            <Button 
                color={current===sum?"primary":"default"} 
                variant={current===sum?"contained":"outlined"} 
                style={{...style.button, ...style.marginR_8}}
                onClick={() => (onJump && onJump(sum))}
                >
                {sum}
            </Button>
            </div>
            <Button disabled={current >= sum} style={style.button}><KeyboardArrowRight /></Button>
        </div>
    );
}


export default Pager;