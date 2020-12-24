import React from "react";
import { ImHome } from "react-icons/im";
import "./Header.css";
import Projects from "./Projects";
import Skills from "./Skills";

function Header() {
  return (
    <div>
      <div className="header">
        <a href="https://vignesh-m-r.github.io/vigneshmr.github.io/" id="icon">
          <ImHome />
        </a>
        <div className="content">Skills & Projects</div>
      </div>
      <Skills />
      <Projects />
    </div>
  );
}

export default Header;
