import React, { Component } from "react";
import "./Experience.css";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="experience">
        <h1 style={{ color: theme.text }}>Experience</h1>
      </div>
    );
  }
}

export default Experience;
