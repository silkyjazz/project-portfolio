import React from "react";

export default function Resume() {
  const styles = {
    margin: "20px",
    marginLeft:"120px",
    padding:"20px",
  };
  return (
    <div style={styles}>
      <h1>Resume</h1>
      <p>Download my resume</p>
      <h2>Front-end proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>Cascading Style Sheets (CSS)</li>
        <li>Javascript</li>
        <li>ES6</li>
        <li>jQuery</li>
        
      </ul>
      <h2>Back-end proficiencies</h2>
      <ul>
      <li>Unit Testing w/ JEST</li>
        <li>Object-oriented Programming (OOP)</li>
        <li>Heroku</li>
        <li>Rest API</li>
        <li>Express.js</li>
        <li>Node.js</li>
        <li>GitHub</li>
        <li>Insomnia / Postman</li>
        <li>Fetch</li>
        <li>AJAX</li>
        <li>Third Party API</li>
      
      </ul>
    </div>
  );
}
