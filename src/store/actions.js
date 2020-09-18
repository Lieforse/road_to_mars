export function roversFetchData() {
  return (dispatch) => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=7JXGvqICDkmG8fgY8WfzOmgMm64mLaU5NGIxW21a"
    )
      .then((response) => response.json())
      .then((response) =>
        dispatch({ type: "ROVERS_DATA_LOADED", data: response })
      );
  };
}

export const proceed = () => {
  return {
    type: "PROCEED"
  };
};

export const back = () => {
  return {
    type: "BACK"
  };
};

export const setRover = (rover) => {
  return {
    type: "SET_ROVER",
    rover,
  };
};

export const setCamera = (camera) => {
  return {
    type: "SET_CAMERA",
    camera,
  };
};

export const setSol = (sol) => {
  return {
    type: "SET_SOL",
    sol,
  };
};

export const getPhotos = (options) => {
  return (dispatch) => {
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${options.rover.toLowerCase()}/photos?sol=${options.sol
      }&camera=${options.camera
      }&api_key=7JXGvqICDkmG8fgY8WfzOmgMm64mLaU5NGIxW21a`
    fetch(
      url
    )
      .then((response) => response.json())
      .then((response) => dispatch({ type: "PHOTOS_LOADED", data: response }));
  };
};
