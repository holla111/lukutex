import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { currenciesFetch, ethFeeFetch, selectChildCurrencies, selectCurrencies, selectETHFee, selectUserInfo, selectWallets, walletsChildCurrenciesFetch, walletsFetch } from '../../../../modules';
import { WithdrawAddress, WithdrawHistory, WithdrawInfo } from '../../containers';

export const WithdrawScreen = () => {
    const { currency_id } = useParams<{ currency_id: string }>();

    // selectors
    const currencies = useSelector(selectCurrencies);
    const wallets = useSelector(selectWallets) || [];
    const user = useSelector(selectUserInfo);
    const eth_fee = useSelector(selectETHFee);
    const child_currencies = useSelector(selectChildCurrencies);
    
    const dispatch = useDispatch();
    const dispatchFetchCurrencies = () => dispatch(currenciesFetch());
    const dispatchFetchWallets = () => dispatch(walletsFetch());
    const dispatchFetchEthFee = () => dispatch(ethFeeFetch());
    const dispatchFetchChildCurrencies = () => dispatch(walletsChildCurrenciesFetch({ currency: currency_id }));

    // side effects
    React.useEffect(() => {
        dispatchFetchCurrencies();
        dispatchFetchWallets();
        dispatchFetchEthFee();
    }, []);

    React.useEffect(() => {
        dispatchFetchChildCurrencies();
    }, [currency_id]);

    const networks = [
        {
            name: 'TRON20',
            key: 'tron20',
            currency: child_currencies.payload.find(child_currency => child_currency.blockchain_key === 'tron20') || { id: '', type: '', blockchain_key: '', name: '', parent_id: '', deposit_enabled: 0, withdrawal_enabled: 0 }
        },
        {
            name: 'BEP20',
            key: 'bep20',
            currency: child_currencies.payload.find(child_currency => child_currency.blockchain_key === 'bep20') || { id: '', type: '', blockchain_key: '', name: '', parent_id: '', deposit_enabled: 0, withdrawal_enabled: 0 }
        }
    ]

    // method
    const findIcon = (currency_id: string): string => {
        const currency = currencies.find((currency: any) => currency.id === currency_id);
        try {
            return require(`../../../../../node_modules/cryptocurrency-icons/128/color/${currency_id.toLowerCase()}.png`);
        } catch (err) {
            if (currency) return currency.icon_url;
            return require('../../../../../node_modules/cryptocurrency-icons/svg/color/generic.svg');
        }
    };

    return (
        <div className="container-fluid" style={{ position: "relative", padding: '20px 10% 20px 10%', marginTop: '-7px', backgroundColor: '#222B42', color: '#fff' }}>
            <div className="row">
                <div className="col-6">
                    <WithdrawInfo wallets={wallets} currency_id={currency_id.toLowerCase()} currency_icon={findIcon(currency_id)} />
                </div>
                <div className="col-6">
                    <WithdrawAddress
                        user={user}
                        currency_id={currency_id.toLowerCase()}
                        wallets={wallets}
                        currencies={currencies}
                        eth_fee={eth_fee}
                        networks={networks}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <WithdrawHistory currency_id={currency_id.toLowerCase()} />
                </div>
            </div>
        </div>
    )
}
