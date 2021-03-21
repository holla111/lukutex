import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
// import { formatCCYAddress } from '../../../../helpers';
import { currenciesFetch, selectWalletAddress, walletsAddressFetch, walletsFetch } from '../../../../modules';

import { DepositAddress, DepositHistory, DepositInfo } from '../../containers';

export const DepositScreen = () => {
    const { currency_id } = useParams<{ currency_id: string }>();
    console.log(currency_id);
    
    // dispatch
    const dispatch = useDispatch();
    const dispatchFetchCurrencies = () => dispatch(currenciesFetch());
    const dispatchFetchWallets = () => dispatch(walletsFetch());
    const dispatchFetchWalletAddress = (currency_id: string) => dispatch(walletsAddressFetch({ currency: currency_id.toLowerCase() }))

    // side effects
    React.useEffect(() => {
        dispatchFetchCurrencies();
        dispatchFetchWallets();
    }, []);

    React.useEffect(() => {
        dispatchFetchWalletAddress(currency_id);
    });

    // selectors
    const walletAddress = useSelector(selectWalletAddress);
    console.log(walletAddress);

    return (
        <div className="container" id="walles-deposit-screen" style={{ padding: '50px 5% 100px 5%', backgroundColor: '#222B42', borderRadius: '1rem' }}>
            <div className="row">
                <div className="col-6">
                    <DepositInfo currency_id={currency_id} />
                </div>
                <div className="col-6">
                    <DepositAddress
                        currency_id={currency_id}
                        walletAddress={walletAddress}
                        fetchQRCode={dispatchFetchWalletAddress}
                    />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <DepositHistory />
                </div>

            </div>
        </div>
    )
}
