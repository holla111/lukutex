import { CommonState } from '../../types';

export interface ETHFee {
    fee: (number | undefined);
}

export interface ETHFeeState extends CommonState {
    payload: ETHFee;
    loading: boolean;
}
