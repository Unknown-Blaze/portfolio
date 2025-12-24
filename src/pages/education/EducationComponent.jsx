import React, { Component } from "react";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import TopButton from "../../components/topButton/TopButton.jsx";
import Educations from "../../containers/education/Educations.jsx";
import educationImg from "../../assets/images/education.svg";
import "./EducationComponent.css";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={theme} />

        <div className="basic-education">
          <div className="heading-div">
            <div className="heading-img-div">
              <img alt="Education" src={educationImg} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                My story and learning journey
              </h3>
            </div>
          </div>

          <Educations theme={theme} />
        </div>

        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Education;
