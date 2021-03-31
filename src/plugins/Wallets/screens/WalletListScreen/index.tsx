import NP from 'number-precision';
import * as React from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { EstimatedValue } from '../../../../containers/Wallets/EstimatedValue';
import { currenciesFetch, selectCurrencies, selectWallets, walletsFetch } from '../../../../modules';
import { ReactTable } from '../../containers';

export interface WalletItem {
  key: string;
  address?: string;
  currency: string;
  name: string;
  balance?: string;
  locked?: string;
  type: 'fiat' | 'coin';
  fee: number;
  active?: boolean;
  fixed: number;
  iconUrl?: string;
}

const SearchInput = styled.input`
  width: 130px;
  border: 2px solid #5D76B5;
  outline: none;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  color: #fff;
  font-weight: 500;
  background-color: #182034;
  border-radius: 5px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: all 0.2s ease-in-out;
  font-size: 1rem;
  /* When the input field gets focus, change its width to 100% */
  :focus {
    width: 200px;
    border: 2px solid #9AA9D1;
  }
`;

const DepositButton = styled.button`
  background: #36456A;
  border: none;
  outline: none;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-right: 5px;
  font-weight: 600;
  transition: all 0.2s;
  :focus { outline: none; }
  :hover {
    background: #222D4A;
  }
`;

const WithdrawButton = styled.button`
  background: #36456A;
  border: none;
  outline: none;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-right: 5px;
  font-weight: 600;
  transition: all 0.2s;
  :focus { outline: none; }
  :hover {
    background: #222D4A;
  }
  :disabled {
    cursor: not-allowed;
    background: #222D4A;
  }
`;

const CheckBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .checkbox {
    --background: #fff;
    --border: #D1D6EE;
    --border-hover: #BBC1E1;
    --border-active: #182034;
    --tick: #fff;
    position: relative;
    input,
    svg {
        width: 21px;
        height: 21px;
        display: block;
    }
    input {
        -webkit-appearance: none;
        -moz-appearance: none;
        position: relative;
        outline: none;
        background: var(--background);
        border: 2px solid #5D76B5;
        margin: 0;
        padding: 0;
        cursor: pointer;
        border-radius: 4px;
        transition: box-shadow .3s;
        box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border));
        &:hover {
            --s: 2px;
            --b: var(--border-hover);
        }
        &:checked {
            --b: var(--border-active);
        }
    }
    svg {
        pointer-events: none;
        fill: none;
        stroke-width: 2px;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke: var(--stroke, var(--border-active));
        position: absolute;
        top: 0;
        left: 0;
        width: 21px;
        height: 21px;
        transform: scale(var(--scale, 1)) translateZ(0);
    }
    &.path {
        input {
            &:checked {
                --s: 2px;
                transition-delay: .4s;
                & + svg {
                    --a: 16.1 86.12;
                    --o: 102.22;
                }
            }
        }
        svg {
            stroke-dasharray: var(--a, 86.12);
            stroke-dashoffset: var(--o, 86.12);
            transition: stroke-dasharray .6s, stroke-dashoffset .6s;
        }
    }
    &.bounce {
        --stroke: var(--tick);
        input {
            &:checked {
                --s: 11px;
                & + svg {
                    animation: bounce .4s linear forwards .2s;
                }
            }
        }
        svg {
            --scale: 0;
        }
    }
}

@keyframes bounce {
    50% {
        transform: scale(1.2);
    }
    75% {
        transform: scale(.9);
    }
    100% {
        transform: scale(1);
    }
}

`;

export const WalletListScreen = () => {

  const intl = useIntl();

  // state
  const [hideSmallBalanceState, setHideSmallBalanceState] = React.useState<boolean>(false);

  // intl
  const withdrawButtonLabel = React.useMemo(() => intl.formatMessage({ id: 'page.body.wallets.tabs.withdraw' }), [intl]);
  const depositButtonLabel = React.useMemo(() => intl.formatMessage({ id: 'page.body.wallets.tabs.deposit' }), [intl]);


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

  // function
  const findIcon = (code: string): string => {
    const currency = currencies.find((currency: any) => currency.id === code);
    try {
      return require(`../../../../../node_modules/cryptocurrency-icons/128/color/${code.toLowerCase()}.png`);
    } catch (err) {
      if (currency !== undefined && currency.icon_url) { return currency.icon_url; }
      return require('../../../../../node_modules/cryptocurrency-icons/svg/color/generic.svg');
    }
  };

  const columns = React.useMemo(() => [
    { Header: 'Coin', accessor: 'coin' }, { Header: 'Total', accessor: 'total' }, { Header: 'Available', accessor: 'available' }, { Header: 'In Order', accessor: 'in_order' }, { Header: 'Action', accessor: 'action' }], []
  );

  const [searchInputState, setSearchInputState] = React.useState("");

  const data = wallets
    .map(wallet => {
      return {
        ...wallet,
        total: Number(wallet.balance) + Number(wallet.locked)
      };
    })
    .filter(wallet => wallet.currency.toLowerCase().includes(searchInputState.toLowerCase()))
    .filter(wallet => hideSmallBalanceState ? wallet.total > 0 : wallet.total >= 0)
    .sort((prev_wallet, next_wallet) => { //sort desc
      return next_wallet.total - prev_wallet.total;
    }).map(wallet => {
      const total = NP.plus(wallet.balance || 0, wallet.locked || 0);
      const currency_icon = <img width="30px" height="30px" src={wallet.iconUrl ? wallet.iconUrl : findIcon(wallet.currency)} alt={wallet.currency + '_icon'} />;
      const isWithdrawEnabled = wallet.type === "fiat" || wallet.balance;
      return {
        coin: <span style={{ fontWeight: 'bold' }}> {currency_icon} {wallet.currency.toUpperCase()} <span className="text-secondary">{wallet.name}</span></span>,
        total: total > 0 ? String(total) : '0.000000',
        available: <span>{wallet.balance && Number(wallet.balance) > 0 ? wallet.balance : '0.000000'}</span>,
        in_order: <span className="text-secondary">{wallet.locked && Number(wallet.balance) > 0 ? wallet.locked : '0.000000'}</span>,
        action: <div className="d-flex justify-content-between">
          <DepositButton onClick={() => history.push({ pathname: '/new-wallets/deposit/' + String(wallet.currency).toUpperCase() })}>{depositButtonLabel}</DepositButton>
          <WithdrawButton disabled={!isWithdrawEnabled} onClick={() => history.push({ pathname: '/new-wallets/withdraw/' + String(wallet.currency).toUpperCase() })}>{withdrawButtonLabel}</WithdrawButton>
        </div >
      };
    });

  const renderTable = () => {
    return (
      <ReactTable columns={columns} data={data} headColor="#222B42" />
    );
  };

  const onChange = e => {
    setSearchInputState(String(e.target.value).toUpperCase());
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: '#222B42', borderRadius: '5px', height: '100vh', marginTop: '-10px', padding: '20px 10% 0 10%' }}>
      <div className="row">
        <div className="col-12">
          <EstimatedValue wallets={wallets} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 d-flex justify-content-between align-items-center flex-row">
          <SearchInput autoFocus type="text" value={searchInputState} placeholder="Search coin ..." onChange={e => onChange(e)} />
          <CheckBox>
            <span className="mr-2">Hide Small Balances</span>
            <label className="checkbox bounce">
              <input type="checkbox" defaultChecked checked={hideSmallBalanceState} onChange={e => setHideSmallBalanceState(e.target.checked)} />
              <svg viewBox="0 0 21 21">
                <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
              </svg>
            </label>
          </CheckBox>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          {renderTable()}
        </div>
      </div>
    </div>
  );
};
