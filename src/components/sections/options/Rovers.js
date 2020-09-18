import React, { Component } from "react";
import { connect } from "react-redux";
import { setRover } from "../../../store/actions";

class Rovers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: null,
    };
  }

  componentDidMount() {
    this.clickRover(this.props.currentRover) //force setting previously chosen rover
  }

  clickRover = (item) => {
    this.setState({ isActive: item.id });
    this.props.setRover(item);
  };

  render() {
    return (
      <div className={`rovers`}>
        <div className="rover-wrapper">
          <div className="row">
            {this.props.rovers.map((item) => (
              <div
                className="col"
                key={item.id}
                onClick={() => this.clickRover(item)}
              >
                <div
                  className={`card ${this.state.isActive === item.id ? "active" : ""
                    }`}
                >
                  <h5>{item.name}</h5>
                  <p>Launch date: {item.launch_date}</p>
                  <p>Landing date: {item.landing_date}</p>
                  <p>Max date: {item.max_date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    rovers: state.rovers,
    currentRover: state.currentRover
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRover: (rover) => dispatch(setRover(rover)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rovers);