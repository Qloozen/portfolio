import React, { useState } from "react";
import { Project } from "../models/ProjectModel";
import { motion } from "framer-motion";
import { HoverScaleVariant } from "../Animations";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <motion.div
      className="project-card-container"
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.025,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <img src={project.thumbnail} alt="" />
      <div className="project-card-content">
        <h4>{project.name}</h4>
        <p>{project.description}</p>
        <div className="tag-container">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
