import { useRef, useState, RefObject } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowCircleUp } from "react-icons/fa";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Expertise from "./Expertise";

const Headers = () => {
  const home = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);
  const projects = useRef<HTMLDivElement>(null);
  const skills = useRef<HTMLDivElement>(null);

  const scrollToSection = (elementRef: RefObject<HTMLDivElement>) => {
    window.scrollTo({
      top: elementRef.current ? elementRef.current.offsetTop : 0,
      behavior: "smooth",
    });
  };

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);

  const toggleMobileIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <p className="navbarName" onClick={() => scrollToSection(home)}>ShivamPandey</p>
        </div>
        <div className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li onClick={() => scrollToSection(home)}>home</li>
            <li onClick={() => scrollToSection(about)}>about</li>
            <li onClick={() => scrollToSection(skills)}>skills</li>
            <li onClick={() => scrollToSection(projects)}>experties</li>
            <li onClick={() => scrollToSection(contact)}>contact</li>
            <FaArrowCircleUp className="iconUpArrow" onClick={() => scrollToSection(home)} />
          </ul>
        </div>
        <div className="navbar-toggle" onClick={toggleMobileMenu}>
          {toggleMobileIcon ? (
            <RxHamburgerMenu className="navbar-toggle-icon" onClick={toggleMobileIcon} />
          ) : (
            <RxHamburgerMenu className="navbar-toggle-icon" onClick={toggleMobileIcon} />
          )}
        </div>
      </nav>

      <div className="main" ref={home}>
        <Home />
      </div>

      <div className="aboutMain" ref={about}>
        <About />
      </div>
      
      <div className="aboutMain skillsTop" ref={skills}>
        <Skills />
      </div>
      
      <div className="projectCont" ref={projects}>
        <Expertise />
      </div>
      
      <div className="aboutMain skillsTop" ref={contact}>
        <Contact />
      </div>
    </>
  );
};

export default Headers;
