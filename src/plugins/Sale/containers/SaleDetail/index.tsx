import * as React from 'react';
import { LKT } from './LKT';

interface SaleDetailProps {
    ieoID: number;
}

export const SaleDetail: React.FC<SaleDetailProps> = (props: SaleDetailProps) => {
    let saleDetail;
    
    switch (props.ieoID) {
        case 1:
            saleDetail = <LKT />
            break;
    
        default:
            break;
    }
    return (
        <div>
            {saleDetail}
        </div>
    )
}
