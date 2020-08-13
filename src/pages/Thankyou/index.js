import React, { Component } from "react";
import ReactGA from "react-ga";
import "./Thankyou.scss";

class Thankyou extends Component {
  componentDidMount() {
    ReactGA.initialize("UA-150261833-3");
    ReactGA.pageview("/thankyou");
  }

  render() {
    return (
      <div className="wrapper-padding">
        <div className="thankyou-title">Thank you for submitting!</div>
      </div>
    );
  }
}

export default Thankyou;
