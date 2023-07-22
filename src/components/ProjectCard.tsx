import { useState } from "react";
import { Project } from "../models/ProjectModel";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "./Modal";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  };
  const open = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div>
      <motion.div
        className="project-card-container"
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.025,
        }}
        transition={{
          duration: 0.25,
        }}
        onClick={() => (modalOpen ? close() : open())}
      >
        <img src={project.thumbnail} alt="" draggable="false" />
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
      <AnimatePresence initial={false} mode="wait">
        {modalOpen && <Modal handleClose={close} project={project} />}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCard;
