import React, { Component } from "react";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import TopButton from "../../components/topButton/TopButton.jsx";
import ContactContent from "../../containers/contact/Contact.jsx";
import addressImage from "../../assets/images/address_image.svg";
import "./ContactComponent.css";

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />

        <div className="basic-contact">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img alt="Contact" src={addressImage} />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                Contact
              </h1>
              <h3
                className="address-heading-text"
                style={{ color: theme.text }}
              >
                Let’s build something together
              </h3>
            </div>
          </div>

          <ContactContent theme={theme} />
        </div>

        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Contact;
