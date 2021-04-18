import * as React  from "react";
import { Link } from "react-router-dom";
import {Pagination} from '../Pagination';


export const Announcement: React.FC = () => {

  const [paginationState, setPaginationState] = React.useState({
    current: 1,
    pageSize: 15,
    total: 0,
  });

  // React.useEffect(() => {
  //   if (markets) {
  //     setPaginationState(prev => ({
  //       ...prev,
  //       total: markets.length,
  //     }));
  //   }
  // }, [markets.length]);

  React.useEffect(() => {
    handleGetStartPointPagination();
  }, [paginationState]);

  const handleGetStartPointPagination = (): number => {
    const start = (paginationState.pageSize * paginationState.current) - paginationState.pageSize;
    return start;
  };

  const renderPagination = () => {
    const { current, pageSize, total } = paginationState;

    return (
      <Pagination onClickToPage={onClickToPage}
        page={current}
        onClickNextPage={onClickNextPage}
        onClickPrevPage={onClickPrevPage}
        firstElemIndex={1}
        lastElemIndex={Math.ceil(total / pageSize)}
      />
    );
  };

  const onClickPrevPage = () => {
    setPaginationState(prev => ({
      ...prev,
      current: prev.current - 1,
    }));
  };
  const onClickNextPage = () => {
    setPaginationState(prev => ({
      ...prev,
      current: prev.current + 1,
    }));
  };
  const onClickToPage = (value: number) => {
    setPaginationState(prev => ({
      ...prev,
      current: value,
    }));
  };

  const renderAnouncementLeft = () => {
    return(
      <div className="article">
        <div className="article-item">
          <h3 className="article-item__title">
            <Link to="#" className="article-item__title-link"> Maya Preferred 223 is swapping from Ethereum Classic to ERC20 token.</Link>
          </h3>
          <div className="article-item__content">
            Dear all.  Maya Preferred 223 is swapping from Ethereum Classic to ERC20 token. New Ticker : MAYP token name: Maya Preferred. Contract address
          </div>
          <div className="article-item__time">
            <span className="time">2021-03-02 11:29</span> 
          </div>
        </div>
        <div className="article-item">
          <h3 className="article-item__title">
            <Link to="#" className="article-item__title-link"> Maya Preferred 223 is swapping from Ethereum Classic to ERC20 token.</Link>
          </h3>
          <div className="article-item__content">
            Dear all.  Maya Preferred 223 is swapping from Ethereum Classic to ERC20 token. New Ticker : MAYP token name: Maya Preferred. Contract address
          </div>
          <div className="article-item__time">
            <span className="time">2021-03-02 11:29</span> 
          </div>
          <div className="pg-ticker-table__pagination">
            {renderPagination()}
          </div>
        </div>
      </div>  
    );
  }

  return (
    <>
      {renderAnouncementLeft()}
    </>
  );
}
