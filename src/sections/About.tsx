import code from "../assets/images/code.png";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import RevealContainer from "../components/RevealContainer";
import { useQuery } from "@tanstack/react-query";
import { fetchAbout } from "../api/Api";
import ReactMarkDownWrapper from "../components/ReactMarkDownWrapper";

const About = () => {
  const { data } = useQuery({
    queryKey: ["about"],
    queryFn: () => fetchAbout(),
  });

  return (
    <div id="about-section">
      <RevealContainer className="about-container">
        <Reveal className="code-description">
          <img src={code} alt="code description" />
        </Reveal>
        <Reveal className="about-text">
          <h2>About me</h2>
          <ReactMarkDownWrapper content={data?.about ?? ""} />
        </Reveal>
        <motion.svg
          viewBox="0 0 1440 363"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={{
              offscreen: {
                pathLength: 0,
                pathOffset: 1,
                opacity: 0,
              },
              onscreen: {
                opacity: 1,
                transition: {
                  duration: 1.5,
                },
                pathLength: 1,
                pathOffset: 0,
              },
            }}
            d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
            stroke="#38d39f"
            strokeOpacity="0.1"
            strokeWidth="10"
          />
        </motion.svg>
      </RevealContainer>
    </div>
  );
};

export default About;
