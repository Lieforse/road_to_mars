import React, { Component } from "react";
import { connect } from "react-redux";
import { roversFetchData, proceed, back } from "../../../store/actions";
import Cameras from "./Cameras";
import Confirmation from "./Confirmation";
import Rovers from "./Rovers";

class OptionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShow: "left",
      shouldMinimize: "",
    };
  }

  componentDidMount() {
    this.props.roversFetchData();
  }

  slide = (direction) => {
    const obj = {
      panel: this.props.activePanel,
      direction: direction,
    };
    if (direction === "forward") {
      this.props.proceed()
      if (this.props.stage === 2) {
        this.setState({ shouldShow: "right", shouldMinimize: "active" });
      } else {
        this.setState({ shouldShow: "" });
      }
    } else {
      this.props.back()
      if (this.props.stage === 2) {
        this.setState({ shouldShow: "left", shouldMinimize: "active" });
      } else {
        this.setState({ shouldShow: "" });
      }
    }

  };

  showStage(stage) {
    switch (stage) {
      case 1:
        return <Rovers />
      case 2:
        return <Cameras />
      case 3:
        return <Confirmation />
    }
  }

  render() {
    return (
      <div className="options-container">
        <div className="title-container">
          <h3>Here are some steps to start your journey.</h3>
          <h4>{this.props.optionsTitle[this.props.stage - 1]}</h4>
        </div>
        <div className="options-wrapper">
          <div
            class={`arrow-left ${this.state.shouldShow}`}
            onClick={() => this.slide("backward")}
          >
            <div class="arrow-bottom"></div>
            <div class="arrow-top"></div>
          </div>
          <div className={`wrapper ${this.state.shouldMinimize}`}>
            {this.showStage(this.props.stage)}
          </div>
          <div
            class={`arrow-right ${this.state.shouldShow}`}
            onClick={() => this.slide("forward")}
          >
            <div class="arrow-top"></div>
            <div class="arrow-bottom"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    optionsTitle: state.optionsTitles,
    stage: state.stage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    proceed: () => dispatch(proceed()),
    back: () => dispatch(back()),
    roversFetchData: () => dispatch(roversFetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OptionsContainer);
