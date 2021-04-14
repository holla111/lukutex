import * as React from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { localeDate } from '../../../../helpers';
import { fetchHistory, resetHistory, selectCurrencies, selectHistory } from '../../../../modules';
import { ReactTable } from '../ReactTable';
import Tabs, { TabPane } from 'rc-tabs';
import styled from 'styled-components';
interface WithdrawHistoryProps {
    currency_id: string;
}

const TabsStyle = styled.div`
    .rc-tabs-nav-list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .rc-tabs-tab {
            width: 100%;
            padding: 5px 0;
            transition: ease-in-out 0.3s;
            border-bottom: 4px solid transparent;
            .rc-tabs-tab-btn {
                text-align: center;
                outline: none;
                font-size: 1.3rem;
                border: none;
                cursor: pointer;
            }

            :hover {
                font-weight: bold;
                color: #3c78e0;
            }
        }
        
        .rc-tabs-tab-active {
            font-weight: bold;
            color: #3c78e0;
            background-color: #1e2841;
            border-bottom: 4px solid #3c78e0;
        }

        .rc-tabs-ink-bar {
            display: none;
        }
    }
`;

export const WithdrawHistory: React.FC<WithdrawHistoryProps> = (props: WithdrawHistoryProps) => {

    const intl = useIntl();

    // props
    const { currency_id } = props;

    // selector
    const list = useSelector(selectHistory);
    const currencies = useSelector(selectCurrencies);
    const currency = currencies.find(currency => currency.id.toLowerCase() == currency_id.toLowerCase());
    const blockchain_address = currency ? currency.explorer_address : '';


    // dispatch
    const dispatch = useDispatch();
    const dispatchFetchHistories = () => dispatch(fetchHistory({ currency: currency_id, type: "withdraws", page: 1, limit: 6 }));
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
                    Header: intl.formatMessage({ id: `page.body.history.withdraw.header.date` }),
                    accessor: 'date'
                },
                {
                    Header: 'Txid Address',
                    accessor: 'txid'
                },
                {
                    Header: intl.formatMessage({ id: `page.body.history.withdraw.header.status` }),
                    accessor: 'state'
                },
                {
                    Header: intl.formatMessage({ id: `page.body.history.withdraw.header.amount` }),
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
            status: history.state,
            amount: history.amount,
            txid: <a target="_blank" href={blockchainTxidAddress}>{blockchainTxidAddress.slice(0, 60) + '....'}</a>,
            state: formatTxState(history.state)
        }
    });

    const all_history = [...data];
    const success_history = [...data].filter(d => d.status === 'succeed');
    const error_history = [...data].filter(d => d.status === 'failed');

    return (
        <div style={{ marginTop: '50px' }}>
            <h2>{intl.formatMessage({ id: `page.body.history.withdraw` })}</h2>
            <TabsStyle>
                <Tabs defaultActiveKey="recent_history" >
                    <TabPane tab="Recent Withdrawal History" key="recent_history">
                        <ReactTable columns={columns} data={all_history} headColor="#182034" />
                    </TabPane>
                    <TabPane tab="Success Withdrawal History" key="success_history">
                        <ReactTable columns={columns} data={success_history} headColor="#182034" />
                    </TabPane>
                    <TabPane tab="Error Withdrawal History" key="error_history">
                        <ReactTable columns={columns} data={error_history} headColor="#182034" />
                    </TabPane>
                </Tabs>
            </TabsStyle>
        </div>
    )
}
