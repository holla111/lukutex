import * as React from 'react';
import { CompetitionSummary, RankingTable, CompetitionAwards } from '../../containers';

import './TradingCompetitionDetailScreen.css';

export const TradingCompetitionDetailScreen = () => {
    return (
        <React.Fragment>
            <div id="trading-competition-detail" className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <CompetitionSummary />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <h3 className="ml-4" style={{fontSize: '2rem'}}>TOP 10 Rankings</h3>
                        <RankingTable />
                    </div>
                </div>

            </div>
            <div id="trading-competition-detail__awards" className="container-fluid">
                <div className="row mt-3">
                    <div className="col-12">
                        <CompetitionAwards />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
