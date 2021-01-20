import * as React from 'react';
import {useMarketsFetch} from '../../../hooks';
// import { MarketsTable } from '../../../containers';
import {Directionals,Markets,MarketsTop,Slide} from '../../components';

const LandingComponent: React.FC = () => {
    useMarketsFetch();

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
