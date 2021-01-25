import { Table } from 'antd';
import * as React from 'react';

//css
import './PrizeTable.css'

// image
import RankOne from '../../assets/1.png';
import RankTwo from '../../assets/2.png';
import RankThird from '../../assets/3.png';

export const PrizeTable: React.FC = () => {
    const columns = [
        {
            title: 'Ranking',
            dataIndex: 'ranking',
            key: 'ranking',
            render: rank => {
                if (rank === 1) {
                    return (
                        <img className="rank-icon" src={RankOne} alt="rank 1" />
                    )
                }
                if (rank === 2) {
                    return (
                        <img className="rank-icon" src={RankTwo} alt="rank 2" />
                    )
                }
                if (rank === 3) {
                    return (
                        <img className="rank-icon" src={RankThird} alt="rank 3" />
                    )
                }
                return rank;
            }
        },
        {
            title: 'Reward',
            dataIndex: 'reward',
            key: 'reward',
        }
    ];

    const data = [
        {
            ranking: 1,
            reward: '114.371 LKT'
        },
        {
            ranking: 2,
            reward: '14.371 LKT'
        },
        {
            ranking: 3,
            reward: '14.371 LKT'
        },
        {
            ranking: 4,
            reward: '14.371 LKT'
        },
        {
            ranking: 5,
            reward: '14.371 LKT'
        },
        {
            ranking: '6-10',
            reward: '14.371 LKT'
        },


    ];

    return (
        <div id="prize-table" className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Table size="small" pagination={false} dataSource={data} columns={columns} />
                </div>
            </div>
        </div>
    )
}
