import ExperienceCard from "../components/ExperienceCard";
import FrontEnd from "../assets/icons/frontend.png";
import BackEnd from "../assets/icons/backend.png";
import Mobile from "../assets/icons/mobile.png";
import Reveal from "../components/Reveal";
import RevealContainer from "../components/RevealContainer";
import { useQuery } from "@tanstack/react-query";
import { fetchExperiences } from "../api/Api";

const experienceIcon = {
  "Front-end": FrontEnd,
  "Back-end": BackEnd,
  Mobile: Mobile,
};

const Experience = () => {
  const { data } = useQuery({
    queryKey: ["experience"],
    queryFn: () => fetchExperiences(),
  });

  return (
    <RevealContainer className="experience-container">
      <Reveal>
        <h2>Technologies I am familiar with</h2>
      </Reveal>
      <div className="experience-cards">
        {data?.map((experience) => (
          <Reveal key={experience.id}>
            <ExperienceCard
              img={experienceIcon[experience.name]}
              title={experience.name}
              items={experience.technologies.map((tech) => tech.name)}
            />
          </Reveal>
        ))}
      </div>
    </RevealContainer>
  );
};

export default Experience;
