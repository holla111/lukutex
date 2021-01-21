import { CommonState } from '../../../modules/types';
export interface TradingRanking {
    uid: string;
    total: string;
}
export interface TradingRankingsState extends CommonState {
    payload: TradingRanking[];
    loading: boolean;
}
