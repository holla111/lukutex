import * as React from 'react'

import './CompetitionItem.css';

import CaptainImage from '../../assets/captain.png';
import PlayerImage from '../../assets/player.png';
import { useHistory } from 'react-router';
interface CompetitionItem {
    competition_id: number;
    competition_name: string;
    total_prize: number;
    total_participants: number;
    start_date: string;
    end_date;
}

interface CompetitionItemProps {
    competition: CompetitionItem;
    index: number;
}


export const CompetitionItem: React.FC<CompetitionItemProps> = (props: CompetitionItemProps) => {
    // const {competition_name,total_prize, total_participants, start_date, end_date} = props.competition;
    const { competition_name, competition_id } = props.competition;
    const { index } = props;
    const selectedImage = index % 2 == 0 ? CaptainImage : PlayerImage;

    const history = useHistory();

    const handleDetailClick = () => {
        const location = {
            pathname: '/trading-competition/' + competition_id
        }
        history.push(location);
    }

    return (

        <div id="competition-mobile-item" style={{ backgroundImage: `url(${selectedImage})` }} onClick={handleDetailClick}>
            <div className="competition-mobile-item-top">
                <div className="competition-mobile-item-top__date">
                    Dec 5 - Jan 1
                    </div>
                <div className="competition-mobile-item-top__title">
                    {competition_name}
                </div>
            </div>
            <br/>
            <div className="competition-mobile-item-bottom row">
                <div className="competition-mobile-item-bottom__prize col-6">
                    <p>Round prize: $7000</p>
                </div>
                <div className="competition-mobile-item-bottom__participant col-6">
                    <p>Participant: 267</p>
                </div>
            </div>

            <div className="competition-mobile-item-winner">
                Phuochuynh
            </div>
        </div>
    )
}
