import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { currenciesFetch, walletsFetch } from '../../../../modules';
import { DepositAddress, DepositHistory, DepositInfo } from '../../containers';



export const DepositScreen = () => {
    const { currency_id } = useParams<{ currency_id: string }>();

    const dispatch = useDispatch();
    const dispatchFetchCurrencies = () => dispatch(currenciesFetch());
    const dispatchFetchWallets = () => dispatch(walletsFetch());

    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }


    // side effects
    React.useEffect(() => {
        dispatchFetchCurrencies();
        dispatchFetchWallets();
    }, []);

    return (
        <div className="container-fluid" id="walles-deposit-screen" style={{ position: "relative", padding: '20px 10% 20px 10%', marginTop: '-7px', backgroundColor: '#222B42' }}>
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
            <div className="row">
                <div className="col-12">
                    <DepositHistory currency_id={currency_id} />
                </div>

            </div>
            <div style={{ position: "fixed", top: '10%', left: '2rem' }}>
                <img style={{cursor: "pointer"}} src="https://img.icons8.com/fluent/48/000000/circled-left.png" onClick={goBack} />
            </div>
        </div>

    );
};
