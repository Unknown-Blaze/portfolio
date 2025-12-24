import React, { Component } from "react";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import OpensourceCharts from "../../containers/opensourceCharts/OpensourceCharts.jsx";
import Organizations from "../../containers/organizations/Organizations.jsx";
import PullRequests from "../../containers/pullRequests/PullRequests.jsx";
import Issues from "../../containers/issues/Issues.jsx";
import TopButton from "../../components/topButton/TopButton.jsx";
import "./Opensource.css";

class Opensource extends Component {
  render() {
    return (
      <div className="opensource-main">
        <Header theme={this.props.theme} />
        <Organizations theme={this.props.theme} />
        <OpensourceCharts theme={this.props.theme} />
        <PullRequests theme={this.props.theme} />
        <Issues theme={this.props.theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Opensource;
