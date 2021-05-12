import * as React  from "react";
import { Row, Col } from 'antd';
import {Announcement, HotAnnouncement} from '../../components'
import {announcementFetch, selectUserInfo} from '../../modules';

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


export const AnnouncementContainer: React.FC = () => {

  const user = useSelector(selectUserInfo);
  const role = user.role;
  const dispatch = useDispatch();

  React.useEffect(()=> {
    dispatch(announcementFetch());
  },[])
  const rendenCreatAnnouncement = () => {
      if(role === "superadmin") {
        return (
          <Link style={{padding: '10px 20px', backgroundColor: '#56cfe1'}} to="/announcement/create">Creat Announcement</Link>
        );
      }else{
        return(
          <React.Fragment></React.Fragment>
        )
      }
  }

  return (
    <div className="body-announcement mt-3">
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
        <Row className="mb-5">
          <Col>
            {rendenCreatAnnouncement()}
          </Col>
        </Row>
      </div>
    </div>
  );
    
}


