import React from "react";
import "./AboutMe.css";
import AboutImage from "./AboutImage.jpeg";

const AboutMe = () => {
  return (
    <section id="about" className="about">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        Hello! I'm a passionate Web developer building web applications. I love
        solving complex problems and creating intuitive, user-friendly
        interfaces.
      </p>

      <div className="about-content">
        <div className="about-image">
          {/* Replace Placeholder with Actual Image */}
          <div className="image-placeholder">
            <img src={AboutImage} alt="About Me" className="about-img" />
          </div>
        </div>

        <div className="about-text">
          <div className="about-section">
            <h3>Background</h3>
            <p>
              I have a background in Computer Science and have worked in my
              Personal Projects. My journey in Tech began when I built my first
              website in my 2nd Year of College.
            </p>
          </div>

          <div className="about-section">
            <h3>Approach</h3>
            <p>
              I believe in writing clean, maintainable code and staying
              up-to-date with the latest technologies and best practices.
            </p>
          </div>

          <div className="about-section">
            <h3>Outside of Coding</h3>
            <p>
              When I'm not coding, you can find me palying sports like
              Badminton, Cricket and also going GYM for fitness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
