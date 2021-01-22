import * as React from 'react';

import './CompetitionSummary.css';

export const CompetitionSummary = () => {
    return (
        <div id="competition-summary-mobile" className="container-fluid">
            <div className="competition-summary-mobile-box row">
                <div className="competition-summary-mobile-participants col-12">
                    <h2 className="competition-summary-mobile-participants__title">Current number of participants</h2>
                    <h3 className="competition-summary-mobile-participants__number">2567</h3>
                </div>
                <div className="competition-summary-mobile-prize col-12">
                    <h2 className="competition-summary-mobile-prize-pool__title">Current total prize pool</h2>
                    <h3 className="competition-summary-mobile-prize-pool__number">20 BTC</h3>
                </div>
                <div className="competition-summary-mobile-state col-12">
                    <h2 className="competition-summary-mobile-state__title" style={{fontSize: '1.3rem'}}>End of Competition</h2>
                </div>
            </div>
        </div>
    )
}
