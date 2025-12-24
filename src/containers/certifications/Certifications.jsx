import React, { Component } from "react";
import "./Certifications.css";
// Removed unused imports to satisfy ESLint

class Certifications extends Component {
  render() {
    return (
      <div className="main" id="certs">
        {/* <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Certifications
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {certifications.certifications.map((cert) => {
            return <CertificationCard certificate={cert} theme={theme} />;
          })}
        </div> */}
      </div>
    );
  }
}

export default Certifications;
