import * as React  from "react";
import { useForm } from "react-hook-form";
import {Form, Col, Button} from 'react-bootstrap';


interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  nameOfProject: string;
  contact: string;
  projectWebsite: string;
  description: string;
  media: string;

}
export const ListingFormScreen: React.FC = () => {

  const [formValue, setFormValue] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    nameofproject: '',
    contact: '',
    projectwebsite: '',
    description: '',
    media: '',
  });

  const { register, handleSubmit, errors } = useForm<IFormInput>();
  type RBRef = (string & ((ref: Element | null) => void));


  const handleSubmitForm = (data: IFormInput) => (
    console.log(data)
  );

  const handleValidInput = (e: any) => (
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    })
  )

  const renderForm = () => {
    return (
      <div className="listingformscreen">
        <div className="listing__token">
          <div className="listing__info">
          <Form onSubmit={handleSubmit(handleSubmitForm)}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>FirstName</Form.Label>
                <Form.Control type="text" placeholder="+" 
                      name="firstname"
                      onChange={handleValidInput}
                      ref={register({ required: true}) as RBRef} 
                />
                {errors.firstName && errors.firstName.type === "required" && (
                  <div className="error">You must enter your name.</div>
                )}
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>LastName</Form.Label>
                <Form.Control type="text" placeholder="+"
                      name="lastname"
                      onChange={handleValidInput}
                      ref={register({ required: true}) as RBRef}
                />
                {errors.lastName && errors.lastName.type === "required" && (
                  <div className="error">You must enter your name.</div>
                )}
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="+"
                      name="email"
                      onChange={handleValidInput}
                      ref={register({ required: true}) as RBRef}
                />
                {errors.email && errors.email.type === "required" && (
                  <div className="error">You must enter your name.</div>
                )}
              </Form.Group>
            </Form.Row>
          </Form>
          </div>
          <div className="project__info">
          <Form>
            <Col>
              <Form.Group>
                <Form.Label>Name of Project</Form.Label>
                <Form.Control type="text" placeholder="+" 
                      name="nameOfProject"
                      onChange={handleValidInput}
                      ref={register({ required: true}) as RBRef}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>CEO Contact(telegram, email...)</Form.Label>
                <Form.Control type="text" placeholder="+"
                      name="contact"
                      onChange={handleValidInput}
                      ref={register({ required: true}) as RBRef}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Project Website</Form.Label>
                <Form.Control type="url" placeholder="+" 
                      name="projectWebsite"
                      onChange={handleValidInput}
                      ref={register({ required: true}) as RBRef}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="+"
                      name="description"
                      onChange={handleValidInput}
                      ref={register({ required: true}) as RBRef}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Media Link(FaceBook, Telegram Group...)</Form.Label>
                <Form.Control type="url" placeholder="+"
                      name="media"
                      onChange={handleValidInput}
                      ref={register({ required: true}) as RBRef} 
                />
              </Form.Group>
            </Col>
            <Button type="submit">Submit form</Button>
          </Form>
          </div>
        </div>
       
        <div className="token__info">

        </div>
      </div>
    );
  }
    
  return(
    <React.Fragment>
      {renderForm()}
    </React.Fragment>
  );
}