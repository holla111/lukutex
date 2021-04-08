import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ChildCurrency, selectWallets, walletsAddressFetch, walletsFetch } from '../../../../modules';
import { DepositBody } from '../../components/DepositBody';
import Tabs, { TabPane } from 'rc-tabs';
import styled from 'styled-components';

import { LockIcon } from '../../../../assets/images/LockIcon';

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

const BlurDisable = styled.div`
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    align-items: center;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background: var(--body-background-color-level-6);
    display: flex;
    height: 100%;
    justify-content: center;
    z-index: 10;
    flex-direction: column;
`;

interface Network {
    name: string;
    key: string;
    currency: ChildCurrency;
}

interface DepositAddressProps {
    currency_id: string;
    currency_icon: string;
    networks: Network[]
}


export const DepositAddress: React.FC<DepositAddressProps> = (props: DepositAddressProps) => {
    const { currency_id, currency_icon, networks } = props;

    const [generateAddressTriggered, setGenerateAddressTriggered] = React.useState(false);
    const dispatch = useDispatch();
    const wallets = useSelector(selectWallets) || [];

    const main_wallet = wallets.find(item => item.currency === currency_id) || { name: '', currency: '', balance: '', type: '', address: '' };
    const child_wallets = networks.map(network => {
        return {
            ...network,
            wallet: wallets.find(item => item.currency === network.currency.id) || { name: '', currency: '', balance: '', type: '', address: '' }
        }
    })
    const isAccountActivated = main_wallet.type === 'fiat' || main_wallet.balance;


    const handleGenerateAddress = () => {
        if (!main_wallet.address && wallets.length && main_wallet.type !== 'fiat') {
            dispatch(walletsAddressFetch({ currency: currency_id }));
            dispatch(walletsFetch());
            setGenerateAddressTriggered(true);
        }
    };


    React.useEffect(() => {
        dispatch(walletsAddressFetch({ currency: currency_id }));
    }, [dispatch, currency_id]);

    return (
        <div className="container d-flex flex-column justify-content-between" style={{ backgroundColor: '#182034', padding: '30px', borderRadius: '5px', height: '100%', fontSize: '1.3rem' }}>
            <div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                        <h4>Deposit Nework</h4>
                        <span>Average arrival time：1 minutes</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <TabsStyle>
                            <Tabs defaultActiveKey="1" >
                                <TabPane tab="ERC20" key="1">
                                    <DepositBody
                                        wallet={main_wallet}
                                        isAccountActivated={isAccountActivated}
                                        handleGenerateAddress={handleGenerateAddress}
                                        generateAddressTriggered={generateAddressTriggered}
                                    />
                                </TabPane>
                                {
                                    child_wallets ? 
                                        child_wallets.map(child_wallet => (
                                            <TabPane tab={child_wallet.name.toUpperCase()} key={child_wallet.key}>
                                            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                                {
                                                    child_wallet.currency.id && child_wallet.wallet && child_wallet.currency.deposit_enabled ?
                                                        <DepositBody
                                                            wallet={child_wallet.wallet}
                                                            isAccountActivated={isAccountActivated}
                                                            handleGenerateAddress={handleGenerateAddress}
                                                            generateAddressTriggered={generateAddressTriggered}
                                                        />
                                                        :
                                                        <BlurDisable>
                                                            <LockIcon className="pg-blur__content__icon" />
                                                        {child_wallet.name.toUpperCase()} hasn't been available.
                                                        </BlurDisable>
                                                }
                                            </div>

                                            </TabPane>
                                        ))
                                        : 
                                        ""
                                }
                                
                            </Tabs>
                        </TabsStyle>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12 d-flex justify-content-between">
                    <p className="pr-5">
                        <strong>Send only {currency_id.toUpperCase()}  to this deposit address.</strong>
                        <br />
                    Sending coin or token other than {currency_id.toUpperCase()} to this address may result in the loss of your deposit.
                   </p>
                    <img height="50px" width="50px" src={currency_icon} alt={currency_id} />
                </div>
            </div>
        </div >
    )
}
