import * as React from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { localeDate } from '../../../../helpers';
import { fetchHistory, resetHistory, RootState, selectCurrencies, selectHistory, selectNextPageExists } from '../../../../modules';
import { ReactTable } from '../ReactTable';

interface DepositHistoryProps {
    currency_id: string;
}
export const DepositHistory: React.FC<DepositHistoryProps> = (props: DepositHistoryProps) => {

    const intl = useIntl();

    // props
    const { currency_id } = props;

    // selector
    const list = useSelector(selectHistory);
    const currencies = useSelector(selectCurrencies);
    const currency = currencies.find(currency => currency.id.toLowerCase() == currency_id.toLowerCase());
    const blockchain_address = currency ? currency.explorer_address : '';
    console.log(currencies);
    console.log(list);


    const nextPageExists = useSelector((state: RootState) => selectNextPageExists(state, 6));
    console.log(nextPageExists);



    // dispatch
    const dispatch = useDispatch();
    const dispatchFetchHistories = () => dispatch(fetchHistory({ currency: currency_id, type: "deposits", page: 1, limit: 6 }));
    const dispatchResetHistory = () => dispatch(resetHistory());

    React.useEffect(() => {
        dispatchResetHistory();
        dispatchFetchHistories();
    }, []);

    const formatTxState = (tx: string, confirmations?: number, minConfirmations?: number) => {
        const process = require('../../../../assets/status/wait.svg')
        const fail = require('../../../../assets/status/fail.svg')
        const success = require('../../../..//assets/status/success.svg')
        const statusMapping = {
            succeed: <img src={success} alt="" />,
            failed: <img src={fail} alt="" />,
            accepted: <img src={process} alt="" />,
            collected: <img src={success} alt="" />,
            canceled: <img src={fail} alt="" />,
            rejected: <img src={fail} alt="" />,
            processing: <img src={process} alt="" />,
            prepared: <img src={process} alt="" />,
            fee_processing: <img src={process} alt="" />,
            skipped: <img src={success} alt="" />,
            submitted: (confirmations !== undefined && minConfirmations !== undefined) ? (
                `${confirmations}/${minConfirmations}`
            ) : (
                <img src={process} alt="" />),
        };

        return statusMapping[tx];
    };

    const columns = React.useMemo(
        () => {
            return [
                {
                    Header: intl.formatMessage({ id: `page.body.history.deposit.header.date` }),
                    accessor: 'date'
                },
                {
                    Header: 'Txid Address',
                    accessor: 'txid'
                },
                {
                    Header: intl.formatMessage({ id: `page.body.history.deposit.header.status` }),
                    accessor: 'state'
                },
                {
                    Header: intl.formatMessage({ id: `page.body.history.deposit.header.amount` }),
                    accessor: 'amount'
                },
            ]
        },
        []
    );

    const data = list.map((history: any) => {
        const blockchainTxidAddress = blockchain_address ? blockchain_address.replace('#{address}', history.txid) : '';
        return {
            date: localeDate(history.created_at, 'fullDate'),
            status: 'success',
            amount: history.amount,
            txid: <a target="_blank" href={blockchainTxidAddress}>{blockchainTxidAddress.slice(0, 60) + '....'}</a>,
            state: formatTxState(history.state)
        }
    });

    return (
        <div style={{ marginTop: '100px' }}>
            <h2>{intl.formatMessage({ id: `page.body.history.deposit` })}</h2>
            {
                list.length > 0
                    ? <ReactTable columns={columns} data={data} headColor="#182034" />
                    : intl.formatMessage({ id: 'page.noDataToShow' })
            }
        </div>
    )
}
