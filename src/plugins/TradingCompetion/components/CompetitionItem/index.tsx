import * as React from 'react';
import { useHistory } from 'react-router';
import './CompetitionItem.css';
// import Countdown from 'react-countdown';
import { currenciesFetch } from '../../../../modules';
import { useDispatch } from 'react-redux';

import GiftBoxImage from '../../assets/4th-v2.png';
import { Button } from 'antd';

export const CompetitionItem: React.FC = () => {
    const history = useHistory();

    const dispatch = useDispatch();
    const dispatchcFetchCurrencies = () => dispatch(currenciesFetch());

    React.useEffect(() => {
        dispatchcFetchCurrencies();
    }, []);

    const handleDetailClick = () => {
        const location = {
            pathname: '/trading-competition/1'
        }
        history.push(location);
    }
    return (
        <div className="competition-item container">
            <div className="row competition-item__top" >
                <div className="col-6">
                    <img style={{ width: '26px', height: '26px' }} src="https://coinsbit.io/storage/currency/sVmRDPgDdWX6P6NVqjzIswtr3w4XQdahRwVTrvbr.png" alt="currency" />
                    <span style={{ padding: '0.5rem 1rem', color: '#fff', fontSize: '1rem' }}>TPD</span>
                </div>
                <div className="col-6" style={{ textAlign: 'end' }}>
                    <span style={{ backgroundColor: 'rgb(12, 157, 88)' }} className="competition-item__badge">Active</span>
                </div>
            </div>
            <div className="row competition-item__middle mt-3">
                <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                    <img style={{ width: '60px', height: '60px', textAlign: 'center' }} src={GiftBoxImage} alt="gift-box" />
                    <br />
                    <h3>3.000 BTNYX</h3>
                    <h4>Best prize</h4>
                </div>
            </div>
            <div className="row competition-item__bottom mt-3">
               
                <div className="col-12 text-center">
                    <Button block type="primary" onClick={handleDetailClick}>Start</Button>
                </div>
            </div>
        </div>
    );
};
