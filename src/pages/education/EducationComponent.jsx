import React, { Component } from "react";
import "./EducationComponent.css";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="education">
        <h1 style={{ color: theme.text }}>Education</h1>
      </div>
    );
  }
}

export default Education;
