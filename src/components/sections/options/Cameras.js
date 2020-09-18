import React, { Component } from "react";
import { connect } from "react-redux";
import { setCamera, setSol } from "../../../store/actions";

class Cameras extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: null,
    };
  }

  componentDidMount() {
    this.clickCamera(this.props.currentCamera) //force setting previously chosen camera
  }

  showCameras = () => {
    const cameras = this.props.rover.cameras;

    return (
      <div className="cameras-wrapper">
        <div className="row">
          {cameras.map((item) => (
            <div className="col" key={item.id}>
              <div
                className={`card ${this.state.isActive === item.id ? "active" : ""}`}
                onClick={() => this.clickCamera(item)}
              >
                <p>{item.full_name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="sol-container">
          <h4>Enter Mars Sol</h4>
          <label htmlFor="sol-js">Max Sol {this.props.rover.max_sol}</label>
          <input
            value={this.props.currentSol}
            type="text"
            className="form-control"
            id="sol-js"
            onChange={(e) => this.onChangeSol(e)}
          ></input>
        </div>
      </div >
    );
  }

  clickCamera = (item) => {
    this.setState({ isActive: item.id });
    this.props.setCamera(item);
  };

  onChangeSol = (e) => {
    const sol = Number(e.target.value)
    if (!isNaN(sol)) {
      if (sol > this.props.rover.max_sol) this.props.setSol(this.props.rover.max_sol);
      else this.props.setSol(sol);
    }
  };

  render() {
    return (
      <div className={`cameras`}>{this.showCameras()}</div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    rover: state.currentRover,
    currentCamera: state.currentCamera,
    currentSol: state.currentSol
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCamera: (camera) => dispatch(setCamera(camera)),
    setSol: (sol) => dispatch(setSol(sol)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cameras);
