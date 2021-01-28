import { Table } from 'antd';
import * as React from 'react';

// axios
import pluginAPI from '../../../api/index';

//css
import './RankingTable.css'

// image
import GoldCup from '../../assets/1st-v2.png';

import RankOne from '../../assets/1.png';
import RankTwo from '../../assets/2.png';
import RankThird from '../../assets/3.png';

import { useDispatch, useSelector } from 'react-redux';
import { selectTradingRankings, selectUserInfo, tradingRankingsFetch } from '../../../../modules';

interface RankingTableProps {
    competition_id: number | string;
}

export const RankingTable: React.FC<RankingTableProps> = (props: RankingTableProps) => {
    const { competition_id } = props;

    const [rankOfUserState, setRankOfUserState] = React.useState(-1);

    const dispatch = useDispatch();
    const dispatchFetchRanksByCompetitionID = (competition_id: number | string) => dispatch(tradingRankingsFetch({ competition_id: competition_id }));

    React.useEffect(() => {
        dispatchFetchRanksByCompetitionID(competition_id);
    }, []);

    const user = useSelector(selectUserInfo);
    const ranks = useSelector(selectTradingRankings);

    const columns = [
        {
            title: 'Ranking',
            dataIndex: 'rank',
            key: 'rank',
            render: rank => {
                if (rank === 1) {
                    return (
                        <img className="trading-rank__icon" src={RankOne} alt="rank 1" />
                    )
                }
                if (rank === 2) {
                    return (
                        <img className="trading-rank__icon" src={RankTwo} alt="rank 2" />
                    )
                }
                if (rank === 3) {
                    return (
                        <img className="trading-rank__icon" src={RankThird} alt="rank 3" />
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
            title: 'Volume',
            dataIndex: 'volumn',
            key: 'volumn',
        }
    ];

    const data = ranks.payload.map(rank => {
        const newRank = {
            rank: rank.rank,
            uid: rank.uid,
            volumn: Number(rank.volumn).toFixed(3)
        }
        return newRank;
    });

    // Fetch rank of user
    React.useEffect(() => {

        pluginAPI.get(`/ranks/fetch/uid=${user.uid}`)
            .then(res => {
                const data = res.data;
                if(data.payload.rank) {
                    setRankOfUserState(data.payload.rank);
                }
            })
            .catch(err => {
                console.log(err);
            });

    }, [])

    return (
        <div id="trading-competition-ranking">
            <div className="row">
                <div className="col-12 d-flex flex-column align-items-center justify-content-center">
                    <img style={{ width: '150px' }} src={GoldCup} alt="winner-cup" />
                    <h3 className="mt-3" style={{ color: '#FFC48Eff', fontWeight: 'bold' }}>{data[0] ? data[0].uid : 'Winner'}</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <h3 style={{ textAlign: 'start' }}>Top 10 Rankings</h3>
                </div>
                <div className="col-6">
                    <h3 style={{ textAlign: 'end' }}>Your rank: 26</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Table size="small" pagination={false} dataSource={data} columns={columns} />
                </div>
            </div>
        </div>
    )
}
