import React, { useState } from "react";

type Props = {};

const ProjectCard = (props: Props) => {
  const [tags, setTags] = useState([
    "SQL",
    "Angular",
    ".NET",
    "GraphQL",
    "SQL",
    "Angular",
    ".NET",
    "GraphQL",
  ]);
  return (
    <div className="project-card-container">
      <img
        src="https://punt.avans.nl/app/uploads/2021/11/bress_breda.jpg"
        alt=""
      />
      <div className="project-card-content">
        <h4>Project</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          alias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Commodi, alias.
        </p>
        <div className="tag-container">
          {tags.map((tag) => {
            return <span className="tag">{tag}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
