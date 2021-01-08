import { RootState } from '../../index';
import { ETHFee } from './types';

export const selectETHFee = (state: RootState): ETHFee => state.ethFee.ethFee.payload;
