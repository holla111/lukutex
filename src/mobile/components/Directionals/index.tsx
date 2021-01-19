import * as React from 'react';
import {WalletOutlined} from '@ant-design/icons'

const DirectionalsComponent : React.FC = ({}) => {
    return (
        <div className="cr-mobile-directional">
            <div className="cr-mobile-directional__inner">
                <a href="/">
                    <WalletOutlined style={{color: 'wheat', fontSize : "20px"}} />
                    <span>Deposit</span>
                </a>
                <a href="/">
                    <WalletOutlined style={{color: 'wheat', fontSize : "20px"}} />
                    <span>Deposit</span>
                </a>
                <a href="/">
                    <WalletOutlined style={{color: 'wheat', fontSize : "20px"}} />
                    <span>Deposit</span>
                </a>
                <a href="/">
                    <WalletOutlined style={{color: 'wheat', fontSize : "20px"}} />
                    <span>Deposit</span>
                </a>
            </div>
            <div className="cr-mobile-directional-banner">
                <a href="/">
                    <img src="https://via.placeholder.com/414x60.png" alt=""/>
                </a>
            </div>
        </div>
    );
};

export const Directionals = React.memo(DirectionalsComponent);
