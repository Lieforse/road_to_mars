const initialState = {
  optionsTitles: [
    "Your Mars rover will be:",
    "Choose Mars rover camera and Sol",
    "Confirm dispath",
  ],
  rovers: [],

  currentRover: "",
  currentCamera: "",
  currentSol: 200,
  confirmation: false,

  photos: [],

  stage: 1 //1 - rover select; 2 - camera+sol select; 3-confirm,enjoy =)
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ROVERS_DATA_LOADED": {

      return {
        ...state,
        rovers: action.data.rovers,
        currentRover: action.data.rovers[0],
        currentCamera: action.data.rovers[0].cameras[0]
      };
    }
    case "PROCEED": {
      if (state.stage >= 3) return state
      return {
        ...state, stage: state.stage + 1
      }
    }
    case "BACK": {
      if (state.stage <= 1) return state
      return {
        ...state, stage: state.stage - 1
      }
    }
    case "SET_ROVER": {

      return {
        ...state,
        currentRover: action.rover
      };
    }
    case "SET_CAMERA": {

      return {
        ...state,
        currentCamera: action.camera
      }
    }
    case "SET_SOL": {

      return {
        ...state,
        currentSol: action.sol
      }
    }
    case "PHOTOS_LOADED": {

      return {
        ...state,
        confirmation: true,
        photos: action.data.photos
      }
    }
    default:
      return state;
  }
};

export default reducer;