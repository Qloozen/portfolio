import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import FrontEnd from "../assets/icons/frontend.png";
import BackEnd from "../assets/icons/backend.png";
import Mobile from "../assets/icons/mobile.png";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import RevealContainer from "../components/RevealContainer";
type Props = {};

const Experience = (props: Props) => {
  return (
    <RevealContainer className="experience-container">
      <Reveal>
        <h2>Technologies I am familiar with</h2>
      </Reveal>
      <div className="experience-cards">
        <Reveal>
          <ExperienceCard
            img={FrontEnd}
            title={"Front-end"}
            items={[
              "HTML",
              "CSS",
              "SASS",
              "Javascript",
              "Typescript",
              "React",
              "Redux Toolkit",
              "Angular",
            ]}
          />
        </Reveal>
        <Reveal>
          <ExperienceCard
            img={BackEnd}
            title={"Back-end"}
            items={[
              "Node.js",
              "Express",
              "NEST.js",
              ".NET API",
              "SQL",
              "MongoDB",
            ]}
          />
        </Reveal>
        <Reveal>
          <ExperienceCard
            img={Mobile}
            title={"Mobile"}
            items={["React Native", "SwiftUI", "Jetpack Compose"]}
          />
        </Reveal>
      </div>
    </RevealContainer>
  );
};

export default Experience;
