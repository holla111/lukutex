import * as React from 'react';

import { DepositAddress, DepositHistory, DepositInfo } from '../../containers';

export const DepositScreen = () => {

    return (
        <div className="container-fluid" id="walles-deposit-screen" style={{ padding: '50px 10%'}}>
            <div className="row">
                <div className="col-6">
                    <DepositInfo />
                </div>
                <div className="col-6">
                    <DepositAddress />
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
