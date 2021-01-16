import * as React from 'react'
import { CompetitionItem } from '../../components';
import Slider from "react-slick";

import './CompetitionList.css';

interface Competition {
    competition_name: string;
    total_prize: number;
    total_participants: number;
    start_date: string;
    end_date;
}

export const CompetitionList: React.FC = () => {
    const competions: Competition[] = [
        {
            competition_name: '$10,000 in TON Trading Competition',
            total_prize: 200000,
            total_participants: 552,
            start_date: 'Dec 12',
            end_date: 'Jan 1'
        },
        {
            competition_name: '$10,000 in TON Trading Competition',
            total_prize: 2300000,
            total_participants: 234,
            start_date: 'Dec 12',
            end_date: 'Jan 1'
        },
        {
            competition_name: 'Win $10,000 in HUB',
            total_prize: 700000,
            total_participants: 277,
            start_date: 'Dec 22',
            end_date: 'Jan 1'
        },
        {
            competition_name: '$10,000 in TON Trading Competition',
            total_prize: 800000,
            total_participants: 11,
            start_date: 'Dec 11',
            end_date: 'Jan 1'
        }
    ];

    const carouselSettings = {
        className: 'slider',
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        adaptiveHeight: true,
        centerMode: true,
        responsive: [
            {
              breakpoint: 1350,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    const competitonListView = competions.map((competition, index) => (
        <CompetitionItem index={index} competition={competition} />

    ));

    return (
        <div id="competition-list">
            <Slider {...carouselSettings}>
                {competitonListView}
            </Slider>
        </div>
    )
}
