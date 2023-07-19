import React from "react";
import ProjectCard from "../components/ProjectCard";
import RevealContainer from "../components/RevealContainer";
import Reveal from "../components/Reveal";

type Props = {};

const Projects = (props: Props) => {
  return (
    <RevealContainer className="projects-container">
      <Reveal>
        <h2>Projects</h2>
      </Reveal>
      <div className="projects">
        {[1, 2, 3, 4, 5, 6].map((p) => {
          return (
            <Reveal>
              <ProjectCard />
            </Reveal>
          );
        })}
      </div>
    </RevealContainer>
  );
};

export default Projects;
