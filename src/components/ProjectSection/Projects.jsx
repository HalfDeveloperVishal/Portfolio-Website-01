import React from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Project1 from './Project1.jpeg'
import Project2 from './Project2.jpeg'
import Project3 from './Project3.jpg'
import Project4 from './Project4.jpg'

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
  {
    title: "SonicGear - A Earphone and Tech Gadget Platform",
    description:
      "SonicGear is a modern Django-based e-commerce platform specializing in earphones, headphones, and other tech gadgets. It provides users with a smooth shopping experience, featuring categorized products, dynamic carts, user authentication, and a responsive UI. Perfect for tech lovers and audio gear enthusiasts looking for a seamless online store experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Django"],
    codeLink: "https://github.com/HalfDeveloperVishal/SonicGear---E-Commerce-01",
    demoLink: "https://sonicgear-e-commerce-01.onrender.com/",
    image: Project3, // Add image path
  },
  {
    title: "TechBlog - A Blog Website",
    description:
      "TechBlog is a full-stack blog platform built using Django and ReactJS, designed to allow users to create, view, and manage posts with category support. It features interactive capabilities such as liking posts and adding comments to foster user engagement. The platform also personalizes the experience by displaying posts specific to each logged-in user, with secure authentication-based access to manage content effectively.",
      technologies: ["Django", "Rest API", "ReactJS", "Bootstrap"],
    codeLink: "https://github.com/HalfDeveloperVishal/TechBlog---A-Blog-Webiste",
    demoLink: "#",
    image: Project4, // Add image path
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