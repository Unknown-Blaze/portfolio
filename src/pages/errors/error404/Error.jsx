import React, { Component } from "react";
import "./Error.css";

class Error404 extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="error-main">
        <h1 style={{ color: theme.text }}>404 - Page Not Found</h1>
      </div>
    );
  }
}

export default Error404;
