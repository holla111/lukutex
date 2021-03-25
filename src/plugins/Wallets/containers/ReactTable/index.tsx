import * as React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';

const TableStyles = styled.div`
    table {
        width: 100%;
        border-spacing: 0;
        tr {
            td:first-child { border-top-left-radius: 10px; }
            td:last-child { border-top-right-radius: 10px; }
            td:first-child { border-bottom-left-radius: 10px; }
            td:last-child { border-bottom-right-radius: 10px; }
        }
      
        th,td {
            margin: 0;
            cursor: pointer;
            font-size: 1.2rem;
            color: #fff;
            text-align: justify;
            padding-top:10px;
            padding-bottom:10px;
            padding-right:10px; 
            padding-left:10px;
            transition: all 0.2s;
            font-weight: 600;
           
        }
        th {
            background-color: #222B42;
           
        }
        th:not(:first-child) {
            text-align: center
        }
        tr td:not(:first-child) {
            text-align: center
        }

        tr:hover td{
            background-color: #fff;
            color: #222B42;
        }
    }
`;

interface ReacTableProps {
    columns: any;
    data: any;
    headColor: string;
    rowColor: [string, string];
}

export const ReactTable: React.FC<ReacTableProps> = (props: ReacTableProps) => {
    const { columns, data, headColor, rowColor } = props;
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    // Render the UI for your table
    return (
        <TableStyles>
            <table {...getTableProps()}>
                <thead style={{backgroundColor: headColor}}>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th width="25%" {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()} style={{ backgroundColor: i % 2 == 0 ? rowColor[0] : rowColor[1] }}>
                                {row.cells.map((cell) => {
                                    return <td width="25%" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </TableStyles>

    )
}
