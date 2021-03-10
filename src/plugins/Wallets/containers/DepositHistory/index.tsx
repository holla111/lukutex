import * as React from 'react';
import { useSelector } from 'react-redux';
import { WalletHistory } from '../../../../containers/Wallets/History';
import {  selectHistory } from '../../../../modules';

export const DepositHistory = () => {

    
    // selector
    const histories = useSelector(selectHistory);

    //  // dispatch
    //  const dispatch = useDispatch();
    //  const dispatchFetchHistories = () => dispatch(fetchHistory());
     
    console.log(histories);

    return (
        <div>
            <WalletHistory label="deposit" type="deposits" currency={'bch'} />
        </div>
    )
}
