import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { currenciesFetch, selectCurrencies, selectUserInfo, selectWallets, walletsFetch } from '../../../../modules';
import { WithdrawAddress } from '../../containers/WithdrawAddress';
import { WithdrawInfo } from '../../containers/WithdrawInfo'

export const WithdrawScreen = () => {
    const { currency_id } = useParams<{ currency_id: string }>();

    // selectors
    const currencies = useSelector(selectCurrencies);
    const wallets = useSelector(selectWallets) || [];
    const user = useSelector(selectUserInfo);

    const dispatch = useDispatch();
    const dispatchFetchCurrencies = () => dispatch(currenciesFetch());
    const dispatchFetchWallets = () => dispatch(walletsFetch());

    // side effects
    React.useEffect(() => {
        dispatchFetchCurrencies();
        dispatchFetchWallets();
    }, []);

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
                    <WithdrawInfo currency_id={currency_id.toLowerCase()} currency_icon={findIcon(currency_id)} />
                </div>
                <div className="col-6">
                    <WithdrawAddress
                        user={user}
                        currency_id={currency_id.toLowerCase()}
                        wallets={wallets}
                        currencies={currencies}
                    />
                </div>
            </div>
            <div className="row">

            </div>
        </div>
    )
}
