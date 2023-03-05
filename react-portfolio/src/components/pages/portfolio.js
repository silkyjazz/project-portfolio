import React from 'react';
import '../../App.css'
import { Card, Col, Row } from 'react-bootstrap';
import jate from '../../images/text-editor.png';
import noteTaker from '../../images/javascript-quiz.png';
import pwgenerator from '../../images/password-generator.png';
// import image4 from './image4.jpg';
// import image5 from './image5.jpg';
// import image6 from './image6.jpg';

const cardData = [
  {
    title: 'J.A.T.E',
    image: jate,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://www.google.com',
  },
  {
    title: 'Javascript Quiz',
    image: noteTaker,
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://example.com',
  },
  {
    title: 'Password Generator',
    image: pwgenerator,
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://example.com',
  },
  // Don't forget to add more projects
];

const CardSection = () => {
  const styles ={
    margin:"20px"
  }
  return (
    <Row style={styles}>
      {cardData.map((card, index) => (
        <Col key={index} md={4} className="mb-4">
          <Card className="portfolio-item">
            <Card.Img variant="top" href={card.link} src={card.image}/>
              <Card.Text className="card-text">{card.title}<br/>{card.description}</Card.Text>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardSection;

