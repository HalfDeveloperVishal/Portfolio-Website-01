import React from "react";
import "./Skills.css"; // Import the CSS file

const skills = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "ReactJs",
  "Python",
  "C++",
  "Django",
  "Django Rest Framework",
  "Rest APIs",
  "Git/Github"
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills & Technologies</h2>
      <p className="skills-subtitle">
        Here are some of the technologies and tools I work with.
      </p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
