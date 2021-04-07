import { Menu } from 'antd';
import * as React from 'react';

import { YRFIInfo } from './Info';
import { YRFIAbout } from './About';
import { YRFIMore } from './More';

export const YRFI = () => {
    const [selectedViewState, setSelectedViewState] = React.useState<string>('1');
    const handleSelectMenuItem = ({ key, domEvent }) => {
        setSelectedViewState(key);
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-12 text-center">
                    <Menu mode="horizontal" defaultSelectedKeys={['1']} onClick={handleSelectMenuItem}>
                        <Menu.Item key="1"><div style={{ fontSize: '20px' }}>Tokensale Information</div></Menu.Item>
                        <Menu.Item key="2"><span style={{ fontSize: '20px' }}>About Lukutex</span></Menu.Item>
                        <Menu.Item key="3"><span style={{ fontSize: '20px' }}>More Information</span></Menu.Item>
                    </Menu>
                </div>
            </div>
            <div style={{ padding: '3rem 5vw' }}>
                {selectedViewState === "1" ? <YRFIInfo /> : ''}
                {selectedViewState === "2" ? <YRFIAbout /> : ''}
                {selectedViewState === "3" ? <YRFIMore /> : ''}
            </div>
        </React.Fragment>

    )
}
