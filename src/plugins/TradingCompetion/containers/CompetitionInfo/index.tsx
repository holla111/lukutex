import * as React from 'react';
import './CompetitionInfo.css';
import Countdown from 'react-countdown';
import { Button, Cascader, Statistic } from 'antd';
interface SaleInfoProps {
    // ieoID: string;
    // sale: SaleItem;
}

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <div className="ant-statistic-content">
            <div className="ant-statistic-content-value">00 : 00</div>
        </div>;
    } else {
        // Render a countdown
        return <div className="ant-statistic-content">
            <div className="ant-statistic-content-value">{minutes < 10 ? 0 : ''}{minutes} : {seconds < 10 ? 0 : ''}{seconds}</div>
        </div>;

    }
};

export const CompetitionInfo: React.FC<SaleInfoProps> = (props: SaleInfoProps) => {
    const options = [
        {
            value: 'btcusdt',
            label: 'BTC/USDT',

        },
        {
            value: 'btcesc',
            label: 'BTC/ESC',
        },
    ];

    function onChange(value) {
        console.log(value);
    }
    // const countdownTime = props.sale.type === 'upcoming' ? new Date(props.sale.start_date) : new Date(props.sale.end_date);

    return (
        <div id="competition-info" style={{ backgroundColor: '#1c3049', height: '100%' }}>
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="competition-info__title" style={{ color: '#f07c22' }}>Become a winner and get a prize</h2>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12">
                    <h5>Trade BTNYX and win. The one who trades the largest volume will receive the main prize! Condition: buy BTNYX without sell!</h5>
                </div>
            </div>
            <hr />
            <div className="row mt-3">
                <div className="col-xl-4 col-md-6 mt-3">
                    <Statistic title="Your Trade Volumn" value={112893} />
                    <div className="mt-3">
                        <h3 className="ant-statistic-title">Next rank update</h3>
                        <Countdown date={'2021-01-27'} renderer={renderer} />
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 mt-3">
                    <Statistic title="Start Time" value={'12-01-2021, 03:00'} />
                    <Statistic className="mt-3" title="End Time" value={'26-01-2021, 03:00'} />
                </div>
                <div className="col-xl-4 col-md-12 mt-3 d-flex flex-column align-items-center justify-content-center">
                    <Cascader className="competition-item__bottom-select w-100 text-center" allowClear={false} options={options} onChange={onChange} placeholder="Trade" />
                    <Button type="primary" className="mt-3">Let's Trade</Button>
                </div>
            </div>
        </div>
    )
}
