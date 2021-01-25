import * as React from 'react';
import './CompetitionInfo.css';
import Countdown from 'react-countdown';
import { Button, Col, Row, Statistic } from 'antd';
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
            <div className="ant-statistic-content-value">{minutes<10 ? 0 : ''}{minutes} : {seconds<10 ? 0 : ''}{seconds}</div>
        </div>;

    }
};

export const CompetitionInfo: React.FC<SaleInfoProps> = (props: SaleInfoProps) => {
    // const countdownTime = props.sale.type === 'upcoming' ? new Date(props.sale.start_date) : new Date(props.sale.end_date);

    return (
        <div id="competition-info" style={{ backgroundColor: '#1c3049', padding: '3vw', height: '100%' }}>
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="competition-info__title" style={{ color: '#f07c22' }}>Become a winner and get a prize</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h5>Trade BTNYX and win. The one who trades the largest volume will receive the main prize! Condition: buy BTNYX without sell!</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Statistic title="Your Trade Volumn" value={112893} />
                        </Col>
                        <Col span={12}>
                            <Statistic title="Start Time" value={'12-01-2021, 03:00'} />
                        </Col>
                        <Col span={12}>
                            <h3 className="ant-statistic-title">Next rank update</h3>
                            <Countdown date={'2021-01-27'} renderer={renderer} />
                        </Col>
                        <Col span={12}>
                            <Statistic title="End Time" value={'26-01-2021, 03:00'} />
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <Button type="primary">Let's Trade</Button>
                </div>
            </div>
        </div>
    )
}
