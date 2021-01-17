import * as React from 'react'
import { CompetitionItem } from '../../components';
import Slider from "react-slick";

import './CompetitionList.css';

interface Competition {
  competition_id: number;
  competition_name: string;
  total_prize: number;
  total_participants: number;
  start_date: string;
  end_date;
}

export const CompetitionList: React.FC = () => {
  const competions: Competition[] = [
    {
      competition_id: 1,
      competition_name: '$10,000 in VCA Trading Competition',
      total_prize: 200000,
      total_participants: 552,
      start_date: 'Dec 12',
      end_date: 'Jan 1'
    }
  ];

  const carouselSettings = {
    className: 'slider',
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1700,
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
