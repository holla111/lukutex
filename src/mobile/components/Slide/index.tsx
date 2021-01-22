import * as React from 'react';
import {useSelector} from 'react-redux';
import Slider,{Settings} from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import {EventItem, selectEvents} from '../../../modules';

const settings:Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
    autoplaySpeed : 2500,
};

const SlideComponent: React.FC = ({}) => {
        const eventsData = useSelector(selectEvents).payload;

        const renderElms = (paramsEventsDat: EventItem[]) => paramsEventsDat.map((event, i) => (
            <div key={i}>
                <img src={event.image_link} alt={event.description}/>
            </div>
        ));

        return (
            <div className="cr-mobile-slide">
            <Slider {...settings}>
                {renderElms(eventsData)}
            </Slider>
        </div>
        );
};

export const Slide = React.memo(SlideComponent);
