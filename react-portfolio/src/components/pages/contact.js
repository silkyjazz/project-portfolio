import React from "react";
import {Fade} from 'react-awesome-reveal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Button, Form, Container, Row, Col} from 'react-bootstrap';
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

export default function Contact() {
  const styles = {
    marginLeft: "60px",
    padding: "40px",
  };
  return (
    <div>
       <Fade direction="left"><h1 style={styles}className="page-title">Contact Me</h1>
      <Container>
        <Row>
          <Col sm={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="secondary" type="submit">
                Send
              </Button>
            </Form>  
          </Col>
          <Col lg={6} sm={6}>
            <h3>I'd love to hear from you   <FontAwesomeIcon icon="fa-solid fa-heart" /></h3>
            <p style={{fontSize:"13px", margin:"20px"}}>If you have any questions or comments about my work, please don't hesitate to reach out. You can find my email and social media links on this page as well. I look forward to collaborating!</p>
          </Col>
        </Row>
      </Container></Fade>
    </div>
  );
}
