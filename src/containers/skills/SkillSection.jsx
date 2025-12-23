import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill.jsx";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg.jsx";
import FullStackImg from "./FullStackImg.jsx";
import CloudInfraImg from "./LinuxSvg.jsx";
import DesignImg from "./DesignImg.jsx";

function GetSkillSvg(props) {
  switch (props.fileName) {
    case "DataScienceImg":
      return <DataScienceImg theme={props.theme} />;
    case "NTU_Logo":
      return (
        <img
          src={new URL("../../assets/images/Ntulogo.png", import.meta.url).href}
          alt="Feeling Proud"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
          }}
        />
      );
    case "FullStackImg":
      return <FullStackImg theme={props.theme} />;
    case "CloudInfraImg":
      return <CloudInfraImg theme={props.theme} />;
    case "DesignImg":
      return <DesignImg theme={props.theme} />;
    default:
      return <DesignImg theme={props.theme} />;
  }
}

class SkillSection extends Component {
  render() {
    const { skills, theme } = this.props;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, index) => {
                      return (
                        <p
                          key={index}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
