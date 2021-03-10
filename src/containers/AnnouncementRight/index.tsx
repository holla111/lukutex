import * as React  from "react";
import { Link } from "react-router-dom";

export const AnnouncementRight: React.FC = () => {

  const renderAnnouncementright = () => {
    return(
      <div className="article">
        <div className="hot-article-header">Hot List</div>
        <div className="hot-article-item">
          <div className="hot-article-item__title">
            <Link className="hot-article-item__title-link" 
              to="#">
              Catex registration is opened
            </Link>
          </div>
          <div className="hot-article-item__title">
            <Link className="hot-article-item__title-link" 
              to="#">
              BTC,ETH,USDT,LTC,BCH, ETC,DASH,QTUM deposit are opened
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return(
    <React.Fragment> 
      {renderAnnouncementright()}
    </React.Fragment>
  );
}