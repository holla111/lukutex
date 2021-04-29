import * as React  from "react";
import { Row, Col } from 'antd';
import {Announcement, HotAnnouncement} from '../../components'
import {announcementFetch, selectAnnouncement} from '../../modules';

import { useDispatch, useSelector } from "react-redux";


export const AnnouncementContainer: React.FC = () => {

  const dispatch = useDispatch();

  const announcements = useSelector(selectAnnouncement);
  console.log(announcements)

  React.useEffect(()=> {
    dispatch(announcementFetch());
  },[])

  const renderAnnoucement = () => {
    return (
      <div className="container">
        <Row  gutter={[12, 0]} className="mb-5" > 
          <Col className="left_article" span={16}>
            <div className="article-Box">
              <Announcement />
            </div>
          </Col>
          <Col className="right_article" span={8} style={{maxHeight: 400}}>
            <div className="article-Box">
              <HotAnnouncement />
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  return (
    <div className="body-announcement">
      {renderAnnoucement()}
    </div>
  );
}


