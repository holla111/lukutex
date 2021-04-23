import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { setDocumentTitle } from '../../../../helpers';
import { allChildCurrenciesFetch, beneficiariesFetch, currenciesFetch, marketsFetch, selectChildCurrencies, selectCurrencies, selectWallets, walletsChildCurrenciesFetch, walletsFetch } from '../../../../modules';
import { DepositAddress, DepositHistory, DepositInfo } from '../../containers';



export const DepositScreen = () => {
    setDocumentTitle('Deposit');
    const { currency_id } = useParams<{ currency_id: string }>();
    // selectors
    const currencies = useSelector(selectCurrencies);
    const wallets = useSelector(selectWallets) || [];
    const child_currencies = useSelector(selectChildCurrencies);

    const dispatch = useDispatch();
    const dispatchFetchCurrencies = () => dispatch(currenciesFetch());
    const dispatchFetchWallets = () => dispatch(walletsFetch());
    const dispatchFetchChildCurrencies = () => dispatch(walletsChildCurrenciesFetch({ currency: currency_id }));
    const dispatchcFetchAllChildCurrencies = () => dispatch(allChildCurrenciesFetch());
    const dispatchFetchMarkets = () => dispatch(marketsFetch());
    const dispatchFetchBeneficiaries = () => dispatch(beneficiariesFetch());
    const history = useHistory();

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

    // side effects
    React.useEffect(() => {
        dispatchFetchChildCurrencies();
        dispatchFetchMarkets();
        dispatchFetchBeneficiaries();
        dispatchFetchCurrencies();
        dispatchFetchWallets();
        dispatchFetchChildCurrencies();
        dispatchcFetchAllChildCurrencies();
    }, [currency_id]);

    return (
        <div className="container-fluid" style={{ position: "relative", padding: '20px 10% 20px 10%', marginTop: '-7px', backgroundColor: '#171c29', color: '#fff' }}>
            <div className="row" style={{padding: '0 1rem'}}>
                <div className="col-6" style={{backgroundColor: '#1E2841ff'}}>
                    <DepositInfo
                        currency_id={currency_id.toLowerCase()}
                        currency_icon={findIcon(currency_id.toLowerCase())}
                        wallets={wallets}
                    />
                </div>
                <div className="col-6" style={{ backgroundColor: '#182034'}}>
                    <DepositAddress
                        currency_id={currency_id.toLowerCase()}
                        currency_icon={findIcon(currency_id.toLowerCase())}
                        child_currencies={child_currencies.payload}
                    />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <DepositHistory currency_id={currency_id} />
                </div>

            </div>
            <div style={{ position: "fixed", top: '10%', left: '2rem' }}>
                <img style={{ cursor: "pointer" }} src="https://img.icons8.com/fluent/48/000000/circled-left.png" onClick={() => history.push({ pathname: '/new-wallets' })} alt="Back" />
            </div>
        </div>

    );
};
