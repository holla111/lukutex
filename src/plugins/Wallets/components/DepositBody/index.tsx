import classnames from 'classnames';
import * as React from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { CurrencyInfo, DepositCrypto, DepositFiat } from '../../../../components';
import { formatCCYAddress } from '../../../../helpers';
import { selectCurrencies, selectUserInfo, selectWalletAddress } from '../../../../modules';
import styled from 'styled-components';
import { LockIcon } from '../../../../assets/images/LockIcon';

const BlurDisable = styled.div`
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    align-items: center;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background: var(--body-background-color-level-6);
    display: flex;
    height: 100%;
    justify-content: center;
    z-index: 10;
    flex-direction: column;
`

const WalletDepositBodyComponent = props => {
  const intl = useIntl();
  const currencies = useSelector(selectCurrencies);
  const user = useSelector(selectUserInfo);
  const selectedWalletAddress = useSelector(selectWalletAddress);
  const label = React.useMemo(() => intl.formatMessage({ id: 'page.body.wallets.tabs.deposit.ccy.message.address' }), [intl]);
  const handleOnCopy = () => ({});
  const renderDeposit = (isAccountActivated: boolean) => {
    const {
      addressDepositError,
      wallet,
    } = props;

    const translate = (id: string) => intl.formatMessage({ id });

    const currencyItem = (currencies && currencies.find(item => item.id === wallet.currency)) || { min_confirmations: 6, min_deposit_amount: 6, deposit_fee: 6, deposit_enabled: false };

    const textConfirmation = intl.formatMessage({ id: 'page.body.wallets.tabs.deposit.ccy.message.confirmation' }, { confirmations: currencyItem.min_confirmations });

    const textMinDeposit = `${translate('page.body.wallets.tabs.deposit.ccy.message.mindeposit')} ${Number(currencyItem.min_deposit_amount) + Number(currencyItem.deposit_fee)} ${wallet.currency.toUpperCase()}`;

    const textDepositFee = `${translate('page.body.wallets.tabs.deposit.ccy.message.depositfee')} ${Number(currencyItem.deposit_fee)} ${wallet.currency.toUpperCase()}`;

    const checkDepositFee = Number(currencyItem.deposit_fee) != 0 ? textDepositFee : `${translate('page.body.wallets.tabs.deposit.ccy.message.depositfee')} 1 %`;

    const textNote = `Only Deposit ${wallet.currency.toUpperCase()} to this wallet.`


    const error = addressDepositError ?
      intl.formatMessage({ id: addressDepositError.message[0] }) :
      intl.formatMessage({ id: 'page.body.wallets.tabs.deposit.ccy.message.error' });

    const walletAddress = formatCCYAddress(wallet.currency, selectedWalletAddress);

    const buttonLabel = `
              ${translate('page.body.wallets.tabs.deposit.ccy.button.generate')} ${wallet.currency.toUpperCase()} ${translate('page.body.wallets.tabs.deposit.ccy.button.address')}
					`;

    const title = intl.formatMessage({ id: 'page.body.wallets.tabs.deposit.fiat.message1' });

    const description = intl.formatMessage({ id: 'page.body.wallets.tabs.deposit.fiat.message2' });

    const blurCryptoClassName = classnames('pg-blur-deposit-crypto', {
      'pg-blur-deposit-crypto--active': isAccountActivated,
    });

    console.log(blurCryptoClassName);


    if (wallet.type === 'coin') {
      return (
        <React.Fragment>
          <CurrencyInfo wallet={wallet} />
          {currencyItem && !currencyItem.deposit_enabled ? (
            <BlurDisable >
              <LockIcon className="pg-blur__content__icon" />
              {translate('page.body.wallets.tabs.deposit.disabled.message')}
            </BlurDisable>
          ) : null}

          <DepositCrypto
            data={walletAddress}
            handleOnCopy={handleOnCopy}
            error={error}
            textConfirmation={textConfirmation}
            textMinDeposit={textMinDeposit}
            textNote={textNote}
            textDepositFee={checkDepositFee}
            disabled={walletAddress === ''}
            copiableTextFieldText={`${wallet.currency.toUpperCase()} ${label}`}
            copyButtonText={intl.formatMessage({ id: 'page.body.wallets.tabs.deposit.ccy.message.button' })}
            handleGenerateAddress={props.handleGenerateAddress}
            buttonLabel={buttonLabel}
            isAccountActivated={isAccountActivated}
          />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <CurrencyInfo wallet={wallet} />
          {currencyItem && currencyItem.deposit_enabled === false ? (
            <BlurDisable >
              <LockIcon className="pg-blur__content__icon" />
              {translate('page.body.wallets.tabs.deposit.disabled.message')}
            </BlurDisable>
          ) : null}
          <DepositFiat title={title} description={description} uid={user ? user.uid : ''} />
        </React.Fragment>
      );
    }
  };

  return (
    <div className="cr-mobile-wallet-deposit-body">
      {renderDeposit(props.isAccountActivated)}
    </div>
  );
};

const DepositBody = React.memo(WalletDepositBodyComponent);

export {
  DepositBody,
};
