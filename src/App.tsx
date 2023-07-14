import "./App.css";
import About from "./sections/About";
import Home from "./sections/Home";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 2.5,
      staggerChildren: 0.25,
    },
  },
};

function App() {
  return (
    <motion.div variants={fadeIn} animate="show" initial="hidden">
      <Navbar />
      <Home />
      <About></About>
    </motion.div>
  );
}

export default App;
