import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "./components/Footer";
import ImagesSection from "./components/sections/images/ImagesSection";
import Intro from "./components/sections/intro/Intro";
import OptionsContainer from "./components/sections/options/OptionsContainer";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Intro />
        <div className="container">
          <OptionsContainer />
          {this.props.stage === 3 ? <ImagesSection /> : null}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stage: state.stage,
  };
};

export default connect(mapStateToProps)(App);
