import React from "react";
import ProjectCard from "../components/ProjectCard";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
