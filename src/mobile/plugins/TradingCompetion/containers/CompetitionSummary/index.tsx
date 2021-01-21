import * as React from 'react';
import WinnerCup from '../../assets/1st-v2.png';

import './CompetitionSummary.css';

export const CompetitionSummary = () => {
    return (
        <div id="competition-summary" className="container-fluid">
            <div className="competition-summary-box row">
                <div className="competition-summary-participants col-4">
                    <h2 className="competition-summary-participants__title">Current number of participants</h2>
                    <h3 className="competition-summary-participants__number">2567</h3>
                </div>
                <div className="competition-summary-prize col-4">
                        <div className="">
                            <img className="competition-summary-prize-image" src={WinnerCup} alt="" />
                        </div>
                        <div className="competition-summary-prize-pool">
                            <h2 className="competition-summary-prize-pool__title">Current total prize pool</h2>
                            <h3 className="competition-summary-prize-pool__number">20 BTC</h3>
                        </div>
                </div>
                <div className="competition-summary-state col-4">
                    <h2 className="competition-summary-state__title">End of Competition</h2>
                </div>
            </div>
        </div>
    )
}
