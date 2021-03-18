import * as React from 'react'

export const DepositAddress = () => {
    return (
        <div className="container" style={{ backgroundColor: '#222B42', padding: '20px', borderRadius: '2rem' }}>
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
                    <h5 className="text-center">BTC Address</h5>
                </div>
                <div className="col-12">
                    <img className="rounded mx-auto d-block" height="120" width="120" src="https://www.kaspersky.com/content/en-global/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png" />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-8">
                    <strong>Send only BTC to this deposit address.</strong>
                    <br/>
                    Sending coin or token other than BTC to this address may result in the loss of your deposit.
                </div>
                <div className="col-4">
                    <img height="50px" width="50px" src="https://bitcoin.org/img/icons/opengraph.png?1615248773" alt="bitcoin"/>
                </div>
            </div>
        </div>
    )
}
