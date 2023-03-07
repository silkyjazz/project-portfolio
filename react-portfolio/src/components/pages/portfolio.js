import React from "react";
import "../../App.css";
import { Container, Card, Col, Row } from "react-bootstrap";
import jate from "../../images/text-editor.png";
import noteTaker from "../../images/note-taker.png";
import pwgenerator from "../../images/password-generator.png";
import weatherDashboard from "../../images/weather-dashboard.png";
import jsQuiz from "../../images/javascript-quiz.png";
import employeeTracker from '../../images/employee-tracker.png';

const cardData = [
  {
    title: "Note Taker",
    image: noteTaker,
    description: "An application that can be used to write and save notes.",
    link: "https://github.com/silkyjazz/express-note-taker",
  },
  {
    title: "Password Generator",
    image: pwgenerator,
    description:
      "This is a web application that provides the user with a randomly generated password that meets their desired character criteria.",
    link: "https://github.com/silkyjazz/password-generator",
  },
  {
    title: "Weather Dashboard",
    image: weatherDashboard,
    description:
      "A weather app that uses the OpenWeather API to search for a 5 day forecast in any city.",
    link: "https://github.com/silkyjazz/weather-dashboard",
  },
  {
    title: "Javascript Quiz",
    image: jsQuiz,
    description:
      "An application that tests your javascript knowledge. Uses a timer and shows your score.",
    link: "https://github.com/silkyjazz/javascript-quiz",
  },
  {
    title: "J.A.T.E",
    image: jate,
    description:
      "A simple text editor that runs in the browser and meets the PWA criteria.",
    link: "https://github.com/silkyjazz/text-editor",
  },
  {
    title: "Employee Tracker",
    image: employeeTracker,
    description:
      "A content management system that allows the user to easily view and interact with information stored in a database",
    link: "https://github.com/silkyjazz/employee-tracker",
  },

];

export default function Portfolio () {
  const styles = {
    marginLeft: "60px",
    padding: "40px",
  };
  return (
    <div>
      <h1 style={styles} className="page-title">
        Portfolio
      </h1>
      <Container style={styles}>
          <Row>
            {cardData.map((card, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card className="portfolio-item">
                  <Card.Img variant="top" href={card.link} src={card.image} />
                  <Card.Text className="card-text">
                    {card.title}
                    <br />
                    {card.description}
                  </Card.Text>
                </Card>
              </Col>
            ))}
          </Row>
      </Container>
    </div>
  );
};

