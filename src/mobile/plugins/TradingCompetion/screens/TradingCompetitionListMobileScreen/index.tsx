import * as React from 'react';
import { RankingTable, CompetitionList } from '../../containers';

import './TradingCompetionListScreen.css'
export const TradingCompetionListMobileScreen: React.FC = () => {
    return (
        <div id="trading-competition-mobile-list" className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1 style={{fontSize: '1.6rem'}}>Welcome to Trading Competition</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <CompetitionList />
                </div>
            </div>
            <div className="row" style={{marginTop: '50px'}}>
                <div className="col-12">
                    <RankingTable />
                </div>
            </div>
        </div>
    )
}
