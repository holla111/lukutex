import * as React  from "react";
import axios from 'axios';
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Radio, DatePicker, Space, Checkbox, Row, Col} from 'antd';
import { CheckboxGroupProps } from "antd/lib/checkbox";


interface IFormInput {
  firstname: string;
  lastname: string;
  email: string;
  nameofproject: string;
  contact: string;
  projectwebsite: string;
  description: string;
  media: string;
  coinname: string[];
  cointype: string;
  cointicker: string;
  explorerlink: string;
  listingdate: string;
  tradedate: string;
  totalsupply: number;
  logo: string;
  fileList: string;
}
export const ListingFormScreen: React.FC = () => {

  const { register, handleSubmit, errors } = useForm<IFormInput>();

  const [formValue, setFormValue] = React.useState<IFormInput>({
    firstname: '',
    lastname: '',
    email: '',
    nameofproject: '',
    contact: '',
    projectwebsite: '',
    description: '',
    media: '',
    coinname:[],
    cointype: '',
    cointicker: '',
    explorerlink: '',
    listingdate: 'listingdate',
    tradedate: 'tradedate',
    totalsupply: 0,
    logo: '',
    fileList : ''
  });

  const handleValidInput = (e: any) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    });
  }

  const handleValidInputFile : React.InputHTMLAttributes<HTMLInputElement>["onChange"] = (e) => {
     const newFormValue = {...formValue};
     newFormValue.logo = URL.createObjectURL(e.target.files && e.target.files[0]);

     setFormValue(newFormValue)
      
  }

  const handleListingDate = (date, dateString) => {

    let newFormValue = {...formValue};
    newFormValue.listingdate = dateString;
    setFormValue(newFormValue)
  }
  const handleTradeDate = (date, dateString) => {

    let newFormValue = {...formValue};
    newFormValue.tradedate= dateString;
    setFormValue(newFormValue)

  }
  const handlePair : CheckboxGroupProps["onChange"] = (e) => {
    setFormValue((prev) => {
      prev.coinname =  e as string[];
      return prev;
    })
  
  }
  
  const onSubmit: SubmitHandler<IFormInput> = (data, e: any) => {
   
    const url = 'https://docs.google.com/spreadsheets/d/11fz7m4xCN8eUF3B5yPrTELmML-pdNgJiBEk53MDnCM8/edit?fbclid=IwAR3caL7VxJUn72UEHAipN_76FSAfSr6EwS44ZHB6EYMYXwIPunF503cWlRU#gid=1378413446'
    axios.post(url, formValue)

    setTimeout(() => {
      e.target.reset(); 
    }, 2000); 
    alert("Your form is being uploaded!");

  };


  const renderForm = () => {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    const profile = require('./common/man.png');
    const gmail = require('./common/gmail.png');
    const skype = require('./common/skype.png');
    const telegram = require('./common/telegram.png');
    console.log(formValue)
    console.log(formValue)
    return (
      <form className="listingformscreen" onSubmit={handleSubmit(onSubmit)}>
        {/*  */}
        <div className="main__1">
          <div className="listing__info">
            <div className="listing__info-heading">
              <h3 className="heading-title">Listen Token</h3>
              <div className="heading-line"></div>
            </div>
            <div className="listing__info-name">
              <div className="listing__info-name-firstname">
                <label className="Input-label">FirstName</label>
                <input className="Input-text"
                        name='firstname'
                        type='text'
                        ref={register({ required: true})}
                        onChange={handleValidInput}
                />
                {errors.firstname && <p className='error'>This field is required</p>}
              </div>
              <div className="listing__info-name-lastname">
                <label className="Input-label">LastName</label>
                <input className="Input-text"
                      name='lastname'
                      type='text'
                      ref={register({ required: true})}
                      onChange={handleValidInput}
                />
                {errors.lastname && <p className='error'>This field is required</p>}
              </div>
            </div>
            <div className="listing__info-email">
              <label className="Input-label">Email</label>
              <input className="Input-text"
                      name='email'
                      type='email'
                      ref={register({ required: true})}
                      onChange={handleValidInput}
              />
              {errors.email && <p className='error'>This field is required</p>}
            </div>
          </div>
          <div className="project__info">
            <div className="project__info-heading">
              <h3 className="heading-title">Project Infomation</h3>
              <div className="heading-line"></div>
            </div>
            <div className="project__info-wrap">
              <label className="Input-label">Name of Project</label>
              <input className="Input-text"
                      name='nameofproject'
                      type='text'
                      ref={register({ required: true})}
                      onChange={handleValidInput}
              />
              {errors.nameofproject && <p className='error'>This field is required</p>}
            </div>
            <div className="project__info-wrap">
              <label className="Input-label">Contact</label>
              <input className="Input-text"
                      name='contact'
                      type='text'
                      ref={register({ required: true})}
                      onChange={handleValidInput}
              />     
              {errors.contact && <p className='error'>This field is required </p>} 
              </div>
            <div className="project__info-wrap">
              <label className="Input-label">Project Website</label>   
              <input className="Input-text"
                      name='projectwebsite'
                      type='url'
                      ref={register({ required: true})}
                      onChange={handleValidInput}
              />
              {errors.projectwebsite && <p className='error'>This field is required</p>}
            </div>
            <div className="project__info-wrap">
              <label className="Input-label">Description</label>
              <textarea className="Input-text"
                      name='description'
                      ref={register({ required: true})}
                      onChange={handleValidInput}
              />
              {errors.description && <p className='error'>This field is required</p>}
            </div>
            <div className="project__info-wrap">
              <label className="Input-label">Media (Facebook, Telegram...)</label>
              <input className="Input-text"
                      name='media'
                      type='url'
                      ref={register({ required: true})}
                      onChange={handleValidInput}
              />
              {errors.media && <p className='error'>This field is required</p>}
            </div>
          </div>
        </div>
        {/*  */}
        <div className="main__2">
          <div className="main__2-lock-1">
            <div className="contact__us">
              <div className="contact__us__avatar">
                <div className="contact__avatar-wrap">
                  <img src={profile} alt="avatar" className="avatar"/>
                </div>
              </div>
              <div className="contact__us__contact">
                <div className="contact-option">
                  <div className="option__left">Luktex@gmail.com</div>
                  <div className="option__mid"></div>
                  <img src={gmail} alt="call" className="option__right"/>
                </div>
                <div className="contact-option">
                  <div className="option__left">LUkutex Skype</div>
                  <div className="option__mid"></div>
                  <img src={skype} alt="call" className="option__right"/>
                </div>
                <div className="contact-option">
                  <div className="option__left">Lukutex Telagram</div>
                  <div className="option__mid"></div>
                  <img src={telegram} alt="call" className="option__right"/>
                </div>
              </div>
            </div>
          </div>
          <div className="main__2-lock-2">
            <div className="token__info">
              <div className="token__info-infomation">
                <div className="token__info-infomation-heading">
                  <h3 className="heading-title">Token Infomation</h3>
                  <div className="heading-line"></div>
                </div>
                <div className="token__info-infomation-lock-1">
                  <div className="token__info-coin">
                    <div className="token__info-coi-wrap">
                      <label className="Input-label">Coin Name(Ex: Bitcoin)</label>
                      <input className="Input-text"
                                id="input"
                                name='coinname'
                                type='text'
                                ref={register({ required: true})}
                                onChange={handleValidInput}
                      />
                      {errors.coinname && <p className='error'>This field is required</p>}
                    </div>
                    <div className="token__info-coin-wrap">
                      <label className="Input-label">Coin Ticker(Ex: BTC)</label>
                      <input className="Input-text"
                                id="input"
                                name='cointicker'
                                type='text'
                                ref={register({ required: true})}
                                onChange={handleValidInput}
                      />
                      {errors.cointicker && <p className='error'>This field is required</p>}
                    </div>
                  </div>
                </div>
                <div className="token__info-infomation-lock-2">
                  <div className="token__info-explorer">
                    <div className="token__info-explorer__texterea">
                      <div className="project__info-wrap">
                        <label className="Input-label">Explorer Link</label>
                        <textarea className="Input-text"
                                name='explorerlink'
                                ref={register({ required: true})}
                                onChange={handleValidInput}
                        />
                        {errors.explorerlink && <p className='error'>This field is required</p>}
                      </div>
                    </div>

                      <div className="project__info-wrap">
                        <label className="Input-label">Total Supply</label>   
                        <input className="Input-text"
                                name='totalsupply'
                                type="number"
                                ref={register({ required: true})}
                                onChange={handleValidInput}
                        />
                        {errors.totalsupply && <p className='error'>This field is required</p>}
                      </div>
                      
                      <div className="project__info-wrap">
                        <label className="Input-label">
                          Token logo(only png)
                        </label>
                        <input className="Input-text"
                                name="logo"
                                type="file"
                                ref={register({ required: true})}
                                onChange={handleValidInputFile}
                                style={{color: 'transparent'}}
                                title="title"
                                accept="image/*"
                        />
                         {errors.logo && <p className='error'>This field is required</p>}
                      </div>
                  </div>
                </div>
                <div className="token__info-infomation-lock-3">
                  <div className="token__info-cointype">
                    <label className="Input-label">Coin Type</label>   
                    <Radio.Group onChange={handleValidInput} name='cointype'>
                      <Radio style={radioStyle} value={'Ethereum (Fee: 100 USDT)'}>
                        Ethereum (Fee: 100 USDT)
                      </Radio>
                      <Radio style={radioStyle} value={' Wave (Fee: 500 USDT)'}>
                        Wave (Fee: 500 USDT)
                      </Radio>
                      <Radio style={radioStyle} value={'Neo (Fee: 500 USDT)'}>
                        Neo (Fee: 500 USDT)
                      </Radio>
                      <Radio style={radioStyle} value={'Tron (Fee: 200 USDT)'}>
                        Tron (Fee: 200 USDT)
                      </Radio>
                    </Radio.Group>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="listing__plan">
              <div className="listing__plan-heading">
                  <h3 className="heading-title">Listing Plan</h3>
                  <div className="heading-line"></div>
              </div>
              <div className="listing__plan-openpair">
                <label className="Input-label">
                  What pair you want open? 
                </label>
                <Checkbox.Group style={{ width: '100%',  }} onChange={handlePair}>
                  <Row>
                    <Col span={24}>
                      <Checkbox style={{ outlineColor: 'red'}} value="BTC">BTC</Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value="ETH">RTH</Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value="USDT">USDT</Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value="TRX">TRX</Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value="LKT">LKT</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </div>
              <div className="listing__plan-date">
                <div className="listing__Plan-listingdate">
                <label className="Input-label">
                  Listing Date
                </label>
                  <Space direction="vertical" size={12}>
                    <DatePicker  showTime  onChange={handleListingDate}/>
                  </Space>
                </div>
                <div className="listing__plan-tradedate">
                  <label className="Input-label">
                    Trade Date
                  </label>
                  <Space direction="vertical" size={12}>
                    <DatePicker showTime onChange={handleTradeDate}/>
                  </Space>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="button-submit">
          <Button htmlType="submit" 
                  color="primary"
                  className="btn-button"
                  size='large'
          >
              submit
          </Button>
        </div>
      </form>
    );
  }
    
  return(
    <React.Fragment>
      {renderForm()}
    </React.Fragment>
  );
}