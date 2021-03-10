import { Space, Table, Input } from 'antd';
import * as React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Decimal } from '../../../../components';
import { EstimatedValue } from '../../../../containers/Wallets/EstimatedValue';
import { currenciesFetch, selectCurrencies, selectWallets, walletsFetch } from '../../../../modules';
import NP from 'number-precision';
import { useHistory } from 'react-router';
const { Search } = Input;

export interface WalletItem {
  key: string;
  address?: string;
  currency: string;
  name: string;
  total?: string;
  balance?: string;
  locked?: string;
  type: 'fiat' | 'coin';
  fee: number;
  active?: boolean;
  fixed: number;
  iconUrl?: string;
  coin: {
    currency_id: string,
    name: string;
    iconUrl?: string;
  }
  action: {
    currency_id: string
  }
}

export const WalletListScreen = () => {
  const LockIcon = () => {
    return (
      <svg width="11" height="13" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.27501 4.06251V6.24997H1.30003C0.581781 6.24997 0 6.80935 0 7.49998V13.7501C0 14.4407 0.581781 15 1.30003 15H11.6999C12.4181 15 13 14.4407 13 13.7501V7.49998C13 6.80935 12.4181 6.24997 11.6999 6.24997H10.725V4.06251C10.725 1.81881 8.83335 0 6.5 0C4.16665 0 2.27501 1.81878 2.27501 4.06251ZM3.90001 6.24997V4.06251C3.90001 2.68128 5.06347 1.56246 6.49996 1.56246C7.93646 1.56246 9.09999 2.68128 9.09999 4.06251V6.24997H3.90001ZM5.19997 9.68751C5.19997 8.99692 5.78172 8.43754 6.49996 8.43754C7.21821 8.43754 7.79992 8.99692 7.79992 9.68751C7.79992 10.1282 7.56262 10.5157 7.20523 10.7376C7.20523 10.7376 7.33221 11.4752 7.47501 12.3438C7.47501 12.6031 7.25727 12.8125 6.98749 12.8125H6.01244C5.74269 12.8125 5.52499 12.6031 5.52499 12.3438L5.79477 10.7376C5.43735 10.5157 5.19997 10.1282 5.19997 9.68751Z"
          fill="#E5E6EF"
        />
      </svg>
    );
  };

  // history
  const history = useHistory();

  // dispatch
  const dispatch = useDispatch();
  const dispatchFetchWallets = () => dispatch(walletsFetch());
  const dispatchcFetchCurrencies = () => dispatch(currenciesFetch());

  // side effect
  React.useEffect(() => {
    dispatchFetchWallets();
    dispatchcFetchCurrencies();
  }, []);

  // selector
  const wallets = useSelector(selectWallets);
  const currencies = useSelector(selectCurrencies);

  const columns = [
    {
      title: 'Coin',
      dataIndex: 'coin',
      key: 'coin',
      render: (coin: WalletItem['coin']) => (
        <span>
          <img width="30px" height="30px" src={coin.iconUrl ? coin.iconUrl : findIcon(coin.currency_id)} alt={coin.currency_id + "_icon"} />
          {coin.currency_id.toUpperCase()} <span className="text-secondary">{coin.name}</span></span>
      ),
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      sorter: {
        compare: (a, b) => a.balance - b.balance,
      }
    },
    {
      title: 'Available',
      dataIndex: 'balance',
      key: 'balance',
      sorter: {
        compare: (a, b) => a.balance - b.balance,
      }
    },
    {
      title: 'Locked',
      dataIndex: 'locked',
      key: 'locked',
      sorter: {
        compare: (a, b) => a.locked - b.locked,
      },
      render: (text) => (
        <span>
          {LockIcon()} <Decimal fixed={8}>{text.toString()}</Decimal>
        </span>

      )
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (currency) => (
        <Space size="middle">
          <Button size="lg" variant="success" onClick={() => handleDepositClick(currency.currency_id)}>Deposit</Button>
          <Button size="lg" variant="primary">Withdraw</Button>
        </Space>
      ),
    },
  ];

  const data: WalletItem[] = wallets.map((walletItem) => {
    const total = NP.plus(walletItem.balance || 0, walletItem.locked || 0);
    const newWalletItem: WalletItem = {
      ...walletItem,
      key: walletItem.currency,
      total: total > 0 ? String(total) : "0.000000",
      balance: walletItem.balance && Number(walletItem.balance) > 0 ? walletItem.balance : "0.000000",
      locked: walletItem.locked && Number(walletItem.balance) > 0 ? walletItem.locked : "0.000000",
      coin: {
        currency_id: walletItem.currency,
        name: walletItem.name,
        iconUrl: walletItem.iconUrl
      },
      action: {
        currency_id: walletItem.currency
      }
    }
    return newWalletItem;
  });

  // function

  const onSearch = (value) => {
    console.log(value);
  }

  const findIcon = (code: string): string => {
    const currency = currencies.find((currency: any) => currency.id === code);
    try {
      return require(`../../../../../node_modules/cryptocurrency-icons/128/color/${code.toLowerCase()}.png`);
    } catch (err) {
      if (currency !== undefined && currency.icon_url) return currency.icon_url;
      return require('../../../../../node_modules/cryptocurrency-icons/svg/color/generic.svg');
    }
  };

  const handleDepositClick = (currency_id) => {
    const location = {
      pathname: '/new-wallets/deposit/' + String(currency_id).toUpperCase()
    }
    history.push(location);
  }

  return (
    <div className="container-fluid px-5">
      <div className="row">
        <div className="col-12">
          <EstimatedValue wallets={wallets} />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-4">
          <Search placeholder="Search coin" onSearch={onSearch} enterButton />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12">
          <Table size="middle" columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  )
}
