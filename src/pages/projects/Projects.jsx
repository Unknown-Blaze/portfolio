import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="projects">
        <h1 style={{ color: theme.text }}>Projects</h1>
      </div>
    );
  }
}

export default Projects;
