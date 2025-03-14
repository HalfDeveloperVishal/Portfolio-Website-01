import React from "react";
import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Have a project in mind or just want to chat? Feel free to reach out!
      </p>

      <div className="contact-container">
        {/* Left Side: Contact Info */}
        <div className="contact-info">
          <p>
            <a
              href="mailto:vishalsinghdeveloper004@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="icon" /> vishalsinghdeveloper004@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/vishal-singh-b27b64214/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" /> LinkedIn Profile
            </a>
          </p>
          <p>
            <a
              href="https://github.com/HalfDeveloperVishal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" /> GitHub Profile
            </a>
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-form">
          <h3>Send a Message</h3>
          <p>
            Fill out the form below and I'll get back to you as soon as
            possible.
          </p>

          <form>
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Your email" required />
            <textarea placeholder="Your message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
