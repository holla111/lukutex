import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Currency, Wallet, walletsAddressFetch, /* selectWalletsAddressError, */ Beneficiary, User, selectETHFee } from '../../../../modules';
import Tabs, { TabPane } from 'rc-tabs';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import { Blur, WalletItemProps } from '../../../../components';
import { Withdraw, WithdrawProps } from '../../../../containers';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';


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


interface WithdrawAddressProps {
    currency_id: string;
    wallets: Wallet[];
    currencies: Currency[];
    user: User;
}

const defaultBeneficiary: Beneficiary = {
    id: 0,
    currency: '',
    name: '',
    state: '',
    data: {
        address: '',
    },
};

interface WalletsState {
    activeIndex: number;
    otpCode: string;
    amount: string;
    beneficiary: Beneficiary;
    selectedWalletIndex: number;
    withdrawSubmitModal: boolean;
    withdrawConfirmModal: boolean;
    bchAddress?: string;
    filteredWallets?: WalletItemProps[] | null;
    tab: string;
    withdrawDone: boolean;
    total: string;
    currentTabIndex: number;
    generateAddressTriggered: boolean;
}

export const WithdrawAddress: React.FC<WithdrawAddressProps> = (props: WithdrawAddressProps) => {
    const intl = useIntl();
    const { currency_id, wallets, currencies } = props;

    // state
    const [withdrawState, setState] = React.useState<any>({
        withdrawSubmitModal: false,
        withdrawConfirmModal: false,
        otpCode: '',
        amount: '',
        beneficiary: defaultBeneficiary,
        tab: intl.formatMessage({ id: 'page.body.wallets.tabs.deposit' }),
        withdrawDone: false,
        total: '',
        currentTabIndex: 0,
        generateAddressTriggered: false,
    });
    const dispatch = useDispatch();
    const history = useHistory();

    // const walletsError = useSelector(selectWalletsAddressError);
    const eth_fee = useSelector(selectETHFee);

    React.useEffect(() => {
        dispatch(walletsAddressFetch({ currency: currency_id }));
    }, [dispatch, currency_id]);


    const wallet = wallets.find(item => item.currency === currency_id.toLowerCase()) || { name: '', currency: '', balance: '', type: "fiat", address: '', fee: '', fixed: 6 };
    const currencyItem = currencies.find(currency => currency.id.toLowerCase() === currency_id.toLowerCase());

    const redirectToEnable2fa = () => history.push('/security/2fa', { enable2fa: true });

    const toggleConfirmModal = (amount?: string, total?: string, beneficiary?: Beneficiary, otpCode?: string) => {
        setState((state: WalletsState) => ({
            amount: amount || '',
            beneficiary: beneficiary ? beneficiary : defaultBeneficiary,
            otpCode: otpCode ? otpCode : '',
            withdrawConfirmModal: !state.withdrawConfirmModal,
            total: total || '',
            withdrawDone: false,
        }));
    };

    const isOtpDisabled = () => {
        return (
            <React.Fragment>
                <p className="pg-wallet__enable-2fa-message">
                    {intl.formatMessage({ id: 'page.body.wallets.tabs.withdraw.content.enable2fa' })}
                </p>
                <Button
                    block={true}
                    onClick={redirectToEnable2fa}
                    size="lg"
                    variant="primary"
                >
                    {intl.formatMessage({ id: 'page.body.wallets.tabs.withdraw.content.enable2faButton' })}
                </Button>
            </React.Fragment>
        );
    };

    const isTwoFactorAuthRequired = (level: number, is2faEnabled: boolean) => {
        return level > 1 || (level === 1 && is2faEnabled);
    }


    const renderWithdrawContent = () => {

        const { user: { level, otp }, wallets, currencies } = props;

        const eth = wallets.find(wallet => wallet.currency.toLowerCase() === 'eth');
        const ethBallance = eth ? eth.balance : undefined;
        const { currency, fee, type } = wallet;
        const fixed = (wallet || { fixed: 0 }).fixed;

        const fee_currency = eth_fee.find(cur => cur.currency_id === currency);
        const ethFee = fee_currency ? fee_currency.fee : undefined;
        const selectedCurrency = currencies.find(cur => cur.id == currency);
        const minWithdrawAmount = (selectedCurrency && selectedCurrency.min_withdraw_amount) ? selectedCurrency.min_withdraw_amount : undefined;
        const limitWitdraw24h = (selectedCurrency && selectedCurrency.withdraw_limit_24h) ? selectedCurrency.withdraw_limit_24h : undefined;

        const withdrawProps: WithdrawProps = {
            withdrawDone: withdrawState.withdrawDone,
            currency,
            fee: Number(fee),
            onClick: toggleConfirmModal,
            twoFactorAuthRequired: isTwoFactorAuthRequired(level, otp),
            fixed,
            type,
            withdrawAmountLabel: intl.formatMessage({ id: 'page.body.wallets.tabs.withdraw.content.amount' }),
            withdraw2faLabel: intl.formatMessage({ id: 'page.body.wallets.tabs.withdraw.content.code2fa' }),
            withdrawFeeLabel: intl.formatMessage({ id: 'page.body.wallets.tabs.withdraw.content.fee' }),
            withdrawTotalLabel: intl.formatMessage({ id: 'page.body.wallets.tabs.withdraw.content.total' }),
            withdrawButtonLabel: intl.formatMessage({ id: 'page.body.wallets.tabs.withdraw.content.button' }),
            ethFee,
            ethBallance,
            minWithdrawAmount,
            limitWitdraw24h,
        };

        return otp ? <Withdraw {...withdrawProps} /> : isOtpDisabled();
    };

    return (
        <React.Fragment>
            <div className="container d-flex flex-column justify-content-between" style={{ backgroundColor: '#182034', padding: '30px', borderRadius: '5px', height: '100%', fontSize: '1.3rem' }}>
                <div className="row">
                    <div className="col-12">
                        {
                            wallet ?
                                <TabsStyle>
                                    <Tabs defaultActiveKey="1" >
                                        <TabPane tab="ERC20" key="1">
                                            {/* {walletsError && <p className="pg-wallet__error">{walletsError.message}</p>} */}
                                            {currencyItem && !currencyItem.withdrawal_enabled ? (
                                                <Blur
                                                    className="pg-blur-withdraw"
                                                    text={intl.formatMessage({ id: 'page.body.wallets.tabs.withdraw.disabled.message' })}
                                                />
                                            ) : null}
                                            {renderWithdrawContent()}
                                        </TabPane>
                                        <TabPane tab="TRON20" key="2">
                                            TRON20
                            </TabPane>
                                        <TabPane tab="BEP20" key="3">
                                            BEP20
                            </TabPane>
                                    </Tabs>
                                </TabsStyle>
                                : ''
                        }

                    </div>
                </div>
            </div >
        </React.Fragment>
    )
}
