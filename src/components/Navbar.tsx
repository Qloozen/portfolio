import { useQuery } from "@tanstack/react-query";
import { fetchProfile } from "../api/Api";
import { motion } from "framer-motion";

const Navbar = () => {
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: () => fetchProfile(),
  });

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

        <ul className="nav-items">
          <li>
            <a href="#about-section">
              <span>01 </span> About
            </a>
          </li>
          <li>
            <a href="#projects-section">
              <span>02 </span> Projects
            </a>
          </li>
          <li>
            <a href="#">
              <span>03 </span> Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
