import * as React from 'react'
import { useSelector } from 'react-redux';
import { QRCode } from '../../../../components';
import { formatCCYAddress } from '../../../../helpers';
import { selectWallets } from '../../../../modules';

interface DepositAddressProps {
    currency_id: string;
    selectedWalletIndex: number;
}

export const DepositAddress: React.FC<DepositAddressProps> = (props: DepositAddressProps) => {
    const { currency_id, selectedWalletIndex } = props;
    const wallets = useSelector(selectWallets);
    const currency = (wallets[selectedWalletIndex] || { currency: '' }).currency;
    console.log(wallets[selectedWalletIndex]);
    
    const selectedWalletAddress = wallets[selectedWalletIndex] ? wallets[selectedWalletIndex].address : '';
    const walletAddress = formatCCYAddress(currency, selectedWalletAddress || '');
    return (
        <div className="container" style={{ backgroundColor: '#3B4B72', padding: '30px', borderRadius: '2rem' }}>
            <div className="row">
                <div className="col-12">
                    <h4>Deposit Nework</h4>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12">
                    <span>Average arrival time：1 minutes</span>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <h5 className="text-center">{currency_id.toUpperCase()} Address</h5>
                </div>
                <div className="col-12 text-center">
                    <QRCode dimensions={118} data={walletAddress} />
                    {/* <img className="rounded mx-auto d-block" height="120" width="120" src="https://www.kaspersky.com/content/en-global/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png" /> */}
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
