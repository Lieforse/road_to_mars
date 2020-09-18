import React, { Component } from "react";
import { connect } from "react-redux";
import { getPhotos } from "../../../store/actions";

class Confirmation extends Component {

  optionsConfirmation = (options) => {
    this.props.getPhotos(options);
  };

  render() {
    return (
      <div className={`confirmation`}>
        <h5>Here are your options:</h5>
        <div className="row">
          <div className="col">
            <p>{this.props.rover.name}</p>
          </div>
          <div className="col">
            <p>{this.props.camera.name}</p>
          </div>
          <div className="col">
            <p>Sol: {this.props.sol}</p>
          </div>
        </div>
        <div
          className="btn btn-success"
          onClick={() => this.optionsConfirmation({
            "rover": this.props.rover.name,
            "camera": this.props.camera.name,
            "sol": this.props.sol
          })}
        >
          Proceed
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    rover: state.currentRover,
    camera: state.currentCamera,
    sol: state.currentSol,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPhotos: (options) => dispatch(getPhotos(options)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
