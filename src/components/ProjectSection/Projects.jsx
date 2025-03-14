import React from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Project1 from './Project1.jpeg'
import Project2 from './Project2.jpeg'

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Our E-Commerce Platform allows users to browse a variety of products, add them to their shopping cart, and view a detailed breakdown of their final price before checkout.",
    technologies: ["HTML", "CSS", "JavaScript", "ReactJs"],
    codeLink: "https://github.com/HalfDeveloperVishal/E-Commerce",
    demoLink: "https://e-commerce-webiste-using-react.vercel.app/",
    image: Project1, // Add image path
  },
  {
    title: "Food Ordering Platform",
    description:
      "A seamless platform for browsing restaurants, viewing menus, and ordering food online. Users can add items to the cart, get a detailed price breakdown, and enjoy a smooth, responsive experience across all devices. 🚀🍕",
      technologies: ["HTML", "CSS", "JavaScript", "ReactJs"],
    codeLink: "https://github.com/HalfDeveloperVishal/Food-ordering-website",
    demoLink: "https://food-ordering-website-dxgt.vercel.app/",
    image: Project2, // Add image path
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Featured Projects</h2>
      <p className="projects-subtitle">Check out some of my recent work.</p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.codeLink} className="code-btn">
                  <FaGithub /> Code
                </a>
                <a href={project.demoLink} className="demo-btn">
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;