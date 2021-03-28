import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectWallets, walletsAddressFetch, walletsFetch } from '../../../../modules';
import { DepositBody } from '../../components/DepositBody';
interface DepositAddressProps {
    currency_id: string;
}


export const DepositAddress: React.FC<DepositAddressProps> = (props: DepositAddressProps) => {
    const { currency_id } = props;

    const [generateAddressTriggered, setGenerateAddressTriggered] = React.useState(false);
    const dispatch = useDispatch();
    const wallets = useSelector(selectWallets) || [];

    const wallet = wallets.find(item => item.currency === currency_id) || { name: '', currency: '', balance: '', type: '', address: '' };

    const isAccountActivated = wallet.type === 'fiat' || wallet.balance;


    const handleGenerateAddress = () => {
        if (!wallet.address && wallets.length && wallet.type !== 'fiat') {
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
            <div className="row">
                <div className="col-12 d-flex justify-content-between">
                    <h4>Deposit Nework</h4>
                    <span>Average arrival time：1 minutes</span>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <h5 className="text-center">{currency_id.toUpperCase()} Address</h5>
                </div>
                <div className="col-12">
                    <DepositBody
                        wallet={wallet}
                        isAccountActivated={isAccountActivated}
                        handleGenerateAddress={handleGenerateAddress}
                        generateAddressTriggered={generateAddressTriggered}
                    />
                </div>

            </div>
            <div className="row mt-5">
                <div className="col-8">
                    <strong>Send only BTC to this deposit address.</strong>
                    <br />
                    Sending coin or token other than BTC to this address may result in the loss of your deposit.
                </div>
                <div className="col-4">
                    <img height="50px" width="50px" src="https://bitcoin.org/img/icons/opengraph.png?1615248773" alt="bitcoin" />
                </div>
            </div>
        </div >
    )
}
