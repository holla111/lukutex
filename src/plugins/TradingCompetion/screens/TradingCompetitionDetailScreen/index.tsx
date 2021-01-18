import * as React from 'react';
import { CompetitionSummary, RankingTable, CompetitionAwards } from '../../containers';

import './TradingCompetitionDetailScreen.css';

export const TradingCompetitionDetailScreen = () => {
    return (
        <div id="trading-competition-detail" className="container-fluid">
           <div className="row">
               <div className="col-12">
               <CompetitionSummary />
               </div>
           </div>
           <div className="row">
               <div className="col-6">
                    <RankingTable />
               </div>
               <div className="col-6">
                    <RankingTable />
               </div>
           </div>
           <div className="row">
               <div className="col-12">
                   <CompetitionAwards />
               </div>
           </div>
        </div>
    )
}
