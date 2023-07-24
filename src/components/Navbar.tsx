import { useQuery } from "@tanstack/react-query";
import { fetchProfile } from "../api/Api";
import { motion } from "framer-motion";
import { HamburgerMenu } from "./Hamburger";
import { useState } from "react";

const Navbar = () => {
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: () => fetchProfile(),
  });

  const [isOpen, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  const variant = isOpen ? "opened" : "closed";

  const navAnimation = {
    closed: {
      y: "-100%",
    },
    opened: {
      y: 0,
    },
  };

  return (
    <div className="nav-container">
      <nav>
        <div className="logo">
          <motion.img
            src={data?.imageUrl}
            alt={data?.alt}
            initial={{ scale: 1 }}
            whileHover={{
              scale: 3,
              y: 50,
            }}
            transition={{ duration: 0.25 }}
          />
          <a href="#">
            <h2>
              &lt;<span>Qiang</span>/&gt;
            </h2>
          </a>
        </div>

        <motion.ul
          className="nav-items"
          animate={variant}
          initial="closed"
          variants={navAnimation}
          transition={{ type: "tween", duration: 0.25 }}
        >
          <li>
            <a href="#about-section" onClick={closeMenu}>
              <span>01 </span> About
            </a>
          </li>
          <li>
            <a href="#projects-section" onClick={closeMenu}>
              <span>02 </span> Projects
            </a>
          </li>
          <li>
            <a href="#contact-section" onClick={closeMenu}>
              <span>03 </span> Contact
            </a>
          </li>
        </motion.ul>
        <HamburgerMenu isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
      </nav>
    </div>
  );
};

export default Navbar;
