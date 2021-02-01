import * as React from 'react';
import { WalletOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';

const DirectionalsComponent: React.FC = ({ }) => {
    return (
        <div className="cr-mobile-directional">
            <div className="cr-mobile-directional__inner">
                <Link to="/wallets" className="dropdown-content-show">
                    <WalletOutlined style={{ color: 'wheat', fontSize: "20px" }} />
                    <span>Deposit</span>
                </Link>
                <Link to="/ieo" className="dropdown-content-show">

                    <WalletOutlined style={{ color: 'wheat', fontSize: "20px" }} />
                    <span>IEO</span>
                </Link>
                <Link to="/airdrop" className="dropdown-content-show">

                    <WalletOutlined style={{ color: 'wheat', fontSize: "20px" }} />
                    <span>Airdrop</span>
                </Link>
                <Link to="/competition" className="dropdown-content-show">

                    <WalletOutlined style={{ color: 'wheat', fontSize: "20px" }} />
                    <span>Competition</span>
                </Link>
            </div>
            <div className="cr-mobile-directional-banner">
                <a href="/ieo">
                    <img src="https://i.imgur.com/BVEzar1.png" alt="" />
                </a>
            </div>
        </div>
    );
};

export const Directionals = React.memo(DirectionalsComponent);
