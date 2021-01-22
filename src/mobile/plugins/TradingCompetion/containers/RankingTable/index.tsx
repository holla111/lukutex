import { Table } from 'antd';
import * as React from 'react';

//css
import './RankingTable.css'

// image
import RankOne from '../../assets/1.png';
import RankTwo from '../../assets/2.png';
import RankThird from '../../assets/3.png';

export const RankingTable: React.FC = () => {
    const columns = [
        {
            title: 'Ranking',
            dataIndex: 'ranking',
            key: 'ranking',
            render: rank => {
                if (rank === 1) {
                    return (
                        <img className="trading-rank-mobile__icon" src={RankOne} alt="rank 1" />
                    )
                }
                if (rank === 2) {
                    return (
                        <img className="trading-rank-mobile__icon" src={RankTwo} alt="rank 2" />
                    )
                }
                if (rank === 3) {
                    return (
                        <img className="trading-rank-mobile__icon" src={RankThird} alt="rank 3" />
                    )
                }
                return rank;
            }
        },
        {
            title: 'UID',
            dataIndex: 'uid',
            key: 'uid',
        },
        {
            title: 'Trades',
            dataIndex: 'trades',
            key: 'trades',
        },
        {
            title: 'Volume',
            dataIndex: 'volumn',
            key: 'volumn',
        }
    ];

    const data = [
        {
            ranking: 1,
            uid: 'Crypto9999',
            trades: 9453,
            volumn: 114.371
        },
        {
            ranking: 2,
            uid: 'Crypto9999',
            trades: 9453,
            volumn: 114.371
        },


    ];

    return (
        <div id="trading-competion-mobile-ranking" className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Table size="large" pagination={false} dataSource={data} columns={columns} />
                </div>
            </div>
        </div>
    )
}
