import "./App.css";
import About from "./sections/About";
import Home from "./sections/Home";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Contact from "./sections/Contact";

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <motion.div
        className="app-container"
        variants={fadeIn}
        animate="show"
        initial="hidden"
      >
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </motion.div>
    </QueryClientProvider>
  );
}

export default App;
