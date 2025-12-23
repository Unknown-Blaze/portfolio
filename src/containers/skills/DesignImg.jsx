import React, { Component } from "react";

export default class DesignImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="120">
        <rect
          x="20"
          y="20"
          width="160"
          height="80"
          fill={theme.compImgHighlight}
        />
      </svg>
    );
  }
}
