import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import Pager from '../Pager/Pager';

interface TableProps {
    columns: TableColumnItem[];
    data: TableDataItem[];
    pagination?: Pagination;
    className?: string;
}

interface TableState {
    currentPage: number;
}
interface TableColumnItem {
    key: string;
    title: string;
    dataIndex: string;
    width?: string;
}

interface TableDataItem {
    [key: string]: any;
}

interface Pagination {
    rowsPerPage: number;
}

interface OneRowProps {
    rowData: TableDataItem;
    rowIndex: number;
}

const OneRow = ({ rowData, rowIndex }: OneRowProps) => {
    return <TableRow key={rowIndex}>
        {
            Object.keys(rowData).map(cell => (
                <TableCell>{rowData[cell]} </TableCell>
            ))
        }
    </TableRow>
}

class MTable extends React.Component<TableProps, TableState> {
    constructor(props: TableProps){
        super(props);
        this.state = {
            currentPage: 0
        };
    }
    render() {
        const {columns, data, pagination, className} = this.props;
        const {currentPage} = this.state;
        const sumPage = pagination? Math.ceil(data.length / pagination.rowsPerPage): 1;
        const middlePages = pagination?
            data.slice(currentPage * pagination.rowsPerPage, (this.state.currentPage + 1) * pagination.rowsPerPage):
            data;
        return (
            <div>
            <Table className={className} >
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (<TableCell style={{ width: column.width }} key={column.key} > {column.title} </TableCell>))}
                    </TableRow>
                </TableHead>
                < TableBody >
                    {
                        middlePages.map((oneRow, index) => (
                            <OneRow rowIndex={index} rowData={oneRow} > </OneRow>
                        ))
                    }
                </TableBody>
            </Table>
            {pagination && 
                <Pager 
                    sum={sumPage} 
                    current={currentPage+1} 
                    style={{justifyContent: 'flex-end',margin: '0.5rem'}}
                    onJump={page => this.setState({currentPage: page-1})}
                    />
            }
            </div>
        )
    }
}


export default MTable;