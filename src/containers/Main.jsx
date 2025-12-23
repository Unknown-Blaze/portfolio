import React, { Component } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent.jsx";
import Splash from "../pages/splash/Splash.jsx";
import Education from "../pages/education/EducationComponent.jsx";
import Experience from "../pages/experience/Experience.jsx";
import Opensource from "../pages/opensource/Opensource.jsx";
import Contact from "../pages/contact/ContactComponent.jsx";
import Projects from "../pages/projects/Projects.jsx";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error.jsx";

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter basename="/portfolio">
        <Routes>
          <Route
            path="/"
            element={
              settings.isSplash ? (
                <Splash theme={this.props.theme} />
              ) : (
                <Home theme={this.props.theme} />
              )
            }
          />
          <Route path="/home" element={<Home theme={this.props.theme} />} />
          <Route
            path="/experience"
            element={<Experience theme={this.props.theme} />}
          />
          <Route
            path="/education"
            element={<Education theme={this.props.theme} />}
          />
          <Route
            path="/opensource"
            element={<Opensource theme={this.props.theme} />}
          />
          <Route
            path="/contact"
            element={<Contact theme={this.props.theme} />}
          />

          {settings.isSplash && (
            <Route
              path="/splash"
              element={<Splash theme={this.props.theme} />}
            />
          )}

          <Route
            path="/projects"
            element={<Projects theme={this.props.theme} />}
          />
          <Route path="*" element={<Error404 theme={this.props.theme} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
