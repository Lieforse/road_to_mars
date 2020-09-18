import React, { Component } from "react";

class Intro extends Component {
  render() {
    return (
      <section className="intro">
        <div className="stars">
          <div className="nebula"></div>
        </div>
        <div className="mars">
          <div className="mars-planet"></div>
        </div>
        <div className="container">
          <h1>
            Hello! This site can send you to an imaginary journey to Mars.
            <br></br>
            To proceed just scroll down!
          </h1>
        </div>
      </section>
    );
  }
}

export default Intro;
