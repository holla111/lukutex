import * as React from 'react';
import Slider,{Settings} from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

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
        return (
            <div className="cr-mobile-slide">
            <Slider {...settings}>
                <div>
                    <img src="https://via.placeholder.com/360x150.png?text=Slide+1" alt=""/>
                </div>
                <div>
                    <img src="https://via.placeholder.com/360x150.png?text=Slide+2" alt=""/>
                </div>
                <div>
                    <img src="https://via.placeholder.com/360x150.png?text=Slide+3" alt=""/>
                </div>
                <div>
                    <img src="https://via.placeholder.com/360x150.png?text=Slide+4" alt=""/>
                </div>
                <div>
                    <img src="https://via.placeholder.com/360x150.png?text=Slide+5" alt=""/>
                </div>
                <div>
                    <img src="https://via.placeholder.com/360x150.png?text=Slide+6" alt=""/>
                </div>
            </Slider>
        </div>
        );
};

export const Slide = React.memo(SlideComponent);
