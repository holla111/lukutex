import * as React  from "react";
import { Link } from "react-router-dom";
// import {Pagination} from '../Pagination';
import { selectAnnouncement} from '../../modules';

import { useSelector } from "react-redux";

export const Announcement: React.FC = (props) => {

  // const [paginationState, setPaginationState] = React.useState({
  //   current: 1,
  //   pageSize: 15,
  //   total: 0,
  // });

  // React.useEffect(() => {
  //   if (markets) {
  //     setPaginationState(prev => ({
  //       ...prev,
  //       total: markets.length,
  //     }));
  //   }
  // }, [markets.length]);

  const announcements = useSelector(selectAnnouncement);

  // React.useEffect(() => {
  //   handleGetStartPointPagination();
  // // }, [paginationState]);

  // const handleGetStartPointPagination = (): number => {
  //   const start = (paginationState.pageSize * paginationState.current) - paginationState.pageSize;
  //   return start;
  // };

  // const renderPagination = () => {
  //   const { current, pageSize, total } = paginationState;

  //   return (
  //     <Pagination onClickToPage={onClickToPage}
  //       page={current}
  //       onClickNextPage={onClickNextPage}
  //       onClickPrevPage={onClickPrevPage}
  //       firstElemIndex={1}
  //       lastElemIndex={Math.ceil(total / pageSize)}
  //     />
  //   );
  // };

  // const onClickPrevPage = () => {
  //   setPaginationState(prev => ({
  //     ...prev,
  //     current: prev.current - 1,
  //   }));
  // };
  // const onClickNextPage = () => {
  //   setPaginationState(prev => ({
  //     ...prev,
  //     current: prev.current + 1,
  //   }));
  // };
  // const onClickToPage = (value: number) => {
  //   setPaginationState(prev => ({
  //     ...prev,
  //     current: value,
  //   }));
  // };

  const renderAnouncementLeft = () => {
    return(
      
      <div className="article mb-5">
        {announcements.data.map((value, index) => {
          return (
            <div className="article-item">
            <h3 className="article-item__title">
              <Link to="#" className="article-item__title-link">{value.title}</Link>
            </h3>
            <div className="article-item__content" dangerouslySetInnerHTML={{__html : value.content}}></div>
            <div className="article-item__time">
              <span className="time">{value.created_at}</span> 
            </div>
          </div>
          );
        })}
        {/* <div className="pg-ticker-table__pagination">
          {renderPagination()}
        </div> */}
      </div>  
    );
  }

  return (
    <>
      {renderAnouncementLeft()}
    </>
  );
}
