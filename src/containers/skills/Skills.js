// Skills.js
import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";
import { about, skills } from "../../portfolio"; // Import both skills sets

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      {/* What I Do Section */}
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header-2" style={{ color: theme.text }}>
            What I do
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} skills={skills} />{" "}
      {/* Pass skills2 as prop */}
    </div>
  );
}
