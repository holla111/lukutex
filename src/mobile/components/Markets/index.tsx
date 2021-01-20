import * as React from 'react';
import { useSelector } from 'react-redux';
import {Table} from '../';
import {TabPanel} from '../../../components';
import { selectMarkets } from '../../../modules/public/markets';

export interface MarketsProps {
    /**
     * List of headers for table
     */
    headers?: string[];
}

const MarketsComponent : React.FC<MarketsProps> = ({headers}) => {
    const markets = useSelector(selectMarkets);

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
            <Table headers={headers ? headers : defaultHeader} markets={markets}/>
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
