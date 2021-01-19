import * as React from 'react';
// import { MarketsTable } from '../../../containers';
import {MarketsTop,Directionals} from '../../components'
import {useMarketsFetch} from '../../../hooks';

const LandingComponent: React.FC = () => {
    useMarketsFetch();
    return (
        <div className="pg-landing-screen-mobile">
            {/*<MarketsTable />*/}
            <MarketsTop/>
            <Directionals/>
        </div>
    );
};

export const LandingScreenMobile = React.memo(LandingComponent);
