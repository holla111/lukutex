import * as React  from "react";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../../modules";

import {  AnnouncementContainer, AdminAnnouncement } from '../../containers';

export const AnnouncementScreen: React.FC = () => {

  const user = useSelector(selectUserInfo);
  const role = user.role;

  const renderAnnouncementScreen = () => {
    return(
      <div>
        {
          role === "superadmin" ? <AdminAnnouncement /> : <AnnouncementContainer/>
        }
      </div>
    );
  }

  return(
    <div>
      {renderAnnouncementScreen()}
    </div>
  )
}