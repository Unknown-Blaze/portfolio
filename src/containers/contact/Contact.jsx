import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia.jsx";
import { contactPageData } from "../../portfolio.js";
import contactMail from "../../assets/images/contactMail.png";

export default function Contact() {
  const { contactSection, phoneSection } = contactPageData;
  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">{contactSection.title}</h1>
          <p className="subTitle contact-subtitle">
            {contactSection.description}
          </p>

          <div className="contact-text-div">
            {phoneSection?.subtitle && (
              <>
                <a
                  className="contact-detail"
                  href={"tel:" + phoneSection.subtitle}
                >
                  {phoneSection.subtitle}
                </a>
                <br />
                <br />
              </>
            )}
            <br />
            <br />
            <SocialMedia />
          </div>
        </div>
        <div className="contact-image-div">
          <img alt="Saad Working" src={contactMail} />
        </div>
      </div>
    </div>
  );
}
