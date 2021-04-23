import { call, put, takeLeading } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
// import pluginAPI from '../../../../plugins/api';
import { alertPush } from '../../alert';
import {
    currenciesData,
    currenciesError,
} from '../actions';
import { CURRENCIES_FETCH } from '../constants';

const currenciesOptions: RequestOptions = {
    apiVersion: 'peatio',
};

export function* rootCurrenciesSaga() {
    yield takeLeading(CURRENCIES_FETCH, currenciesFetchSaga);
}

// interface ParentCurrency {
//     id: string;
//     blockchain_key: string;
// }

export function* currenciesFetchSaga() {
    try {
        const currencies = yield call(API.get(currenciesOptions), '/public/currencies');
        // const parent_currencies = yield pluginAPI.get<ParentCurrency[]>('wallet/parent-currencies/fetch/all');
        
        // const currencies_with_blockchainkey = [...currencies].map(currency => {
        //     const cur = parent_currencies.data.find(cur => cur.id === currency.id);
        //     return {
        //         ...currency,
        //         blockchain_key: cur ? cur.blockchain_key : null
        //     }
        // });
        yield put(currenciesData(currencies));
    } catch (error) {
        yield put(currenciesError());
        yield put(alertPush({message: error.message, code: error.code, type: 'error'}));
    }
}
