import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { Project } from "../models/ProjectModel";
import ReactMarkdown from "react-markdown";

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
          <img src={project.thumbnail} alt="" draggable="false" />
          <h3>{project.name}</h3>
          <ReactMarkdown>{project.description}</ReactMarkdown>
          <button onClick={handleClose}>Close</button>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
