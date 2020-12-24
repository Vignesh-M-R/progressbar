import React from "react";
import { Card, Container, Jumbotron, Button } from "react-bootstrap";
import { GoLogoGithub } from "react-icons/go";
import { RiCodeBoxFill } from "react-icons/ri";
import { FaArrowAltCircleRight,FaGithubAlt } from "react-icons/fa";

function Projects() {
  return (
    <div>
      <div className="container p-5">
        <Card body className="card text-center">
          Projects
        </Card>

        <Jumbotron fluid className="mt-3">
          <Container>
            <p className="projects">
              <RiCodeBoxFill />{" "}
              <a href="https://vignesh-m-r.github.io/vigneshmr.github.io/">
                Resume <FaArrowAltCircleRight />
              </a>
            </p>
            <p className="projects">
              <RiCodeBoxFill /> <a href="/">College Symposium Website</a>
            </p>
            <p className="projects">
              <RiCodeBoxFill /> <a href="/">Validation Projects</a>
            </p>
            <p className="projects">
              <RiCodeBoxFill /> <a href="/">Portfolio</a>
            </p>
            <p className="projects">
              <RiCodeBoxFill /> <a href="/">GameSites</a>
            </p>
            <p className="projects">
              <RiCodeBoxFill /> <a href="/">Todo-List</a>
            </p>
            <p className="projects">
              <RiCodeBoxFill /> <a href="/">React Dynamic Site</a>
            </p>
            <p className="projects">
              <RiCodeBoxFill /> <a href="/">Weather App</a>
            </p>
            <p className="projects">
              <RiCodeBoxFill /> <a href="/">Basic JS Calculator</a>
            </p>
            <p className="projects">
              <RiCodeBoxFill /> <a href="/">Random User Generator</a>
            </p>
            <Button href="https://github.com/Vignesh-M-R?tab=repositories" size="sm" className="btn btn-info">
             project updates at&nbsp; <FaGithubAlt/> &nbsp;<GoLogoGithub id="logo" />
            </Button>
          </Container>
        </Jumbotron>
      </div>
      <hr></hr>
      <footer className="footer">
        <p className="copyrights">Copyright &copy; Vignesh M R - 2020</p>
      </footer>
    </div>
  );
}

export default Projects;
