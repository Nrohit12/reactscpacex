import { SET_LAUNCHES, SET_ROCKETS, SELECTED_LAUNCH, REMOVE_SELECTED_LAUNCH } from "../constant";
import { combineReducers } from "redux";
const launchState = {
  launchData: [],
  loading:true,
};

const rocketState = {
  rocketData: [],
  loading: true
};

const selectedLaunchState = {
  selectedData: {}
} 

const launchesReducer = (state = launchState, action) => {
  switch (action.type) {
    case SET_LAUNCHES:
      return { ...state, launchData: action.payload, loading:false };
    default:
      return state;
  }
};

export const selectedLaunchReducer = (state = selectedLaunchState, { type, payload }) => {
  switch (type) {
    case SELECTED_LAUNCH:
      return { ...state, selectedData: payload };
    case REMOVE_SELECTED_LAUNCH:
      return {};
    default:
      return state;
  }
};

const rocketsReducer = (state = rocketState, action) => {
  switch (action.type) {
    case SET_ROCKETS:
      return { ...state, rocketData: action.payload, loading:false };
    default:
      return state;
  }
};


const reducers = combineReducers({
  allLaunches: launchesReducer,
  allRockets: rocketsReducer,
  selectedLaunch: selectedLaunchReducer
});
export default reducers;