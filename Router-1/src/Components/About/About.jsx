import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1 className="about-heading">About Me</h1>
        <p className="about-paragraph">
          I am currently studying <strong>Electrical and Electronic Engineering (EEE)</strong>, driven by a passion to innovate and solve real-world problems.
        </p>
        <p className="about-paragraph">
          With a keen interest in web development, I specialize in building simple, clean websites. <strong>JavaScript</strong> is my favorite programming language, enabling me to create dynamic and interactive user experiences.
        </p>
        <p className="about-paragraph">
          Beyond web technologies, I am fascinated by <strong>robotics</strong> and embedded systems, having built several simple Arduino projects that deepen my practical understanding of electronics.
        </p>
        <p className="about-paragraph">
          Above all, I am devoted to Allah, which grounds my values and guides me in my personal and professional journey.
        </p>
      </div>
    </section>
  );
};

export default About;
