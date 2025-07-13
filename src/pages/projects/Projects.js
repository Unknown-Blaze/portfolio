import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import ProjectCard from "../../components/projectCard/ProjectCard"; // <-- Import new component
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  projects, // <-- Import your featured projects data
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        {/* Open Source Section */}
        <div className="opensource-projects-section">
          <h1
            className="projects-section-heading"
            style={{ color: theme.text }}
          >
            Project Contributions
          </h1>
          <div className="repo-cards-div-main">
            {ProjectsData.data.map((repo) => {
              return <GithubRepoCard key={repo.id} repo={repo} theme={theme} />;
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={greeting.githubProfile}
            newTab={true}
            theme={theme}
          />
        </div>

        {/* Featured Projects Section */}
        <div className="featured-projects-section">
          <h1
            className="projects-section-heading"
            style={{ color: theme.text }}
          >
            Featured Projects
          </h1>
          <div className="repo-cards-div-main">
            {projects.data.map((project, i) => {
              return <ProjectCard key={i} project={project} theme={theme} />;
            })}
          </div>
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
