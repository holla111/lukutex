import * as React  from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';
import { useDispatch } from "react-redux";

import { announcementData } from "../../modules/info/announcement/actions";


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
`;

export const AdminAnnouncement: React.FC = () => {

  //state
  const [heading, setHeading] = React.useState("");
  const [postAnnouncement, setPostAnnouncement] = React.useState({});

  const handleHeading = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    const {value} = e.target;
    console.log(value)
    setHeading(e.target.value);

    setPostAnnouncement( prev => {
      return({

      })
    })
  }

  const handleSubmitAnnouncement = () =>{

    const dispatch = useDispatch();
    dispatch(announcementData());
  }

  const renderAdminAnnouncement = () => {

    return (
      <div className="container">
        <AdminAnnounStyle>
          <form onSubmit={handleSubmitAnnouncement}>

            <InpuStyle type="text" value={heading} placeholder="Enter heading..." onChange={handleHeading} />
            <CKEditor
              editor={ ClassicEditor }
              onChange={ ( event, editor ) => {
                  const data = editor.getData();
                  console.log( { data } );
                  // setA(data);
              }}
            />
            <ButtonStyle type="submit">submit</ButtonStyle>

          </form>
        </AdminAnnounStyle>
          {/* <div dangerouslySetInnerHTML={{__html : A}}></div> */}
      </div>
    )
  }

  return (
    <div>
      {renderAdminAnnouncement()}
    </div>
  )
}