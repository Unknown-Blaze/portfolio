import React, { Component } from "react";

class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="355.5"
        height="335"
        viewBox="0 0 355.5 335"
      >
        <rect width="100%" height="100%" fill="none" />
        <circle cx="100" cy="100" r="50" fill={theme.text} />
      </svg>
    );
  }
}

export default FeelingProud;
