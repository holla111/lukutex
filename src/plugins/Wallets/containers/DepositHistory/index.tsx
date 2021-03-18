import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectHistory } from '../../../../modules';
import styled from 'styled-components';
import { ReactTable } from '../ReactTable';

const TableStyles = styled.div`
    table {
        width: 100%;
        border-spacing: 0;
        tr {
            /* background-color: #28334e; */
        :last-child {
            td {
            border-bottom: 0;
            }
        }
        }
        th,
        td {
        margin: 0;
        cursor: pointer;
        font-size: 1.2rem;
        padding: 0.5rem 0.5rem;
        color: #fff;
        text-align: center;
        :last-child {
            border-right: 0;
        }
        }
        th {
            /* background-color: #1e2841; */
        }
    }
`

export const DepositHistory = () => {


    // selector
    const histories = useSelector(selectHistory);

    //  // dispatch
    //  const dispatch = useDispatch();
    //  const dispatchFetchHistories = () => dispatch(fetchHistory());

    console.log(histories);

    const columns = React.useMemo(
        () => [
            {
                Header: 'Date',
                accessor: 'date'
            },
            {
                Header: 'Txid',
                accessor: 'txid'
            },
            {
                Header: 'Status',
                accessor: 'status'
            },
            {
                Header: 'Amount',
                accessor: 'amount'
            },
        ],
        []
    );

    const data = histories.map(history => {
        return {
            date: history.created_at,
            status: 'success',
            amount: history.amount
        }
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <TableStyles>
                        <ReactTable columns={columns} data={data} />
                    </TableStyles>
                </div>
            </div>
        </div>
    )
}
