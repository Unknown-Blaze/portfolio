import React, { Component } from "react";
import "./ContactComponent.css";

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <h1 style={{ color: theme.text }}>Contact</h1>
      </div>
    );
  }
}

export default Contact;
