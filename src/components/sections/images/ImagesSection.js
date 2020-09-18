import React, { Component } from "react";
import { connect } from "react-redux";
import Images from "./Images";

class ImagesSection extends Component {

  photosAvailabilityChecker = () => {
    if (this.props.confirmation) {
      if (this.props.photos.length > 0) {
        return <Images photos={this.props.photos} />;
      } else {
        return <h3>Sorry, but there are no images with theese options</h3>;
      }
    } else {
      return <h3>Please, confirm chosen options</h3>;
    }
  };

  render() {
    return (
      <div className="image-section-wrapper">
        {this.photosAvailabilityChecker()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
    confirmation: state.confirmation
  };
};

export default connect(mapStateToProps)(ImagesSection);
