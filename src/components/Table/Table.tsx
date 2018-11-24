// import React from 'react';
// import { useState } from 'react';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableHead from '@material-ui/core/TableHead';
// import TableCell from '@material-ui/core/TableCell';
// import TableRow from '@material-ui/core/TableRow';
// import TableFooter from '@material-ui/core/TableFooter';
// import TablePagination from '@material-ui/core/TablePagination';
// import IconButton from '@material-ui/core/IconButton';
// import FirstPageIcon from '@material-ui/icons/FirstPage';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import LastPageIcon from '@material-ui/icons/LastPage';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Pager from '../Pager/Pager';

// interface TableProps {
//   columns: TableColumnItem[];
//   data: ;
// }

// interface TableColumnItem {
//   key: string;
//   title: string;
//   dataIndex: string;
// }

// interface TableDataItem {
//   TableColumnItem.dataIndex
// }
// const actionsStyles = theme => ({
//   root: {
//     flexShrink: 0,
//     color: theme.palette.text.secondary,
//     marginLeft: theme.spacing.unit * 2.5,
//   },
// });

// const OneRow = ({ rowData }) => {
//   const key = rowData.shift();
//   return <TableRow key={ key }>
//     {
//       rowData.map(cell => (
//         <TableCell>{ cell } </TableCell>
//       ))
//     }
//     </TableRow>
// }

// function MTable(props) {
//   const [columns, setColumns] = useState(props.columns);
//   return (
//     <Table style= { style } className = { className } >
//       <TableHead>
//       <TableRow>
//       { columns.map((column) => (<TableCell style= {{ width: column.width }} key = { column.key } > { column.title } </TableCell>))}
//         </TableRow>
//         </TableHead>
//         < TableBody >
//         {
//           pagination? 
//                             formatData.slice(pagination.page * pagination.rowsPerPage, (pagination.page + 1) * pagination.rowsPerPage).map(oneRow => (
//             <OneRow rowData= { oneRow } > </OneRow>
//           )):
//           formatData.map(oneRow => (
//             <OneRow rowData= { oneRow } > </OneRow>
//           ))
//         }
//         </TableBody>
//   {
//     pagination ? <TableFooter>
//       <TableRow>
//         </TableRow>
//         </TableFooter>:null}
//         </Table>
//                 )
//   }

//   export default MTable;