import { CommonState } from '../../../modules/types';

export interface Competition {
    currency_id: string;
    currency_image: string;
    total_prize: string;
    trade_list: string;
    next_update: string;
    start_date: string;
    end_date: string;
}

export interface CompetionListState extends CommonState {
    payload: {
        ongoing: Competition[],
        upcoming: Competition[],
        ended: Competition[]
    };
    loading: boolean;
}
