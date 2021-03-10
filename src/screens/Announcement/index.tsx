import * as React  from "react";
import { Row, Col } from 'antd';
import { AnnouncementLeft, AnnouncementRight } from '../../containers';

// import { useDispatch, useSelector } from "react-redux";
// import { announFetch, selectPost } from '../../modules';


export const Announcement: React.FC = () => {

  // const dispatch = useDispatch();
  // const dispatchFetch = () => dispatch(announFetch());
  
  // React.useEffect(()=> {
  //   dispatchFetch();
  // }[])

  // const post = useSelector(selectPost);
  // console.log(post)

  const renderAnnoucement = () => {
    return (
      <div className="container">
        <Row  gutter={[12, 0]}> 
          <Col className="left_article" span={16}>
            <div className="article-Box">
              <AnnouncementLeft />
            </div>
          </Col>
          <Col className="right_article" span={8}>
            <div className="article-Box">
              <AnnouncementRight />
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


