import { useState } from "react";
import { IconNav } from "../../SVG/IconNav";
import "./Navbar.css";
import { List, X } from "@phosphor-icons/react";

const contentNav = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Technology",
    link: "#technology",
  },
  {
    name: "Case studies",
    link: "#caseStudies",
  },
  {
    name: "About",
    link: "#about",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={` ${"w-100 pt-5 pb-5 px-3 mx-auto d-flex justify-content-between align-items-center"} containerNavbar`}>
    <span>
      <p className={`logo ${"text-white m-0"}`}>compleet labs</p>
    </span>
    <nav className={`navLinks close ${isOpen ? "open" : ""}`}>
      {contentNav.map(({ name, link }) => (
        <a key={name} href={link}>
          {name}
        </a>
      ))}
      <div className={` ${"d-flex align-items-center"}  hireUs`}>
        <IconNav /> <a href="#hireUs">Hire us</a>{" "}
      </div>
    </nav>
    <div className="mobileMenuToggle" onClick={toggleMenu}>
      <div className={`hamburger ${isOpen ? "iconIcon" : ""}`}>
        {isOpen ? <X size={32} /> : <List size={32} />}
      </div>
    </div>
  </div>
  );
};

export default Navbar;
