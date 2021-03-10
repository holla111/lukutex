import * as React from 'react';

import { DepositAddress, DepositHistory, DepositInfo } from '../../containers';

export const DepositScreen = () => {

    return (
        <div className="container-fluid" id="walles-deposit-screen" style={{backgroundColor: '#252F48', padding: '50px 100px'}}>
            <div className="row">
                <div className="col-12">
                    <h1>Deposit</h1>
                </div>
                <div className="col-6">
                    <DepositInfo />
                </div>
                <div className="col-6">
                    <DepositAddress />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <DepositHistory />
                </div>
            </div>
        </div>
    )
}
