import * as React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const SlideComponent: React.FC = ({}) => {
        return (
            <div style={{height : "300px"}}>
            <h2> Single Item</h2>
            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
        );
};

export const Slide = React.memo(SlideComponent);
