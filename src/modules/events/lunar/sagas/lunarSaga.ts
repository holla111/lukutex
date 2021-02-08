import { notification } from 'antd';
import { put } from 'redux-saga/effects';
import pluginsAPI from '../../../../plugins/lunarApi';
import {
    awardData, awardError, AwardFetch, lotData,
    lotError,
    LotFetch, lunarError, rewardData, RewardPost,
} from '../actions';
import { Award, Lot } from './../types';

export function* awardsFetchSaga(action: AwardFetch) {
    try {
        const events = yield pluginsAPI.get<Award[]>('luckymoney/fetch');
        yield put(awardData(events.data.payload));
    } catch (error) {
          if (error.response.status === 404){
            notification.open({
                type : 'error',
                message : '404',
            });
            yield put(awardError({
                code: error.response.status,
                message: error.response.data.msg,
            }));
        }else{
            yield put(awardError({
                code: error.response.status,
                message: error.response.data.msg,
            }));
        }
        notification.open({
            type : 'error',
            message : error.response.status,
            description : error.response.data.msg,
        });
    }
}

export function* lotsFetchSaga(action: LotFetch) {
    try {
        const events = yield pluginsAPI.get<Lot[]>(`luckylots/fetch/uid=${action.uid}`);
        yield put(lotData(events.data.payload));
    } catch (error) {
        if (error.response.status === 404){
            notification.open({
                type : 'error',
                message : '404',
            });
            yield put(lotError({
                code: error.response.status,
                message: error.response.data.msg,
            }));
        }else{
            yield put(lotError({
                code: error.response.status,
                message: error.response.data.msg,
            }));
        }
        notification.open({
            type : 'error',
            message : error.response.status,
            description : error.response.data.msg,
        });
    }
}

export function* rewardPostSaga(action: RewardPost) {
    try {
        const events = yield pluginsAPI.post(`reward/post/uid=${action.payload.uid}&txid=${action.payload.txid}`);
        action.payload.cb(events.data);
        yield put(rewardData(events.data));
    } catch (error) {
        if (error.response.status === 404){
            notification.open({
                type : 'error',
                message : '404',
            });
            yield put(lunarError({
                code: error.response.status,
                message: error.response.data.msg,
            }));
        }else{
            yield put(lunarError({
                code: error.response.status,
                message: error.response.data.msg,
            }));
        }
        notification.open({
            type : 'error',
            message : error.response.status,
            description : error.response.data.msg,
        });
    }
}
