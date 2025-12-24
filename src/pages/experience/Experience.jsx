import React, { Component } from "react";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import TopButton from "../../components/topButton/TopButton.jsx";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.jsx";
import { experience } from "../../portfolio.js";
import experienceImg from "../../assets/images/experience.svg";
import "./Experience.css";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />

        <div className="basic-experience">
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              <img alt="Experience" src={experienceImg} />
            </div>
            <div className="experience-heading-text-div">
              <h1
                className="experience-heading-text"
                style={{ color: theme.text }}
              >
                {experience.title}
              </h1>
              <h3
                className="experience-heading-sub-text"
                style={{ color: theme.text }}
              >
                {experience.subtitle}
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {experience.description}
              </p>
            </div>
          </div>

          <ExperienceAccordion sections={experience.sections} theme={theme} />
        </div>

        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Experience;
