import React from "react";
import { Card, ProgressBar, Spinner } from "react-bootstrap";

function Skills() {
  return (
    <>
      <div className="container text-left p-5">
        <Card body className="card text-center">
          Skills
        </Card>
        <div className="mt-4">
          HTML/CSS
          <ProgressBar variant="success" animated now={95} label="95%" />
        </div>
        <div className="mt-4">
          JavaScript
          <ProgressBar variant="warning" animated now={75} label="75%" />
        </div>
        <div className="mt-4">
          React
          <ProgressBar animated now={80} label="80%" />
        </div>
        <div className="mt-4">
          Bootstrap
          <ProgressBar variant="info" animated now={85} label="85%" />
        </div>
        <div className="mt-4">
          UI/UX
          <ProgressBar variant="danger" animated now={80} label="80%" />
        </div>
        <div className="mt-4">
          Angular
          <ProgressBar animated now={60} label="60%" />
        </div>
        <div className="mt-4">
          C<ProgressBar variant="success" animated now={75} label="75%" />
        </div>
        <div className="mt-4">
          C++
          <ProgressBar variant="warning" animated now={75} label="75%" />
        </div>
        <div className="mt-4">
          Java
          <ProgressBar variant="error" animated now={70} label="70%" />
        </div>
        <div className="mt-4">
          Python
          <ProgressBar variant="danger" animated now={80} label="80%" />
        </div>
        <div className="mt-4">
          Php
          <ProgressBar variant="success" animated now={75} label="75%" />
        </div>
        <div className="mt-4">
          Node Js
          <ProgressBar variant="info" animated now={60} label="60%" />
        </div>
        <div className="mt-4">
          MySQL
          <ProgressBar variant="warning" animated now={80} label="80%" />
        </div>
        <div className="mt-4">
          React Native
          <ProgressBar variant="success" animated now={75} label="75%" />
        </div>
        <div className="mt-4">
          Git
          <ProgressBar variant="danger" animated now={70} label="70%" />
        </div>
        <div className="mt-4">
          Firebase
          <ProgressBar animated now={90} label="90%" />
        </div>
        <p className="text-center font-weight-normal text-info mt-4">
          <Spinner animation="border" size="sm" variant="info" />
          and learning...
        </p>
      </div>
      <hr></hr>
    </>
  );
}

export default Skills;
