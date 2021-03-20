import * as React  from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Radio, DatePicker, Space, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface IFormInput {
  firstname: string;
  lastname: string;
  email: string;
  nameofproject: string;
  contact: string;
  projectwebsite: string;
  description: string;
  media: string;
  coinname: string;
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

  const [formValue, setFormValue] = React.useState({
    firstname: '',
    lastname: '',
    email: '',
    nameofproject: '',
    contact: '',
    projectwebsite: '',
    description: '',
    media: '',
    coinname: '',
    cointype: '',
    cointicker: '',
    explorerlink: '',
    listingdate: '',
    tradedate: '',
    totalsupply: '',
    logo: '',

  });
  const [fileList, setFileList] = React.useState('');
  const [dateTrade, setDateTrade] = React.useState('');
  const [listingDate, setListingDate] = React.useState('');


  const onSubmit: SubmitHandler<IFormInput> = data => {
    alert(JSON.stringify(data));
  };

  const handleValidInput = (e: any) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    });
  }

  const handleChange = (info: any) => {
    let fileList:any = [...info.fileList];
    fileList = fileList.slice(-1);
    setFileList(fileList);
  };

  const handleListingDate = (date, dateString) => {
    console.log(dateString)
    setListingDate(dateString);
  }
  const handleTradeDate = (date, dateString) => {
    console.log(dateString)
    setDateTrade(dateString)
  }
  const renderForm = () => {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    console.log(formValue)
    console.log(fileList)
    console.log(listingDate);
    console.log(dateTrade);
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
          <div className="main__2-lock-1"></div>
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
                    <div className="token__info-explorer__supply-logo">
                      <div className="project__info-wrap">
                        <label className="Input-label">Total Supply</label>   
                        <input className="Input-text"
                                name='totalsupply'
                                ref={register({ required: true})}
                                onChange={handleValidInput}
                        />
                        {errors.totalsupply && <p className='error'>This field is required</p>}
                      </div>
                      
                      <div className="project__info-wrap">
                        <label className="Input-label">
                          Token logo(only png)
                        </label>
                        <Upload
                          listType="picture"
                          onChange={handleChange}
                        >
                          <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                      </div>
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
                <Radio.Group className="openpair-radio" onChange={handleValidInput} name='cointicker'>
                  <Radio style={radioStyle} value={'BTC'}>
                    BTC
                  </Radio>
                  <Radio style={radioStyle} value={'ETH'}>
                    ETH
                  </Radio>
                  <Radio style={radioStyle} value={'USDT'}>
                    USDT
                  </Radio>
                  <Radio style={radioStyle} value={'TRX'}>
                    TRX
                  </Radio>
                  <Radio style={radioStyle} value={'LKT'}>
                    LKT
                  </Radio>
                </Radio.Group>
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