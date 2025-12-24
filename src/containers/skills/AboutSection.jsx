// AboutSection.js
import React from "react";
import "./About.css"; // You'll create this CSS file
import { about } from "../../portfolio";
import { Fade } from "react-reveal";

function AboutSection(props) {
  const theme = props.theme;
  return (
    <div className="about-main-div">
      <Fade left duration={2000}>
        <div className="about-image-div">
          {/* If you have an image, include it here */}
          <img
            alt="Profile"
            src={require(`../../assets/images/${about.imagePath}`)}
          ></img>
        </div>
      </Fade>
      <div className="about-text-div">
        <Fade right duration={1000}>
          <h1 className="about-heading" style={{ color: theme.text }}>
            {about.title}
          </h1>
        </Fade>
        <Fade right duration={1500}>
          <p
            className="about-description"
            style={{ color: theme.secondaryText }}
          >
            {about.description}
          </p>
        </Fade>
      </div>
    </div>
  );
}

export default AboutSection;
