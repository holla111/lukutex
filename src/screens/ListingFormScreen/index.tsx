import * as React  from "react";
import {Form, Col} from 'react-bootstrap';

export const ListingFormScreen: React.FC = () => {


  const renderForm = () => {
    return (
      <div className="listingformscreen">
        <div className="listing__token">
          <div className="listing__info">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>FirstName</Form.Label>
                <Form.Control type="text" placeholder="+" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>LastName</Form.Label>
                <Form.Control type="text" placeholder="+" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="+" />
              </Form.Group>
            </Form.Row>
          </Form>
          </div>
          <div className="project__info">
          <Form>
            <Col>
              <Form.Group>
                <Form.Label>Name of Project</Form.Label>
                <Form.Control type="text" placeholder="+" />
              </Form.Group>
              <Form.Group>
                <Form.Label>CEO Contact(telegram, email...)</Form.Label>
                <Form.Control type="text" placeholder="+" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Project Website</Form.Label>
                <Form.Control type="url" placeholder="+" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="+" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Media Link(FaceBook, Telegram Group...)</Form.Label>
                <Form.Control type="url" placeholder="+" />
              </Form.Group>
            </Col>
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