import ProjectCard from "../components/ProjectCard";
import RevealContainer from "../components/RevealContainer";
import Reveal from "../components/Reveal";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "../api/Api";

type Props = {};

const Projects = (props: Props) => {
  const { data } = useQuery({
    queryKey: ["project"],
    queryFn: () => fetchProjects(),
  });

  return (
    <div id="projects-section">
      <RevealContainer className="projects-container">
        <Reveal>
          <h2>Projects</h2>
        </Reveal>
        <div className="projects">
          {data?.map((project) => (
            <Reveal key={project.id}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </RevealContainer>
    </div>
  );
};

export default Projects;
