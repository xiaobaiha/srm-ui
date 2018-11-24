// import React from 'react';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

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

function Pager(props) {
    const [current, setCurrent] = useState(props.current || 1);
    const [sum, setSum] = useState(props.sum);
}

// class Pager extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     };

//     calc = (showNumber, presentPage, total) => {
//         // calc item value
//         var pageArr = [];
//         pageArr.push({ value: 1 });
//         var interval = Math.floor(showNumber / 2) - 1;
//         var left = Math.min(Math.max(2, presentPage - interval), total + 2 - showNumber);
//         for (var i = 0; i < showNumber - 2; i++) {
//             pageArr.push({ value: left + i });
//         }
//         pageArr.push({ value: total });
//         // calc item visibility
//         var max;
//         pageArr.forEach(function(item) {
//             if (max && item.value <= max) {
//                 item.disabled = true;
//             } else {
//                 max = item.value;
//             }
//         })
//         return pageArr;
//     };

//     handleFirstPageButtonClick = event => {
//         this.props.onChangePage(event, 0);
//     };

//     handleBackButtonClick = event => {
//         this.props.onChangePage(event, this.props.page - 1);
//     };

//     handleNextButtonClick = event => {
//         this.props.onChangePage(event, this.props.page + 1);
//     };

//     handleLastPageButtonClick = event => {
//         this.props.onChangePage(
//             event,
//             Math.max(0, totalPage - 1),
//         );
//     };

//     render() {
//         const { classes, page = 1, totalPage, theme } = this.props;
//         const showNumber = this.props.showNumber || 5;
//         const pageArray = this.calc(showNumber, page, totalPage);
//         console.log({pageArray})

//         return (<div style={{display: 'flex'}}>
//             {page > 1?
//                 <Button style={{...style.button, ...style.marginR_8}}><KeyboardArrowLeft /></Button>:
//                 <Button disabled style={{...style.button, ...style.marginR_8}}><KeyboardArrowLeft /></Button>
//             }
//             <div>
//             <Button style={{...style.button, ...style.marginR_8}} variant="outlined">1</Button>
//             {(pageArray[0].value + 1 < pageArray[1].value)? <Button variant="outlined" style={{...style.button, ...style.marginR_8}}>···</Button>:null}
//             {pageArray.slice(1, showNumber - 1).map(page => (
//                 <Button variant="outlined" style={{...style.button, ...style.marginR_8}}>{page.value}</Button>
//             ))}
//             {(pageArray[showNumber-2].value + 1 < pageArray[showNumber-1].value)? <Button disabled style={{...style.button, ...style.marginR_8}}>···</Button>:null}
//             <Button variant="outlined" style={{...style.button, ...style.marginR_8}}>{totalPage}</Button>
//             </div>
//             {page < totalPage?
//                 <Button style={style.button}><KeyboardArrowRight /></Button>:
//                 <Button disabled style={style.button}><KeyboardArrowRight /></Button>
//             }
//         </div>)
//     }
// }

export default Pager;