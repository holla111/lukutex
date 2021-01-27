import * as React from 'react';
import { CompetitionItem } from '../../components';
import './CompetitionList.css'

export const CompetitionList: React.FC = () => {


  // // Dispatch Fetch Wallets Of User Action
  // const dispatch = useDispatch();
  // const dispatchActiveSaleListFetch = () => dispatch(activeSaleListFetch());

  // let saleList = useSelector(selectSaleList);

  // React.useEffect(() => {
  //   // Dispatch Active Sale List Fetch in one time
  //   dispatchActiveSaleListFetch();
  // }, []);


  // let saleItems;
  // if (saleList.payload.length === 0) {
  //   saleItems =
  //     <div className="col-12 d-flex justify-content-center">
  //       <Empty
  //         image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
  //         imageStyle={{ marginTop: '3rem' }}
  //         description={
  //           <span>
  //             No available competion
  //         </span>
  //         }
  //       />
  //     </div>
  // } else {
  //   saleItems = [...saleList.payload].map((sale => {
  //     return (
  //       <Col span={12} key={sale.id}>
  //         <CompetitionItem key={sale.id} sale={sale} type={sale.type} />
  //       </Col>
  //     );
  //   }))
  // }

  // React.useEffect(() => {
  //   if (saleList.loading) {
  //     message.loading('', 0);
  //   } else {
  //     message.destroy();
  //   }

  //   return function cleanup() {
  //     message.destroy();
  //   }
  // }, [saleList.loading]);
  const competitions = [
    {
      currency_id: 'BTC'
    },
    {
      currency_id: 'BTC'
    },
    {
      currency_id: 'BTC'
    },
    {
      currency_id: 'BTC'
    },
    {
      currency_id: 'BTC'
    },
    {
      currency_id: 'BTC'
    }
  ];
  return (
    <div className="container-fluid">
      <div className="row mt-4 d-flex justify-content-center">
        {competitions.map(competition => (
          <div className="col-md-4 col-xl-3 col-sm-6">
            <CompetitionItem />
          </div>
        ))}
      </div>
    </div>
  )
}
