import * as React from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { useWalletsFetch } from '../../../hooks';
import { selectChildCurrencies, selectWallets, walletsChildCurrenciesFetch } from '../../../modules/user/wallets';
import { Subheader, WalletHeader, WalletWithdrawBody, WalletBanner } from '../../components';
import styled from 'styled-components';
import Tabs, { TabPane } from 'rc-tabs';
import { selectCurrencies } from '../../../modules';

const TabsStyle = styled.div`
    .rc-tabs-nav-list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .rc-tabs-tab {
            width: 100%;
            padding: 5px 0;
            transition: ease-in-out 0.3s;
            border-bottom: 4px solid transparent;
            .rc-tabs-tab-btn {
                text-align: center;
                outline: none;
                border: none;
                cursor: pointer;
            }

            :hover {
                font-weight: bold;
                color: #3c78e0;
            }
        }
        
        .rc-tabs-tab-active {
            font-weight: bold;
            color: #3c78e0;
            background-color: #1e2841;
            border-bottom: 4px solid #3c78e0;
        }

        .rc-tabs-ink-bar {
            display: none;
        }
    }
`;

const defaultWallet = { name: '', currency: '', balance: '', type: '', address: '', fee: '' };

const WalletWithdraw: React.FC = () => {

  const { currency = '' } = useParams();
  const [currencyState, setCurrencyState] = React.useState(currency);

  const intl = useIntl();
  const history = useHistory();
  const wallets = useSelector(selectWallets) || [];
  const wallet = wallets.find(item => item.currency === currency) || defaultWallet;
  const parent_currencies = useSelector(selectCurrencies);
  const parent_currency = parent_currencies.find(par_cur => par_cur.id.toLowerCase() === String(currency).toLowerCase());
  const child_currencies = useSelector(selectChildCurrencies);
  const dispatch = useDispatch();
  const dispatchFetchChildCurrencies = () => dispatch(walletsChildCurrenciesFetch({ currency: currency }));
  // side effects
  React.useEffect(() => {
    dispatchFetchChildCurrencies();
    setCurrencyState(currency);
  }, [currency]);
  useWalletsFetch();

  const child_wallets = child_currencies.map(network => {
    return {
      ...network,
      wallet: wallets.find(item => item.currency === network.id) || { name: '', currency: '', balance: '', type: '', address: '' }
    }
  })

  return (
    <div className="cr-mobile-wallet-withdraw">
      <Subheader
        title={intl.formatMessage({ id: 'page.body.wallets.tabs.withdraw' })}
        backTitle={intl.formatMessage({ id: 'page.body.wallets.balance' })}
        onGoBack={() => history.push(`/wallets/${currency}/history`)}
      />
      <WalletHeader currency={wallet.currency} name={wallet.name} />
      <WalletBanner wallet={wallet} />

      <TabsStyle>
        <Tabs defaultActiveKey={currency} onTabClick={(key) => setCurrencyState(key)} >
          {
            parent_currency ?
              <TabPane tab={"ERC20"} key={currency}>
                <WalletWithdrawBody parent_currency={currency} currency={currencyState} wallet={wallet} />
              </TabPane>
              : ""
          }

          {
            child_wallets ?
              child_wallets.map(child_wallet => (

                <TabPane tab={child_wallet.name.toUpperCase()} key={child_wallet.id}>
                  <WalletWithdrawBody parent_currency={currency} currency={currencyState}  wallet={wallet} />
                </TabPane>
              ))
              : ""
          }

        </Tabs>
      </TabsStyle>

    </div>
  );
};

export {
  WalletWithdraw,
};
