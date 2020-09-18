import React, { Component } from "react";

class Images extends Component {
  constructor(props) {
    super(props);
    this.POSTS_PER_PAGE = 21
    this.state = {
      currentPage: 1,
    };
  }

  readMorePagination = () => {
    const photosPerPage = this.POSTS_PER_PAGE;
    const indexOfLastPost = photosPerPage * this.state.currentPage;
    const indexOfFistPost = 0;
    const currentPhotos = this.props.photos.slice(
      indexOfFistPost,
      indexOfLastPost
    );

    return currentPhotos.map((item) => (
      <div className="col" key={item.id}>
        <img src={item.img_src} alt="" />
      </div>
    ));
  };

  readMore = (number) => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  render() {
    return (
      <div className="photos-wrapper">
        <div className="row">{this.readMorePagination()}</div>
        {this.props.photos.length > this.POSTS_PER_PAGE ? <div className="btn btn-danger" onClick={() => this.readMore()}>
          Read More
        </div> : null}
      </div>
    );
  }
}

export default Images;
