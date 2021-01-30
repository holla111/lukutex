import { put } from 'redux-saga/effects';
import axios from 'axios';

import {
    priceData,
    priceError,
    GetPrice
} from '../actions';

const COMPARE_BASE_API_URL = 'https://min-api.cryptocompare.com/data/price';
const API_KEY = '25fc5392e29e67321a0bfb9ff465ea0671c5c3b741266b0e04dc79264efb9ee3';

export function* getPrice(action: GetPrice) {
    const fsym = action.payload.fsym;
    const tsyms = action.payload.tsyms.map(tysm => tysm.toUpperCase()).join(',');
    try {
        const price = yield axios.get<any>(`${COMPARE_BASE_API_URL}?fsym=${fsym}&tsyms=${tsyms.toUpperCase()}&api_key=${API_KEY}`);
        const keys = Object.keys(price.data);
        keys.forEach((key) => {
            price.data.key =  String(price.data.key).toUpperCase();
            price.data[key] = Number(price.data[key]);
        });
        let newPrice = {...price.data};
        if(tsyms.includes('KOBE')) {
            const kobePrice = yield axios.get('https://www.lukutex.com/api/v2/peatio/public/markets/kobeusdt/tickers');
            newPrice = {
                ...newPrice,
                'KOBE': Number(kobePrice.data.ticker.last)
            }
        }
        if(tsyms.includes('ESC')) {
            const escPrice = yield axios.get('https://www.lukutex.com/api/v2/peatio/public/markets/escusdt/tickers');
            newPrice = {
                ...newPrice,
                'ESC': Number(escPrice.data.ticker.last)
            }
        }
        if(tsyms.includes('SWP')) {
            const escPrice = yield axios.get('https://www.lukutex.com/api/v2/peatio/public/markets/swpusdt/tickers');
            newPrice = {
                ...newPrice,
                'SWP': Number(escPrice.data.ticker.last)
            }
        }
        if(tsyms.includes('EOC')) {
            const escPrice = yield axios.get('https://www.lukutex.com/api/v2/peatio/public/markets/eocusdt/tickers');
            newPrice = {
                ...newPrice,
                'EOC': Number(escPrice.data.ticker.last)
            }
        }
        yield put(priceData({
            payload: {
                ...newPrice,
            },
            loading: false
        }));
    } catch (error) {
        yield put(priceError(error));
    }
}
