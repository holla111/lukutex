import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { currenciesFetch, walletsFetch } from '../../../../modules';
import { DepositAddress, DepositHistory, DepositInfo } from '../../containers';



export const DepositScreen = () => {
    const { currency_id } = useParams<{ currency_id: string }>();

    const dispatch = useDispatch();
    const dispatchFetchCurrencies = () => dispatch(currenciesFetch());
    const dispatchFetchWallets = () => dispatch(walletsFetch());


    // side effects
    React.useEffect(() => {
        dispatchFetchCurrencies();
        dispatchFetchWallets();
    }, []);

    return (
        <div className="container" id="walles-deposit-screen" style={{ padding: '50px 2% 100px 2%', backgroundColor: '#222B42', borderRadius: '1rem' }}>
            <div className="row">
                <div className="col-6">
                    <DepositInfo currency_id={currency_id.toLowerCase()} />
                </div>
                <div className="col-6">
                    <DepositAddress
                        currency_id={currency_id.toLowerCase()}
                    />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <DepositHistory />
                </div>

            </div>
        </div>
    );
};
