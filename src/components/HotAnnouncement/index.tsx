import * as React  from "react";
import { Link } from "react-router-dom";
import { selectAnnouncement} from '../../modules';
import { useSelector } from "react-redux";

export const HotAnnouncement: React.FC = () => {
  
  const announcements = useSelector(selectAnnouncement);

  const renderAnnouncementright = () => {
    return(
      <div className="article">
        <div className="hot-article-header">Hot List</div>
        {
          announcements.data.slice(0, 5).map((value, index) => {
            return (
              <div className="hot-article-item">
                <div className="hot-article-item__title">
                  <Link className="hot-article-item__title-link" 
                    to="#">
                   {value.title}
                  </Link>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }

  return(
    <React.Fragment> 
      {renderAnnouncementright()}
    </React.Fragment>
  );
}