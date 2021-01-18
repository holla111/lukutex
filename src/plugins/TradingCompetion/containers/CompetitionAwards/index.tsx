import * as React from 'react';

import './CompetitionAwards.css';
import TopOne from '../../assets/1st-v2.png';
import TopTwo from '../../assets/2nd-v2.png';
import TopThree from '../../assets/3rd-v2.png';
import TopFour from '../../assets/4th-v2.png';

export const CompetitionAwards = () => {
    const awards = [
        {
            rank: 'Top 1',
            prize: 'of the total prize pool',
            percent: '8%'
        },
        {
            rank: 'Top 2',
            prize: 'of the total prize pool',
            percent: '5%'
        },
        {
            rank: 'Top 3',
            prize: 'of the total prize pool',
            percent: '2%'
        },
        {
            rank: 'Top 4-10',
            prize: 'of the total prize pool',
            percent: '1%'
        }
    ];

    const awardImages = [TopOne, TopTwo, TopThree, TopFour];

    const awardList = awards.map((award, index) => (
        <div className="col-3 text-center competition-award-item">
            <img style={{width: '120px', height: '120px'}} src={awardImages[index]} alt="" />
            <h2 className="text-center" style={{marginTop: '1rem', paddingBottom: '2rem', fontWeight: 'bold'}}>{award.rank}</h2>
            <div className="text-center">
                <h3 style={{color: '#333'}}>{award.percent}</h3>
                <h4 style={{color: '#333'}}>{award.prize}</h4>
            </div>
        </div>
    ))
    return (
        <div id="competition-awards" className="container-fluid">
            <div className="row">
                {awardList}
            </div>
        </div>
    )
}
