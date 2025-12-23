import React, { Component } from "react";
import "./Opensource.css";

class Opensource extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="opensource">
        <h1 style={{ color: theme.text }}>Open Source</h1>
      </div>
    );
  }
}

export default Opensource;
