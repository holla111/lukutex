import * as React  from "react";
import Axios from "axios";
import { useForm } from "react-hook-form";

import bg from './Image/bg.png';
import sky from './Image/sky.jpg';
import { Collapse, Button } from 'antd';

import { 
  CaretRightOutlined,
  QuestionCircleOutlined,
  CheckOutlined,
  PhoneOutlined,
  MailOutlined,
  SkypeFilled,
  PhoneFilled,
 } from '@ant-design/icons';
 const { Panel } = Collapse;


 type PersonScore = {
  name: string;
  email: string;
  phone: number;
};

export const IntroduceScreen: React.FC<any> = (props: PersonScore) => {

  const [formContact, setFormContact] = React.useState({
    name: '',
    email: '',
    phone: '',
    skype: '',
    telegram: '',
  })

  const { handleSubmit, errors, register } = useForm<PersonScore>();

  const desc = 'We offer various purchase options: White label package is the fastest way to launch. Source code package allows you to start your own platform with an option to be customized by your team.  Source code with customized front package will be a full house solution.'

  const renderFirstScreen = () => {
    return(
      <div className="first-screen">
        {/*  */}
        <div className="main" >
          <div className="main-left">
            <div className="main-left__title">LAUNCH</div>
            <div className="main-left__sub1">YOUR OWN</div>
            <div className="main-left__sub2">LUKUTEX BUSINESS</div>
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
              <div className="title__desc" >CryptoLukuTex provides many options<br/>to earn and monetize your platform</div>
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
                  <p>LUKUTEX exchanges can introduce a paid token and/or coin listing services to drive  revenues.</p>
                </Panel>
                <Panel header="Deposit / Withdrawal Fees" key="2">
                  <p>Create an additional source of revenue by charging a small fee for deposit and(or) withdrawal.</p>
                </Panel>
                <Panel  header="Trading Fees" key="3">
                  <p>Probably the most popular way of monetization for lukutex exchanges is to charge a commission on users trades. This commission is actually a fee for the service of  facilitating a trade between the seller and the buyer.</p>
                </Panel>
                <Panel  header="Resell Crypto2Cloud Products and Services" key="4">
                  <p>You can place a link to LukutexExchange and receive a commissions for every sale your link generates.</p>
                </Panel>
                <Panel header="Liquidity Import Fees" key="5">
                  <p>Another great revenue stream for cryptocurrency exchanges is Liquidity Import, or producing liquidity for a given financial instrument. In its simplest form, market making consists of buying and selling a digital asset on your own exchange, at slightly less desirable prices than on another exchange. Once the trade occurs on your own exchange, you place a trade on a different exchange which offsets your previous trade, and you pocket the difference.</p>
                </Panel>
                <Panel  header="Market Making Services" key="6">
                  <p>LukutexExchange packages include built-in Market Making (or liquidity generation) bots. Which means you are free to provide paid market making services to token and coin projects.</p>
                </Panel>
                <Panel  header="Initial Exchange Offerings (IEOs)" key="7">
                  <p>By organizing Initial Exchange Offerings (IEOs), Security Token Offerings (STOs), and Initial Coin Offerings (ICOs), exchange operators may collect a percentage of funds raised which in itself can be to the tune of hundreds of thousands of US dollars, depending on the project.</p>
                </Panel>
                <Panel  header="Plastic ATM (Bank) Debit Cards" key="8">
                  <p>Bitcoin and other crypto debit cards work just like any other card you have in your wallet. You can swipe them at card terminals to buy things in-store, use them to withdraw cash at ATMs and enter their numbers when shopping online. By offering Plastic Crypto Debit Cards to your customers, you can create additional stable source of revenue.</p>
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
            <div className="title__content__text" data-lang-id="PURCHASE">LUKUTEX</div>
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
              <div className="price__action">
                  <a className="price__action-click" href="#form__us">START NOW</a>
              </div>
              <div className="price__action">
                  <a className="price__action-click" href="#form__us">SENT ME DEMO</a>
              </div>
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
              <div className="price__action">
                <a className="price__action-click" href="#form__us">START NOW</a>
              </div>
              <div className="price__action">
                  <a className="price__action-click" href="#form__us">SENT ME DEMO</a>
              </div>
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
              <div className="price__action">
                <a className="price__action-click" href="#form__us">START NOW</a>
              </div>
              <div className="price__action">
                  <a className="price__action-click" href="#form__us">SENT ME DEMO</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderThirdScreen = () => {

    const SOON = require('./Image/SOON.PNG');

    return (
      <div className="thirdscreen">
        <div className="thirdscreen__title">
          <div className="thirdscreen__title__content">
            <div className="thirdscreen__title__content__text">READY-MADE</div>
            <div className="thirdscreen__title__content__sub">TURNKEY EXCHANGES</div>
          </div>
          <div className="thirdscreen__title__desc">
            Do you want to purchase ready-made crypto exchange with existing domain name, custom design and layout? Get one in less than 24 hours!
          </div>
        </div>
        <div className="thirdscreen__main">
          <div className="thirdscreen__main-product">
            <div className="thirdscreen__main-product__items">
              <div className="items__image"style={{backgroundImage: `url(${SOON})`}}></div>
              <div className="items__name">LUKUTEX.COM</div>
              <div className="items__action">
                <div className="items__action-title">Up to<br/>request</div>
                <div className="items__action-buy">
                  <a className="items__action-buy-link" href="#form__us">BUY NOW</a>
                </div>
              </div>
            </div>
            <div className="thirdscreen__main-product__items">
              <div className="items__image"style={{backgroundImage: `url(${SOON})`}}></div>
              <div className="items__name">SOON</div>
              <div className="items__action">
                <div className="items__action-title">Soon</div>
                <div className="items__action-buy">
                  <a className="items__action-buy-link" href="#form__us">BUY NOW</a>
                </div>
                </div>
            </div>
            <div className="thirdscreen__main-product__items">
              <div className="items__image"style={{backgroundImage: `url(${SOON})`}}></div>
              <div className="items__name">SOON</div>
              <div className="items__action">
                <div className="items__action-title">Soon</div>
                <div className="items__action-buy">
                  <a className="items__action-buy-link" href="#form__us">BUY NOW</a>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderForth = () => {

    const icon1 = require('./Image/bookmark.png');
    const icon2 = require('./Image/auction.png');
    const icon3 = require('./Image/cryptomarket.png');
    const icon4 = require('./Image/exchange.png');
    const icon5 = require('./Image/trade.png');
    const icon6 = require('./Image/smart.png');

    return(
      <div className="forthScreen">
        <div className="forthScreen__title">
          <div className="title__content">
            <div className="title__text">MORE</div>
            <div className="title__sub">PRODUCTS</div>
          </div>
          <div className="title__desc">Besides Crypto Exchanges, we offer even more<br/> 
            turn-key ready made businesses! Check it out!
          </div>
        </div>
        <div className="forthScreen__contactus">
          <div className="forthScreen__contactus__wrap">
            <PhoneFilled />
            <div className="contactus-text">
              <a className="contactus-text-link" href="#form__us">
                Contact us for more details
              </a>
            </div>
          </div>
        </div>
        <div className="forthScreen__more-product">
          <div className="more__product-items">
            <img className="product-items-icon" src={icon1} alt=""/>
            <div className="product-items-text" >
              SPORTSBOOK<br/>BETTING/BOOKMAKER
            </div>
          </div>
          <div className="more__product-items">
            <img className="product-items-icon" src={icon2} alt=""/>
            <div className="product-items-text">
              CRYPTO MARKET<br/>CAPITALIZATIONS
            </div>
          </div>
          <div className="more__product-items">
            <img className="product-items-icon" src={icon3} alt=""/>
            <div className="product-items-text" >
              DECENTRALIZED CRYPTO<br/>EXCHANGE
            </div>
          </div>
          <div className="more__product-items">
            <img className="product-items-icon" src={icon4} alt=""/>
            <div className="product-items-text" >
              AUCTIONS
            </div>
          </div>
          <div className="more__product-items">
            <img className="product-items-icon" src={icon5} alt=""/>
            <div className="product-items-text" >
              P2P CRYPTO MARKETPLACE<br/>(LOCAL BITCOINS)
            </div>
          </div>
          <div className="more__product-items">
            <img className="product-items-icon" src={icon6} alt=""/>
            <div className="product-items-text" >
              SMART CONTRACTS
            </div>
          </div>
        </div>
      </div>
    );
  }
 
  const handleContact = (e: any) => {
    setFormContact({
      ...formContact,
      [e.target.name]: e.target.value
    });
    
  }
  const handleSubmitForm = (e: PersonScore) => {

    Axios.post('https://sheet.best/api/sheets/27dcd6cf-ef34-457e-bbd4-a094a8b59af6', formContact)
     
  }
  const renderFifth = () => {
 
    const avatar = require('./Image/avatar.png')
    return (
      <div className="fifthScreen">
        <div className="contact__us" id="form__us">
          {/* contact-us */}
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
            {/*  */}
            <div className="contactus__desc">
              Please fill out the form below to get started. Provide your contact details and one of our sales department managers will get in touch with you as soon as possible.
            </div>
            {/* form contact */}
            <form className="contactus__form" onSubmit={handleSubmit(handleSubmitForm)} >
              <div className="contactus__form__group">
                <input  placeholder="Your Name"
                        className="contactus__form-item"
                        name="name"
                        type="text"
                        ref={register({ required: true })}
                        onChange={handleContact}
                />
                {errors.name && errors.name.type === "required" && (
                  <div className="error">You must enter your name.</div>
                )}
              </div>
              
              <div className="contactus__form__groupwrap">
                <div className="contactus__form__groupwrap__twice">
                  <input  placeholder="Phone Number" 
                          className="contactus__form-item"
                          name="phone"
                          type="number"
                          ref={register({ required: true })}
                          onChange={handleContact}
                  />
                  {errors.phone && errors.phone.type === "required" && (
                    <div className="error">You must enter phone number.</div>
                  )}
                </div>
                
                <div className="contactus__form__groupwrap__twice">
                  <input  placeholder="Telegram ID"  
                          className="contactus__form-item"
                          name="telegram"
                          type="number"
                          onChange={handleContact}
                  />
                </div>
              </div>
              <div className="contactus__form__groupwrap">
                <div className="contactus__form__groupwrap__twice">
                  <input  placeholder="Email" 
                          className="contactus__form-item"
                          name="email"
                          type="email"
                          ref={register({ required: true })}
                          onChange={handleContact}
                  />
                  {errors.email && errors.email.type === "required" && (
                    <div className="error">You must enter your email.</div>
                  )}
                </div>
                <div className="contactus__form__groupwrap__twice">
                  <input  placeholder="Skype ID" 
                          className="contactus__form-item"
                          name="skype"
                          type="number"
                          onChange={handleContact}
                  />
                </div>
              </div>
              <div className="contactus__form__action">
                <Button type="primary"
                        className="form__btn"
                        style={{border: 'none'}}
                        htmlType="submit"
                        size="large"
                >
                  Send me demo
                </Button>
              </div>
            </form>
          </div>
          {/* our contact */}
          <div className="our-contact">
            {/* avatar contact */}
            <div className="our-contact__avatar">
                <img className="avatar-lukutex" src={avatar}/>
            </div>
            <div className="our-contact__name">
              contacts
            </div>
            <div className="our-contact__contact">
              <div className="option">
                <div className="option__left">+0123456789</div>
                <div className="option__sep"></div>
                <PhoneOutlined  style={{color: '#00DD00'}}/>
              </div>
              <div className="option">
                <div className="option__left">+0123456789</div>
                <div className="option__sep"></div>
                <MailOutlined  style={{color: 'white'}}/>
              </div>
              <div className="option">
                <div className="option__left">+0123456789</div>
                <div className="option__sep"></div>
                <SkypeFilled style={{color: '	#9900FF'}} />
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
      {renderThirdScreen()}
      {renderForth()}
      {renderFifth()}
    </div>
  );

}