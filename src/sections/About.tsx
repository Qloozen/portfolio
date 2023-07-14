import React from "react";
import code from "../assets/images/code.png";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <div className="about-container">
      <div className="code-description">
        <img src={code} alt="code description" />
      </div>
      <div className="about-text">
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dolor
          veniam voluptas esse quos necessitatibus ratione praesentium illo odio
          iusto eum nemo earum placeat quibusdam tempora incidunt vitae ut
          fugiat, corrupti quas blanditiis magni excepturi architecto! Incidunt
          expedita quaerat natus cumque autem commodi rerum neque numquam
          pariatur. Maiores, consequatur deserunt.
        </p>
      </div>
      <motion.svg
        viewBox="0 0 1440 363"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 2 }}
          d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
          stroke="#38d39f"
          strokeOpacity="0.1"
          strokeWidth="10"
        />
      </motion.svg>
    </div>
  );
};

export default About;
