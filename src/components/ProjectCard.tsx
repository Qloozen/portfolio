import React, { useState } from "react";
import { Project } from "../models/ProjectModel";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="project-card-container">
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
    </div>
  );
};

export default ProjectCard;
