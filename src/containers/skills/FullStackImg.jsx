import React, { Component } from "react";

export default class FullStackImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="120">
        <rect x="10" y="10" width="180" height="100" fill={theme.jacketColor} />
      </svg>
    );
  }
}
