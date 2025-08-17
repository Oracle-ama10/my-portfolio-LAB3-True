// src/components/About/About.jsx
import { Code, Palette, Zap, Heart } from 'lucide-react';
import './About.css';
import Profile from "../../assets/images/Limbuss.png";

function About() {
  const skills = [
    { name: 'Frontend Development', icon: <Code size={24} />, color: '#3b82f6' },
    { name: 'UI/UX Design', icon: <Palette size={24} />, color: '#10b981' },
    { name: 'Performance Optimization', icon: <Zap size={24} />, color: '#f59e0b' },
    { name: 'Problem Solving', icon: <Heart size={24} />, color: '#ef4444' }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
              Hello, I'm a new web developer who's only recently entered the world of coding. While I'm still relatively inexperienced, I'm determined to improve my skills so I can continue to develop and solve problems in the future.
            </p>
            <p className="about-description">
              When I'm not in front of my computer, I usually find something interesting to do as a project. But most of the time, I'll just go out and find inspiration or just lay around all day.
            </p>
            
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div 
                    className="skill-icon"
                    style={{ backgroundColor: skill.color + '20', color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a href="/resume.pdf" className="btn-primary" download>
                Download Resume
              </a>
              <button 
                className="btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <img src={Profile} alt="My-profile" className="project-img"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;