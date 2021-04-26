import { Col, Row, Statistic } from 'antd';
import * as React from 'react'
export const YRFIInfo = () => {
    const statistics = [
        {
            title: 'Ticker',
            subTitle: 'YRFI'
        },
        {
            title: 'STARTING PRICE',
            subTitle: '75 USD'
        },
        {
            title: 'TOTAL SUPPLY',
            subTitle: '30,000 YRFI'
        },
        {
            title: 'KYC',
            subTitle: 'NO'
        },
        {
            title: 'CURRENCIES',
            subTitle: 'TRX, ETH, USDT'
        },
        {
            title: 'AVAILABLE FOR IEO',
            subTitle: '1000 YRFI'
        },
        {
            title: 'RESTRICTED COUNTRIES',
            subTitle: 'NO'
        },
        {
            title: 'TOKEN TYPE',
            subTitle: 'TRC-20'
        },
    ];
    
    let statisticsContent;
    statisticsContent = statistics.map(statistic => {
        return (
            <Col span={8} className="text-center">
                <Statistic title={statistic.title} value={statistic.subTitle} />
            </Col>
        );
    });
    
    return (
        <React.Fragment>
            <div className="row justify-content-center">
                <div className="col-12">
                    <h2 className="mb-4" style={{ fontWeight: 'bold', fontSize: '2rem' }}>Tokensale Information:</h2>
                    <p style={{ fontSize: '1.6rem' }}>YearFinance Token<strong style={{ color: '#fff' }}> (YRFI)</strong> IEO sale starts on 14th of March!</p>
                    <p style={{ fontSize: '1.6rem' }}>
                        Pre-Launch: 14/03/2021, 8:00am, UTC - 21/03/2021, 8:00am, UTC | $75 USD | <strong style={{ color: '#fff' }}> Pre-Launch!</strong>
                    </p>
                </div>
            </div>
            <Row gutter={[32, 32]}>
                {statisticsContent}
            </Row>
        </React.Fragment>
    )
}
