import * as React from 'react';
import {Table} from '../';
import {TabPanel} from '../../../components';

export interface MarketsProps {
    /**
     * List of headers for table
     */
    headers?: string[];
}

const MarketsComponent : React.FC<MarketsProps> =props => {

    const [currentTabIndex, setCurrentTabIndex] = React.useState(0);
    const defaultHeader = ['Name','Current', 'Chg'];

    const renderTabs = () => [
        {
            content: currentTabIndex === 0 ? renderTab() : null,
            label: 'Rising List',
        },
        {
            content: currentTabIndex === 1 ? renderTab() : null,
            label: 'Decline List',
        },
        {
            content: currentTabIndex === 2 ? renderTab() : null,
            label: '24h Volume',
        },
    ];

    const renderTab = () => {
        return (
            <Table headers={props.headers ? props.headers : defaultHeader}/>
        );
    };

    return (
        <div className="cr-mobile-market">
            <TabPanel
                panels={renderTabs()}
                currentTabIndex={currentTabIndex}
                onCurrentTabChange={setCurrentTabIndex}
            />
        </div>
    );
};

export const Markets = React.memo(MarketsComponent);
