import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './HeroSection.css'; // Import the CSS file

const HeroSection = () => {
  const handleScrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Software Developer</h1>
        <p className="tagline">
          Building digital experiences<br />
          <span>with </span>
          <a>precision & clarity</a>
        </p>
        <p className="description">
          I craft clean, elegant solutions to complex problems using modern
          technologies and minimalist design principles.
        </p>
        <div className="cta-buttons">
          <button className="cta-button" onClick={handleScrollToProjects}>View My Work</button>
          <a
            href="/FinalNewVishalResume2.pdf" // Path to your resume file
            download="Vishal_Singh_Resume.pdf" // Rename the downloaded file
            className="cta-button outline"
          >
            Resume
          </a>
        </div>
        <div className="social-icons">
          <a
            href="https://github.com/HalfDeveloperVishal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/vishal-singh-b27b64214/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;