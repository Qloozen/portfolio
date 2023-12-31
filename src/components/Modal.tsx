import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { Project } from "../models/ProjectModel";
import ReactMarkDownWrapper from "./ReactMarkDownWrapper";

type Props = {
  handleClose: () => void;
  project: Project;
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const Modal = ({ handleClose, project }: Props) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="modal-content">
          <div className="modal-images">
            <img src={project.thumbnail} alt="" draggable="false" />
            {project.media.map((image) => (
              <img src={image} alt="" draggable="false" />
            ))}
          </div>
          <h3>{project.name}</h3>
          <ReactMarkDownWrapper content={project.description} />
          <button onClick={handleClose}>Close</button>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
