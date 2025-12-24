import React, { Component } from "react";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import TopButton from "../../components/topButton/TopButton.jsx";
import OpenSourceProjects from "../../containers/projects/Projects.jsx";
import projectsImg from "../../assets/images/projects_image.svg";
import "./Projects.css";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />

        <div className="basic-projects">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <img alt="Projects" src={projectsImg} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                Projects
              </h1>
              <h3
                className="projects-heading-sub-text"
                style={{ color: theme.text }}
              >
                Featured open-source work
              </h3>
            </div>
          </div>

          <OpenSourceProjects theme={theme} />
        </div>

        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Projects;
