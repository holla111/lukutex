import * as React from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { selectChildCurrencies, selectWallets, walletsAddressFetch, walletsChildCurrenciesFetch, walletsFetch } from '../../../modules/user/wallets';
import { Subheader, WalletDepositBody, WalletHeader, WalletBanner } from '../../components';
import Tabs, { TabPane } from 'rc-tabs';
import styled from 'styled-components';

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

const WalletDeposit: React.FC = () => {
    const [generateAddressTriggered, setGenerateAddressTriggered] = React.useState(false);
    const dispatch = useDispatch();
    const intl = useIntl();
    const history = useHistory();
    const { currency = '' } = useParams();
    const wallets = useSelector(selectWallets) || [];

    const wallet = wallets.find(item => item.currency === currency) || { name: '', currency: '', balance: '', type: '', address: '' };
    const isAccountActivated = wallet.type === 'fiat' || wallet.balance;

    const dispatchFetchChildCurrencies = () => dispatch(walletsChildCurrenciesFetch({ currency: currency }));


    const child_currencies = useSelector(selectChildCurrencies);
    React.useEffect(() => {
        dispatchFetchChildCurrencies();
    }, [currency]);

    const child_wallets = child_currencies.payload.map(network => {
        return {
            ...network,
            wallet: wallets.find(item => item.currency === network.id) || { name: '', currency: '', balance: '', type: '', address: '' }
        }
    });

    const handleGenerateAddress = () => {
        if (!wallet.address && wallets.length && wallet.type !== 'fiat') {
            dispatch(walletsAddressFetch({ currency }));
            dispatch(walletsFetch());
            setGenerateAddressTriggered(true);
        }
    };


    React.useEffect(() => {
        dispatch(walletsAddressFetch({ currency }));
    }, [dispatch, currency]);

    return (
        <React.Fragment>
            <Subheader
                title={intl.formatMessage({ id: 'page.body.wallets.tabs.deposit' })}
                backTitle={intl.formatMessage({ id: 'page.body.wallets.balance' })}
                onGoBack={() => history.push(`/wallets/${currency}/history`)}
            />
            <WalletHeader currency={wallet.currency} name={wallet.name} />
            <WalletBanner wallet={wallet} />
            <TabsStyle>
                <Tabs defaultActiveKey={currency} >
                    <TabPane tab="ERC20" key={currency}>
                        <WalletDepositBody
                            wallet={wallet}
                            isAccountActivated={isAccountActivated}
                            handleGenerateAddress={handleGenerateAddress}
                            generateAddressTriggered={generateAddressTriggered}
                        />
                    </TabPane>
                    {
                        child_wallets ?
                            child_wallets.map(child_wallet => (
                                <TabPane tab={child_wallet.name.toUpperCase() || ''} key={child_wallet.blockchain_key || ''}>
                                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                        {
                                            <WalletDepositBody
                                                wallet={child_wallet.wallet}
                                                isAccountActivated={isAccountActivated}
                                                handleGenerateAddress={handleGenerateAddress}
                                                generateAddressTriggered={generateAddressTriggered}
                                            />
                                        }
                                    </div>

                                </TabPane>
                            ))
                            :
                            ""
                    }

                </Tabs>
            </TabsStyle>

        </React.Fragment>
    );
};

export {
    WalletDeposit,
};