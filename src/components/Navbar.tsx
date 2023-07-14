import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="nav-container">
      <nav>
        <div className="logo">
          <p>Img</p>
          <h2>
            &lt;<span>Qiang</span>/&gt;
          </h2>
        </div>

        <ul className="nav-items">
          <li>
            <a href="#">
              <span>01 </span> About
            </a>
          </li>
          <li>
            <a href="#">
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
