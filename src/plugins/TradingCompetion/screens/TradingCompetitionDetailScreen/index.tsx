// import * as React from 'react';
// import { CompetitionSummary, RankingTable, CompetitionAwards } from '../../containers';

// import './TradingCompetitionDetailScreen.css';

// export const TradingCompetitionDetailScreen = () => {
//     return (
//         <React.Fragment>
//             <div id="trading-competition-detail" className="container-fluid">
//                 <div className="row">
//                     <div className="col-12">
//                         <CompetitionSummary />
//                     </div>
//                 </div>
//                 <div className="row mt-3">
//                     <div className="col-12">
//                         <h3 className="ml-4" style={{fontSize: '2rem'}}>TOP 10 Rankings</h3>
//                         <RankingTable />
//                     </div>
//                 </div>

//             </div>
//             <div id="trading-competition-detail__awards" className="container-fluid">
//                 <div className="row mt-3">
//                     <div className="col-12">
//                         <CompetitionAwards />
//                     </div>
//                 </div>
//             </div>
//         </React.Fragment>
//     )
// }

import * as React from 'react';
import { CompetitionInfo, PrizeTable } from '../../containers';
import './TradingCompetitionDetailScreen.css';
import { Col, message, Row } from 'antd';
import { RankingTable } from '../../containers';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { findCompetitionbyId, selectCompetitionItem } from '../../../../modules';

export const TradingCompetitionDetailScreen: React.FC = () => {
    const { competition_id } = useParams<{ competition_id: string }>();
    const competition = useSelector(selectCompetitionItem);
    
    // const user = useSelector(selectUserInfo);
    const dispatch = useDispatch();
    const dispatchFetchCompetitionItemByID = (ieoID) => dispatch(findCompetitionbyId({
        id: competition_id
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
    
    return (
        <div id="trading-competition-detail-screen">
            <div id="trading-competition-detail__info" className="container-fluid">
                <Row gutter={[16, 16]}>
                    <Col span={16}><CompetitionInfo /></Col>
                    <Col span={8}><PrizeTable /></Col>
                </Row>
            </div>
            <div id="trading-competition-detail__ranks" className="container-fluid">
                <RankingTable competition_id={competition_id} />
            </div>
        </div>
    );
}
