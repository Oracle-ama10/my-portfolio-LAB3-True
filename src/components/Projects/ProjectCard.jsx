import { motion } from "framer-motion";

function ProjectsCard({ project }) {  
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3>
        <a
          href={project.liveLink}
          className="heading-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.title}
        </a>
      </h3>
      <img src={project.image} alt={project.title} className="project-img" />
    </motion.div>
  );
}

export default ProjectsCard;
// im so cookeddd