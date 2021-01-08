import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Alert, Card, Col, Modal, Row, Statistic } from 'antd';
import * as React from 'react';
import NP from 'number-precision';

interface BuyConfirmModalProps {
    visible: boolean;
    onHiddenModal: () => void;
    onBuy: () => void;
    quantity: number;
    ieoID: string;
    baseBalance: number;
    baseCurrency: string;
    quoteBalance: number;
    quoteCurrency: string;
    quoteTotal: number;
    bonus: number;
}

export const BuyConfirmModal: React.FC<BuyConfirmModalProps> = (props: BuyConfirmModalProps) => {
    const { quantity, quoteBalance, quoteCurrency, baseBalance, baseCurrency, quoteTotal, bonus } = props;
    const findIcon = (code: string): string => {
        try {
            return require(`../../../../../node_modules/cryptocurrency-icons/128/color/${code.toLowerCase()}.png`);
        } catch (err) {
            return require('../../../../../node_modules/cryptocurrency-icons/svg/color/generic.svg');
        }
    };

    const bonusQuantity = NP.times(quantity, bonus);
    const totalQuanity = NP.plus(baseBalance, quantity, bonusQuantity);

    return (
        <Modal
            title="Confirm to Buy"
            centered
            visible={props.visible}
            onOk={() => props.onBuy()}
            onCancel={() => props.onHiddenModal()}
        >
            <Row gutter={16}>
                <Col span={12}>
                    <Card>
                        <Statistic
                            title={<img style={{ width: '3rem', height: '3rem', marginLeft: '1rem' }} src={findIcon(baseCurrency)} alt="" />}
                            value={totalQuanity}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined />}
                            suffix={baseCurrency}
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                        <Statistic
                            title={<img style={{ width: '3rem', height: '3rem', marginLeft: '1rem' }} src={findIcon(quoteCurrency)} alt="" />}
                            value={NP.minus(quoteBalance, Number(quoteTotal))}
                            precision={2}
                            valueStyle={{ color: '#cf1322' }}
                            prefix={<ArrowDownOutlined />}
                            suffix={quoteCurrency}
                        />
                    </Card>
                </Col>
            </Row>
            <br />
            {bonus > 0 ? <Alert message={`🥳 You will receive ${bonus * 100}% bonus of ${quantity} ${baseCurrency.toUpperCase()}
             (+${bonusQuantity} ${baseCurrency.toUpperCase()}) = ${NP.plus(quantity, bonusQuantity)} ${baseCurrency.toUpperCase()}`} type="info" />
                : ''}
        </Modal>
    )
}
