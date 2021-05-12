import * as React from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';

import { useDispatch } from "react-redux";
import { announcementCreate } from "../../modules/info/announcement/actions";

const InpuStyle = styled.input`
width: 100%;
height: 42px;
margin-bottom: 20px;
outline: none;
border: 1px solid #666;
border-radius: 2px;
background: #fff;

`;

const AdminAnnounStyle = styled.div`
  padding: 20px;
`;

const ButtonStyle = styled.button`
  outline: none;
  border-radius: 2px;
  border: 1px solid #2a9d8f;
  color: #fff;
  background-color: #2a9d8f;
  margin-top: 40px;
  padding: 8px 20px;
  :focus{
    outline: none;
  }
  :hover {
    background-color: #74c69d;
  }
`;

interface AnnouncementType {
  title: string;
  content: string;
}

export const AnnouncementEdit: React.FC = (props) => {

  

  const dispatch = useDispatch();

  //state
  const [postAnnouncement, setPostAnnouncement] = React.useState<AnnouncementType>({
    title: '',
    content: '',
  });

  const handleHeading = (e: any) => {
    e.persist();
    setPostAnnouncement((prev) => ({
      ...prev,
      title: e.target.value
    }))
  }

  const handleSubmitAnnouncement: React.DOMAttributes<HTMLFormElement>["onSubmit"] = (e) => {
    e.preventDefault();
    dispatch(announcementCreate(postAnnouncement));
  }

  const renderAdminAnnouncement = () => {

    return (
      <div className="container">
        <AdminAnnounStyle>
          <form onSubmit={handleSubmitAnnouncement}>

            <InpuStyle type="text" value={postAnnouncement.title} placeholder="Enter heading..." onChange={handleHeading} />
            <CKEditor
              editor={ClassicEditor}
              onChange={(_event, editor: any) => {

                setPostAnnouncement((prev) => ({
                  ...prev,
                  content: editor.getData()
                }))
              }}
            />
            <ButtonStyle type="submit">Edit</ButtonStyle>

          </form>
        </AdminAnnounStyle>
      </div>
    )
  }

  return (
    <div>
      {renderAdminAnnouncement()}
    </div>
  )
}