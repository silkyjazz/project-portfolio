import React from 'react';
import profilePic from '../../images/profile-pic.png';
export default function About() {
  const styles ={
    margin:"20px"
  }
    const sectionStyle= {
        justifyContent: "center",
        padding: "60px"
    }
    const imgStyle = {
        height: "250px",
        margin: "auto",
        display: "block"
    }

  return (
    <div style={styles}>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>Jasmine Ulloa</h1>
      <img src={profilePic} alt="Jasmine Ulloa" style={imgStyle}/>
      <p style={sectionStyle}>
      Hello and welcome! My name is Jasmine Ulloa, and I'm a full stack developer. I have a strong passion for technology and I'm constantly striving to expand my knowledge and skills in the field. My expertise includes JavaScript, CSS, HTML, React, MERN stack, RESTful APIs, database management, and Git workflow. I enjoy solving complex problems, creating innovative solutions, and collaborating with others to bring ideas to life. Whether it's building dynamic web applications or developing efficient backend systems, I'm always up for a new challenge. Thanks for taking the time to learn a little bit about me, and I'm excited to see what we can achieve together!
      </p>
    </div>
  );
}
