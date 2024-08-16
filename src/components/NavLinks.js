import { useState } from "react";
import { NavLink } from "react-router-dom";

import openMenu from "../images/open.svg";
import closeMenu from "../images/close.svg";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openResume = () => {
    window.open("https://drive.google.com/file/d/19AcDtyr4s5wHm8kGQZhn17gcZKGL39sG/view?usp=sharing", "_blank");
  }

  return (
    <>
      <button className="dropdown-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <img className="closeMenu" src={closeMenu} alt="Close" />
        ) : (
          <img className="openMenu" src={openMenu} alt="Open" />
        )}
      </button>
      <nav className={`links ${isMenuOpen ? "open" : "closed"}`}>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
                    About
        </NavLink>
        <a href="#" onClick={openResume}>
          Resume
        </a>
        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Contact
        </NavLink>
      </nav>
    </>
  );
};

export default NavLinks;
