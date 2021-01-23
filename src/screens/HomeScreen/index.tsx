import * as React  from "react";
import { Link } from "react-router-dom";
import {MarketsTableScreen} from '../../containers/MarketsTableScreen';

import {Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { eventFetch, selectEvents } from "../../modules";
import { useDispatch, useSelector } from "react-redux";
import './style.css';


// const settings = {
//   dots: false,
//   infinite: true,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   autoplay: true,
//   speed: 4000,
//   autoplaySpeed: 3000,
//   cssEase: "linear"
// };
const settingsEvents = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3
};

export const HomeScreen: React.FC<any> = (props: any) => {

  const FeaturesExchangeIcon = require('../../assets/images/landing/features/Exchange.svg');
  const FeaturesCustomizeIcon = require('../../assets/images/landing/features/Customize.svg');
  const FeaturesCommunityIcon = require('../../assets/images/landing/features/Community.svg');
  const FeaturesAPIIcon = require('../../assets/images/landing/features/API.svg');
  //state
  // const [listEvents, setListEvents] = React.useState<any>([]);

  const dispatch = useDispatch();
  const dispatchFetchEvents = () => dispatch(eventFetch());

  React.useEffect(() => {
    dispatchFetchEvents();

  }, []);

  const events = useSelector(selectEvents);
  console.log(events)

  const renderBanner = ()  => {
    return (
      <div className="landing-page__banner">
        <div className="container">
          <div className="landing-page__banner-wrapper">
            <Row className="landing-page__banner__top">
              <Col lg={12} className="landing-page__banner__top-title">
                <div className="landing-page__banner__top__new">
                  <h2>Lukutex Crypto Exchange</h2>
                  <p className="banner-tit-small">Trade Bitcoin, Ethereum and other cryptos instantly</p>
                  <div className="pc-otc-box">
                    <div className="pc-otc-buy-box">
                      <div className="pc-otc-input-box">
                        <input className="pc-otc-input" type="text" placeholder="Email Address/Mobile Number"/>
                      </div>
                      <Link className="pc-otc-buy-btn" to="/signup">Register now</Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="landing-page__banner__bottom">
               <Slider {...settingsEvents}>
                { 
                  events.payload.map(event => {
                    return (
                      <div key={event.event_id}>
                        <img src={event.image_link}></img>
                      </div>
                    )
                })}
               </Slider>
            </div>
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
      const ios = require("./Home/IOS.png");
      const android = require("./Home/GooglePlay.png");
      return (

        <div className="pg-landing-screen__market-feature">
          <div className="container">
          <div className="pg-landing-screen__market-feature__wrap">
            <div className="pg-landing-screen__market-feature__wrap__left">
              <div className="item-feature">
                <div><img src={FeaturesCustomizeIcon} alt="Screen" /></div>
                <div>
                  <h4>User-friendly</h4>
                  <span>Tutorial, Process Guidance, We know how you feel on the first time investment.</span>
                </div>
              </div>
              <div className="item-feature">
                <div><img src={FeaturesExchangeIcon} alt="Exchange" /></div>
                <div>
                  <h4>Flexible Order</h4>
                  <span>Fast Redeem,Instant Buy; Market/Limit/Profit&Loss, Multi-Trading Types</span>
                </div>
              </div>
              <div className="item-feature">
                <div><img src={FeaturesAPIIcon} alt="Bank" /></div>
                <div>
                  <h4>LuKuTex Bank</h4>
                  <span>LuKuTex Bank investment service,highest profit of 15% with daily interest.</span>
                </div>
              </div>
              <div className="item-feature">
                <div><img src={FeaturesCommunityIcon} alt="Device" /></div>
                <div>
                  <h4>Devices Covered</h4>
                  <span>Whenever there is a network, you can manage your crypto assets with Web/iOS/Android everywhere</span>
                </div>
              </div>
            </div>
  
            <div className="pg-landing-screen__market-feature__wrap__right">
              <div className="item-mobile__title">LuKuTex Exchange is live now</div>
              {actionButton()}
  
              <div className="item-mobile__mobile">
                <div className="item-mobile__title version-mobile">
                  Mobile Version comming soon !!!
                </div>
                <div className="item-mobile__mobile-logo">
                  <img src={ios} alt="" />
                  <img src={android} alt="" />
                </div>
              </div>
            </div>
          </div>
          </div>
         
        </div>
      );
     
    }

    // const renderPartner = () => {

    //   const Lmy = require("./Home/Partner/lmy.png");
    //   const Cmc = require("./Home/Partner/cmc.jpg");
    //   return (
    //     <div className="home-page__partner">
    //        <div className="container">
    //          <div className="partner-title">Partners</div>
    //         <Slider {...settings}>
    //         <div className="partner-wrap">
    //           <img src={Lmy}></img>
    //         </div>
         
    //         <div className="partner-wrap">
    //           <img src={Cmc}></img>
    //         </div>
        
    //         <div className="partner-wrap">
    //           <img src={Lmy}></img>
    //         </div>
    //         <div className="partner-wrap">
    //           <img src={Cmc}></img>
    //         </div>
    //         <div className="partner-wrap">
    //           <img src={Lmy}></img>
    //         </div >
    //         <div className="partner-wrap">
    //           <img src={Cmc}></img>
    //         </div>
    //         </Slider>
    //       </div>     
    //     </div>     
    //   );   
    // }

    const actionButton = () => {
      if (props.isLoggedIn) {
        return (
          <Link to="/trade" className="register-button">
            Trade Now
          </Link>
        );
      }
      else {
        return (
          <Link to="/signup" className="register-button button-rigister">
            Register Account
          </Link>
        );
      }
    }

    return (
        <div className="home-page">
           {renderBanner()}
           {renderMarket()}
           {renderAboutUs()}
           {renderFeature()}
           {/* {renderPartner()} */}
        </div>
    );
}

