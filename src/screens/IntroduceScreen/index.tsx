import * as React  from "react";
// import { Link } from 'react-router-dom';
import bg from './Image/bg.png';
import sky from './Image/sky.jpg';
import { Collapse } from 'antd';
import { 
  CaretRightOutlined,
  QuestionCircleOutlined,
  CheckOutlined,
  PhoneOutlined,
  MailOutlined,
  SkypeFilled,
 } from '@ant-design/icons';

const { Panel } = Collapse;

export const IntroduceScreen: React.FC<any> = () => {

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const desc = 'We offer various purchase options: White label package is the fastest way to launch. Source code package allows you to start your own platform with an option to be customized by your team.  Source code with customized front package will be a full house solution.'

  const renderFirstScreen = () => {
    // const Logo = require('../../assets/images/logo.svg');
    return(
      <div className="first-screen">
        {/*  */}
        <div className="main" >
          <div className="main-left">
            <div className="main-left__title">LAUNCH</div>
            <div className="main-left__sub1">YOUR OWN</div>
            <div className="main-left__sub2">CRYPTO EXCHANGE</div>
            <div className="main-left__desc">Create your own cryptocurrency exchange quickly and easily. We will provide all the required tools and technical support</div>
          </div>
          <div className="main-right">
            <img className="main-right__img" src={bg}/>
          </div>
        </div>
        {/*  */}
        <div className="step-wrap">
          <div className="content">
            <div className="step">
              <div className="step-item">
                <div className="step-item-color" style={{backgroundColor: '#edd344'}}></div>
                <div className="step-item-title" style={{color: '#edd344'}}>
                  choose your plan
                </div>
                <div className="step-item-des">
                  We offer complete turn-key solutions as a white label or full source code (you own your codebase)
                </div>
                <div className="step-item-num">- 01 -</div>
              </div>
              <div className="step-item">
                <div className="step-item-color" style={{backgroundColor: '#26a9bf'}}></div>
                <div className="step-item-title" style={{color: '#26a9bf'}}>
                  make a payment
                </div>
                <div className="step-item-des">
                  We offer complete turn-key solutions as a white label or full source code (you own your codebase)
                </div>
                <div className="step-item-num">- 02 -</div>
              </div>
              <div className="step-item">
                <div className="step-item-color" style={{backgroundColor: '#d64d4d'}}></div>
                <div className="step-item-title" style={{color: '#d64d4d'}}>
                  get your exchange
                </div>
                <div className="step-item-des">
                  We offer complete turn-key solutions as a white label or full source code (you own your codebase)
                </div>
                <div className="step-item-num">- 02 -</div>
              </div>
            </div>
            <div className="title" >
              <div className="title__desc" >Crypto2Cloud provides many options<br/>to earn and monetize your platform</div>
              <div className="title__content">
                <div className="title__content__text">WAYS TO MONETIZE</div>
                <div className="title__content__sub">YOUR EXCHANGE</div>
              </div>
            </div>
            <div className="monetize">
              <Collapse
                bordered={false}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                className="site-collapse-custom-collapse"
              >
                <Panel  header="Listing Fees" key="1">
                  <p>{text}</p>
                </Panel>
                <Panel header="Deposit / Withdrawal Fees" key="2">
                  <p>{text}</p>
                </Panel>
                <Panel  header="Trading Fees" key="3">
                  <p>{text}</p>
                </Panel>
                <Panel  header="Resell Crypto2Cloud Products and Services" key="4">
                  <p>{text}</p>
                </Panel>
                <Panel header="Liquidity Import Fees" key="5">
                  <p>{text}</p>
                </Panel>
                <Panel  header="Market Making Services" key="6">
                  <p>{text}</p>
                </Panel>
                <Panel  header="Initial Exchange Offerings (IEOs)" key="5">
                  <p>{text}</p>
                </Panel>
                <Panel  header="Plastic ATM (Bank) Debit Cards" key="6">
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderSecondScreen = () => {
    return(
      <div className="secondScreen">
        <div className="title">
          <div className="title__desc">{desc}</div>
          <div className="title__content">
            <div className="title__content__text" data-lang-id="PURCHASE">PACKAGE</div>
            <div className="title__content__sub" data-lang-id="OPTIONS">OPTIONS</div>
			    </div>
        </div>
        <div className="plans">
          <div className="plans__items">
            <div className="plans__items-lable">
              <div>
                <b style={{color: 'white', fontSize: 24}}>WHITE</b> 
                <span style={{color: 'white', fontSize: 24}}> LABEL</span>
              </div>
              <div>
                <QuestionCircleOutlined style={{color: 'white', marginBottom: 16}} />
              </div>
              
            </div>
            <div className="plans__items-content"  style={{backgroundImage: `url(${sky})`}}>
              <div className="plans__items-content__ok">
                <CheckOutlined 
                  style={{marginRight: 13, fontSize: 20, color: '#2facc3'}}
                />
                <div className="plan__ok-text">Hosted by us</div>
              </div>
              <div className="plans__items-content__ok">
                <CheckOutlined 
                  style={{marginRight: 13, fontSize: 20, color: '#2facc3'}}
                />
                <div className="plan__ok-text">Customizable front-end (API)</div>
              </div>
              <div className="plans__items-content__ok">
                <CheckOutlined 
                  style={{marginRight: 13, fontSize: 20, color: '#2facc3'}}
                />
                <div className="plan__ok-text">Full-featured public & private API</div>
              </div>
              <div className="plans__items-content__ok">
                <CheckOutlined 
                  style={{marginRight: 13, fontSize: 20, color: '#2facc3'}}
                />
                <div className="plan__ok-text">Full-featured administration panel</div>
              </div>
              <div className="plans__items-content__ok">
                <CheckOutlined 
                  style={{marginRight: 13, fontSize: 20, color: '#2facc3'}}
                />
                <div className="plan__ok-text">One-click integration of ERC20</div>
              </div>
            </div>
            <div className="plans__items-footer">
              <div className="price__action">START NOW</div>
            </div>
          </div>
          <div className="plans__items">
            <div className="plans__items-lable">
              <div>
                <b style={{color: 'white', fontSize: 24}}>FULL</b> 
                <span style={{color: 'white', fontSize: 24}}> SOURCE CODE</span>
              </div>
              <div>
                <QuestionCircleOutlined style={{color: 'white', marginBottom: 16}} />
              </div>
              
            </div>
            <div className="plans__items-content"  style={{backgroundImage: `url(${sky})`}}>
              <div className="plans__items-content__ok">
                <CheckOutlined 
                  style={{marginRight: 13, fontSize: 20, color: '#2facc3'}}
                />
                <div className="plan__ok-text">Hosted by us (or you)</div>
              </div>
              <div className="plans__items-content__ok">
                <CheckOutlined 
                  style={{marginRight: 13, fontSize: 20, color: '#2facc3'}}
                />
                <div className="plan__ok-text">Customizable front-end (API)</div>
              </div>
              <div className="plans__items-content__ok">
                <CheckOutlined 
                  style={{marginRight: 13, fontSize: 20, color: '#2facc3'}}
                />
                <div className="plan__ok-text">Full-featured public & private API</div>
              </div>
              <div className="plans__items-content__ok">
                <CheckOutlined 
                  style={{marginRight: 13, fontSize: 20, color: '#2facc3'}}
                />
                <div className="plan__ok-text">Full-featured administration panel</div>
              </div>
              <div className="plans__items-content__ok">
                <CheckOutlined 
                  style={{marginRight: 13, fontSize: 20, color: '#2facc3'}}
                />
                <div className="plan__ok-text">One-click integration of ERC20</div>
              </div>
            </div>
            <div className="plans__items-footer">
              <div className="price__action">START NOW</div>
            </div>
          </div>
          <div className="plans__items">
            <div className="plans__items-lable">
              <div>
                <b style={{color: 'white', fontSize: 20}}>SOURCE &</b> 
                <span style={{color: 'white', fontSize: 20}}> CUSTOM DESIGN</span>
              </div>
              <div>
                <QuestionCircleOutlined style={{color: 'white', marginBottom: 16}} />
              </div>
              
            </div>
            <div className="plans__items-content"  style={{backgroundImage: `url(${sky})`}}>
              <div className="plans__items-content__ok">
                <CheckOutlined 
                  style={{marginRight: 13, fontSize: 20, color: '#2facc3'}}
                />
                <div className="plan__ok-text">Hosted by us</div>
              </div>
              <div className="plans__items-content__ok">
                <CheckOutlined 
                  style={{marginRight: 13, fontSize: 20, color: '#2facc3'}}
                />
                <div className="plan__ok-text">Customizable front-end (API)</div>
              </div>
              <div className="plans__items-content__ok">
                <CheckOutlined 
                  style={{marginRight: 13, fontSize: 20, color: '#2facc3'}}
                />
                <div className="plan__ok-text">Full source code</div>
              </div>
              <div className="plans__items-content__ok">
                <CheckOutlined 
                  style={{marginRight: 13, fontSize: 20, color: '#2facc3'}}
                />
                <div className="plan__ok-text">Full-featured administration panel</div>
              </div>
              <div className="plans__items-content__ok">
                <CheckOutlined 
                  style={{marginRight: 13, fontSize: 20, color: '#2facc3'}}
                />
                <div className="plan__ok-text">Custom Design and front-end</div>
              </div>
            </div>
            <div className="plans__items-footer">
              <div className="price__action">START NOW</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderFifth = () => {
    const coin = require('./Image/Coin.PNG')
    return (
      <div className="fifthScreen">
        <div className="why__us">
          <div className="why__us-content">
            <div className="title">
              <div className="title__desc">Quick and easy setup in 72 hours or even less.<br/>Professional support and dev team at your disposal.</div>
              <div className="title__content">
                <div className="title__text">WHY</div>
                <div className="title__sub">US</div>
						  </div>
            </div>
            <div className="img" style={{width: '100%'}}>
              <img src={coin} style={{width: '100%'}}/>
            </div>
            <div className="desc">
              <span className="desc__span">We offer various packages to meet your requirements:</span>
              <b className="desc__bold"> White Label</b>
              <b className="desc__bold"> Full Source Code</b>
              <span className="desc__span"> which is intended for experienced crypto enterpreneurs with their own established development team, highly customizable, and</span>
              <a className="desc__link" href="#"> custom-designed</a>
              <span className="desc__span"> exchanges.</span>
            </div>
          </div>
          <div className="why__us-benefits">
            <div className="benefits">
              <div className="benefits__title">
                <div className="benefits__bold">Quick</div>
                <div data-lang-id="easysetup">&amp; easy setup</div>
              </div>
              <div className="benefits__desc">Getting started is easy. Just confirm your package with our manager.</div>
              <div className="benefits__sub">Full product delivery only takes up to 72h</div>
           </div>
           <div className="benefits">
              <div className="benefits__title">
                <div className="benefits__bold">Fully</div>
                <div data-lang-id="easysetup">customizable</div>
              </div>
              <div className="benefits__desc">Create your own custom exchange and dashboard design easily.</div>
              <div className="benefits__sub">Full-featured Front-End API</div>
           </div>
           <div className="benefits">
              <div className="benefits__title">
                <div className="benefits__bold">Professional</div>
                <div data-lang-id="easysetup">team</div>
              </div>
              <div className="benefits__desc">We are always here to help</div>
              <div className="benefits__sub">Additional development services only $50/hour</div>
           </div>
            
          </div>
        </div>
        <div className="contact__us">
          <div className="contactus">
            <div className="contactus__title">
              <div className="contactus__title__desc">
                Have a question or ready to order?
                <br/>Our sales department is always here at your disposal.
              </div>
              <div className="contactus__title__content">
                <div className="contact__title__text">
                  CONTACT
                </div>
                <div className="contact__title__sub">
                  US
                </div>
					    </div>
            </div>
            <div className="contactus__desc">
              Please fill out the form below to get started. Provide your contact details and one of our sales department managers will get in touch with you as soon as possible.
            </div>
            <div className="contactus__form">
              
            </div>
          </div>
          <div className="our-contact">
            {/* avatar contact */}
            <div className="our-contact__avatar">
                <img src=""/>
            </div>
            <div className="our-contact__name">
              contacts
            </div>
            <div className="our-contact__contact">
              <div className="option">
                <div className="option__left">+0123456789</div>
                <div className="option__sep"></div>
                <PhoneOutlined  style={{color: 'green'}}/>
              </div>
              <div className="option">
                <div className="option__left">+0123456789</div>
                <div className="option__sep"></div>
                <MailOutlined  style={{color: 'white'}}/>
              </div>
              <div className="option">
                <div className="option__left">+0123456789</div>
                <div className="option__sep"></div>
                <SkypeFilled style={{color: 'violet'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return(
    <div className="introduce">
      {renderFirstScreen()}
      {renderSecondScreen()}
      {renderFifth()}
    </div>
  );

}