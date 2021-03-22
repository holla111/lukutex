import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectHistory } from '../../../../modules';
import { ReactTable } from '../ReactTable';

export const DepositHistory = () => {


    // selector
    const histories = useSelector(selectHistory);

    //  // dispatch
    //  const dispatch = useDispatch();
    //  const dispatchFetchHistories = () => dispatch(fetchHistory());

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
            <ReactTable columns={columns} data={data} />
    )
}
