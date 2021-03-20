import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { currenciesFetch, selectWallets, walletsFetch } from '../../../../modules';

import { DepositAddress, DepositHistory, DepositInfo } from '../../containers';

export const DepositScreen = () => {
    // dispatch
    const dispatch = useDispatch();
    const dispatchFetchCurrencies = () => dispatch(currenciesFetch());
    const dispatchFetchWallets = () => dispatch(walletsFetch());

    React.useEffect(() => {
        dispatchFetchCurrencies();
        dispatchFetchWallets();
    }, []);

    const { currency_id } = useParams<{ currency_id: string }>();
    const wallets = useSelector(selectWallets);
    const selectedWalletIndex = wallets.findIndex(wallet => wallet.currency === currency_id.toLowerCase());
    return (
        <div className="container" id="walles-deposit-screen" style={{ padding: '50px 5% 100px 5%', backgroundColor: '#222B42', borderRadius: '1rem' }}>
            <div className="row">
                <div className="col-6">
                    <DepositInfo currency_id={currency_id} />
                </div>
                <div className="col-6">
                    <DepositAddress currency_id={currency_id} selectedWalletIndex={selectedWalletIndex} />
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
