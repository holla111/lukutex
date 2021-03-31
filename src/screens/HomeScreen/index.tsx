import * as React  from "react";
import {MarketsTableScreen} from '../../containers/MarketsTableScreen';
import {DispChart} from '../../containers';
import Slider from "react-slick";

import { eventFetch, selectEvents } from "../../modules";
import { useDispatch, useSelector } from "react-redux";
import {
  AppleFilled,
  AndroidFilled
} from '@ant-design/icons';
import './style.css';
import styled from 'styled-components';

const WrapperComponet = styled.div`
  position: absolute;
  left: 170px;
  bottom: 0;
  z-index: 1;
  img {
    width: 30px;
  }
`;


const settingEvents = {

  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1, 
};
const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
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

export const HomeScreen: React.FC<any> = (props: any) => {

  const dispatch = useDispatch();
  const dispatchFetchEvents = () => dispatch(eventFetch());

  React.useEffect(() => {
    dispatchFetchEvents();

  }, []);

  const events = useSelector(selectEvents);
  console.log(events)

  const renderBanner = ()  => {

    const speakericon = require('./Home/sound-speaker.svg');
    return (
      <div className="landing-page__banner">
            <div className="landing-page__banner-list">
              <Slider {...settingEvents}>
                {[...events.payload].map(event => {
                    return (
                      <a style={{width: '100%', height: '100%'}} href={event.ref_link} className="slide">
                          <img style={{width: '100%', height: '100%'}} src={event.image_link} />
                      </a>
                    )
                })}
              </Slider>
            </div>
            <WrapperComponet>
              <img src={speakericon} alt="speaker" />
            </WrapperComponet>
            <div className="landing-page__banner-list-link">
              <Slider {...settings}>
                {[...events.payload].map(event => {
                    return (
                      <a href={event.ref_link} className="slide-link">{event.event_name}</a>
                    )
                })}
              </Slider>
            </div>
      </div>
    );
  }

  const renderChart = () => {
    return (
      <div className="home-page__chart">
        <div className="container">
          <div className="row">
            
              <DispChart/>
          
          </div>
        </div>
      </div>
    );
  }

    const renderMarket = () => {
      return (
        <div className="home-page__markets">
          <div className="container">
            <div className="row">
              <div className="col-12">
              <MarketsTableScreen />
              </div>
            </div>
          </div>
        </div>
      ) 
    }
    
    const renderAboutUs = () => {
      const IMG1 = require("./Home/Roadmap/img1.png");
      const IMG2 = require("./Home/Roadmap/img2.png");
      const IMG3 = require("./Home/Roadmap/img3.png");

      return(
        <div className="home-page__about-us">
          <div className="container">
            <h2 className="about-us-title">Secure, Efficient, Innovative</h2>
            <p className="sub-title">We provide secure and trusted digital asset trading services for users from over 100 countries and regions around the globe.</p>
            <ul className="feature">
              <li>
                <img src={IMG1}></img>
                <h3>Various Digital Asset Services</h3>
                <p>Support instant crypto purchase, spot trading, derivatives trading and a complex of investment choices. Give you the key to access the digital world.</p>
              </li>
              <li>
                <img src={IMG2}></img>
                <h3>Multi-layer Protection</h3>
                <p>Multi-cluster network security structure. Multi-layer risk control and real time alerting system. Protect your asset security all day long.</p>
              </li>
              <li>
                <img src={IMG3}></img>
                <h3>User-oriented Design</h3>
                <p>User friendly product design. Multi-platform supported. Speedy memory matching system. All for the most stable and efficient user experience.</p>
              </li>
            </ul>
          </div>
        </div>
      );
    }
    // 
    const renderFeature = () => {
      const Image = require("./Home/feature.png");
     return (
        <div className="homepage__feature" style={{paddingBottom: '72px'}}>
          <div className="container">
            <div className="pc-index-downlod-title">
              <h3 className="pc-index-download-tit">Trade anytime, anywhere.</h3>
              <div className="pc-index-download-con">
                <p>Download the LukuTex App, start your trading journey today.</p>
              </div>
            </div>
            <div className="pc-index-download">
              <div className="pc-index-download-pic" style={{backgroundImage: 'url(' + Image + ')', backgroundRepeat: 'no-repeat'}}></div>
              <div className="download-box">
                <div className="title title-active">iOS</div>
                <div className="download-ios">
                  <div className="download-btn-ios download-appstore-active">
                    <AppleFilled />
                    <div className="download-ios-title">
                      <p>Download on the</p>
                      <p>Apple Store</p>
                    </div>
                  </div>
                  <div className="download-btn-ios download-btn-right download-active">
                    <AppleFilled />
                    <div className="download-ios-title">
                      <p>Download for</p>
                      <p>iOS</p>
                    </div>
                  </div>
                </div>
                <div className="title">Android</div>
                  <div className="download-Android">
                    <div className="download-btn-android download-btn-googlePlay">
                      <AndroidFilled />
                      <div className="download-ios-title">
                        <p>GET IT ON</p>
                        <p>Google play</p>
                      </div>
                    </div>
                    <div className="download-btn-android download-btn-right download-active">
                      <AndroidFilled />
                      <div className="download-ios-title">
                        <p>Download for</p>
                        <p>Android</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
     );
    }
    return (
        <div className="home-page">
           {renderBanner()}
           {renderChart()}
           {renderMarket()}
           {renderAboutUs()}
           {renderFeature()}
        </div>
    );
}

