import * as React from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { selectCurrencies } from '../../../modules';
import { selectWallets, walletsAddressFetch, walletsFetch } from '../../../modules/user/wallets';
import { Subheader, WalletDepositBody, WalletHeader, WalletBanner } from '../../components';

const WalletDeposit: React.FC = () => {
    const [generateAddressTriggered, setGenerateAddressTriggered] = React.useState(false);
    const dispatch = useDispatch();
    const intl = useIntl();
    const history = useHistory();
    const { currency = '' } = useParams<{ currency: string }>();
    const wallets = useSelector(selectWallets) || [];

    const wallet = wallets.find(item => item.currency === currency) || { name: '', currency: '', balance: '', type: '', address: '' };
    const isAccountActivated = wallet.type === 'fiat' || wallet.balance;

    const currencies = useSelector(selectCurrencies);
    const founded_currency = currencies.find(c => c.id.toLowerCase() === currency.toLowerCase()) || { icon_url: '' };
    
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
            <WalletHeader currency={wallet.currency} name={wallet.name} iconUrl={founded_currency.icon_url} />
            <WalletBanner wallet={wallet} />
            <WalletDepositBody
                wallet={wallet}
                isAccountActivated={isAccountActivated}
                handleGenerateAddress={handleGenerateAddress}
                generateAddressTriggered={generateAddressTriggered}
            />
        </React.Fragment>
    );
};

export {
    WalletDeposit,
};
