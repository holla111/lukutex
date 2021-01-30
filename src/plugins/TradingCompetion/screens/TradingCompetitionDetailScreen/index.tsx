import * as React from 'react';
import { CompetitionInfo, PrizeTable } from '../../containers';
import './TradingCompetitionDetailScreen.css';
import { Col, message, Row } from 'antd';
import { RankingTable } from '../../containers';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { findCompetitionbyId, selectCompetitionItem, selectUserInfo } from '../../../../modules';

// axios
import pluginAPI from '../../../api/index';

export interface Prize {
    rank: string;
    award: string;
}

export interface Prizes {
    competition_id: number | string;
    prizes: Prize[]
}

const prizeList: Prizes[] = [
    {
        competition_id: 1,
        prizes: [
            {
                rank: '1',
                award: '200 LKT'
            },
            {
                rank: '2',
                award: '200 LKT'
            },
            {
                rank: '3',
                award: '200 LKT'
            },
            {
                rank: '4',
                award: '200 LKT'
            }
        ]
    }
]

export const TradingCompetitionDetailScreen: React.FC = () => {
    const [rankOfUserState, setRankOfUserState] = React.useState(-1);
    const [volumnOfUserState, setVolumnOfUserState] = React.useState(0);

    const { competition_id } = useParams<{ competition_id: string }>();
    const competition = useSelector(selectCompetitionItem);
    const user = useSelector(selectUserInfo);

    const dispatch = useDispatch();
    const dispatchFetchCompetitionItemByID = (ieoID) => dispatch(findCompetitionbyId({
        id: ieoID
    }));

    React.useEffect(() => {
        if (competition.loading) {
            message.loading('Waiting a seconds...', 0);
        } else {
            message.destroy();
        }
        return function cleanup() {
            message.destroy();
        }
    }, [competition.loading]);

    React.useEffect(() => {
        dispatchFetchCompetitionItemByID(competition_id);
    }, []);

    React.useEffect(() => {
        if (user.uid !== '') {
            pluginAPI.get(`/ranks/fetchByUid/competition_id=${competition_id}&uid=${user.uid}`)
                .then(res => {
                    const data = res.data;
                    if (data.payload.rank) {
                        setRankOfUserState(data.payload.rank);
                        setVolumnOfUserState(data.payload.volumn)
                    }
                })
                .catch(err => {
                });

        }
    }, [user.uid]);

    const prizeOfCompetition = prizeList.find(prize => prize.competition_id == competition_id);
    
    const renderTradingInfo = () => {
        if (prizeOfCompetition) {
            return (
                <Row gutter={[16, 16]}>
                    <Col span={16}><CompetitionInfo volumn={volumnOfUserState} /></Col>
                    <Col span={8}><PrizeTable prizes={[...prizeOfCompetition.prizes]} /></Col>
                </Row>
            );
        }
        return (
            <Row gutter={[16, 16]}>
                <Col span={24}><CompetitionInfo volumn={volumnOfUserState} /></Col>
            </Row>
        );
    }

    return (
        <div id="trading-competition-detail-screen">
            <div id="trading-competition-detail__info" className="container-fluid">
                {renderTradingInfo()}
            </div>
            <div id="trading-competition-detail__ranks" className="container-fluid">
                <RankingTable competition_id={competition_id} rank={rankOfUserState} prizes={prizeOfCompetition}/>
            </div>
        </div>
    );
}
