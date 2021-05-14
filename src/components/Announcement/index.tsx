import * as React  from "react";
import { Link } from "react-router-dom";
import { selectAnnouncement} from '../../modules';

import { useSelector } from "react-redux";

export const Announcement: React.FC = (props) => {

 

  const announcements = useSelector(selectAnnouncement);

  
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
       
      </div>  
    );
  }

  return (
    <React.Fragment>
      {renderAnouncementLeft()}
    </React.Fragment>
  );
}
