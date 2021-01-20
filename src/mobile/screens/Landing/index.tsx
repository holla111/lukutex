import * as React from 'react';
import {
    useDepthFetch,
    useMarketsFetch,
    useMarketsTickersFetch,
    useRangerConnectFetch,
} from '../../../hooks';
// import { MarketsTable } from '../../../containers';
import {Directionals,Markets,MarketsTop,Slide} from '../../components';

const LandingComponent: React.FC = () => {
    useMarketsFetch();
    useMarketsTickersFetch();
    useRangerConnectFetch();
    useDepthFetch();

    return (
        <div className="pg-landing-screen-mobile">
            {/*<MarketsTable />*/}
            <Slide/>
            <MarketsTop/>
            <Directionals/>
            <Markets/>
        </div>
    );
};

export const LandingScreenMobile = React.memo(LandingComponent);
