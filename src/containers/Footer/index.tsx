import * as React from 'react';
import { RouterProps } from 'react-router';
import { withRouter, Link } from 'react-router-dom';
import { Input} from 'antd';
import {
  MailOutlined, 
  PhoneOutlined, 
  HomeOutlined } from '@ant-design/icons';

const TelegramIcon = require('../../assets/images/landing/social/Telegram.svg');
const TwitterIcon = require('../../assets/images/landing/social/Twitter.svg');
const FacebookIcon = require('../../assets/images/landing/social/Facebook.svg');
const Logo = require('../../assets/images/logo.svg');


class FooterComponent extends React.Component<RouterProps> {

  public render() {

    if (this.props.history.location.pathname.startsWith('/confirm')) {
      return <React.Fragment />;
    }
    return (
      <div className="display">
        {this.renderFooterDesktop()}
      </div>
    );
  }

  private renderFooterDesktop = () => {
    return (
      <footer className="page-footer font-small unique-color-dark">
        <div className="text-center text-md-left mt-5 hmax">
          <div className="row">
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
              <div className="pg-logo">
                <a href="/"><img src={Logo} alt="" className="pg-logo__img" /></a>
              </div >
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
              <h5 className="text-uppercase font-weight-bold">Service Support</h5>
              <p style={{ marginTop: 26 }}>
                <Link className="footer-lable" to="/fee">Asset Fee</Link>
              </p>
              <p>
                <a href="#!" className="footer-lable">Cloud Exchange Program</a>
              </p>
              <p>
                <a href="https://form.jotform.com/203166968415058" className="footer-lable" target="blank">Listing Token</a>
              </p>
              <p>
              <Link className="footer-lable" to="/announcement">Announcement</Link>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
              <h5 className="text-uppercase font-weight-bold">Contact</h5>
              <p className="footer-about" style={{ marginTop: 26 }}>
                {/* <img src={phone} alt="Phone" /> */}
                <div style={{marginRight: '12px'}}>
                  <PhoneOutlined />
                </div>
                + 60 787960192</p>
              <p className="footer-about">
                {/* <img src={email} alt="Email" style={{color: 'white'}}/> */}
                <div style={{marginRight: '12px'}}>
                  <MailOutlined />
                </div>
                  Listing@lukutex.com<br/>Business@lukutex.com</p>
              <p className="footer-about">
                <div className="address">
                  {/* <p><img src={office} alt="address" /></p> */}
                  <div style={{marginRight: '12px'}}>
                    <HomeOutlined />
                  </div>
                  <p>Warisan City View
                  A13-14, 3/ 94A Batu 1 1/2 Jalan Cheras
                  56100 Kuala Lumpur
                  Malaysia</p>
                </div>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
              <div>
                <h5 className="text-uppercase font-weight-bold">Receive new</h5>
                <div style={{ marginBottom: 40, marginTop: 26 }}>
                  <Input addonAfter={<MailOutlined /> } placeholder="Enter Email Address" />
                </div>
              </div>
              <div>
                <h6 className="text-uppercase font-weight-bold">Social</h6>
                <a href="https://www.facebook.com/lukutex" className="gplus-ic" target="blank">
                  <img src={FacebookIcon} alt="Facebook" />
                </a>
                <a href="https://twitter.com/Lukutex" className="gplus-ic" target="blank">
                  <img src={TwitterIcon} alt="Twitter" />
                </a>
                <a href="https://t.me/lukutex_office" className="gplus-ic" target="blank">
                  <img src={TelegramIcon} alt="Telegram" />
                </a>
              </div>
              
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://lukutex.com/"> LuKuTex.com </a>
        </div>
      </footer>
    );
  }
}

// tslint:disable-next-line:no-any
const Footer = withRouter(FooterComponent as any) as any;

export {
  Footer,
};