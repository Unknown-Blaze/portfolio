import React, { Component } from "react";

export default class LinuxSvg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="120">
        <circle cx="100" cy="60" r="50" fill={theme.imageHighlight} />
      </svg>
    );
  }
}
