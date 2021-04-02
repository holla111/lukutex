import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ethFeeFetch, selectETHFee} from '../modules';

export const useEthFeeFetch = () => {
    const shouldDispatch = useSelector(selectETHFee);
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (shouldDispatch) {
            dispatch(ethFeeFetch());
        }
    }, [dispatch, shouldDispatch]);
};
