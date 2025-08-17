// src/components/Projects/Projects.jsx
import { useState } from 'react';
import ProjectsCard from './ProjectsCard.jsx';
import Mini from "../../assets/images/Uma.png";
import Weather from "../../assets/images/Weather.png";
import './Projects.css';

function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Mini-ecommerce-collaboration",
      image: Mini,
      liveLink: "https://oracle-ama10.github.io/mini-ecommerce-collaboration/",
      technologies: ["css", "javascript"]
    },
    {
      id: 2,
      title: "My-Weather-app",
      image: Weather,
      liveLink: "https://oracle-ama10.github.io/my-weather-app/",
      technologies: ["api", "css"]
    }
  ];

  const technologies = ['all', ...new Set(projects.flatMap(p => p.technologies || []))];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.technologies.includes(filter));

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on recently.
        </p>

        {/* Filter Buttons */}
        <div className="project-filters">
          {technologies.map(tech => (
            <button
              key={tech}
              className={`filter-btn ${filter === tech ? 'active' : ''}`}
              onClick={() => setFilter(tech)}
            >
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectsCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found for this technology.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;

// bruhhhhh
