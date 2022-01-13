import {SET_LAUNCHES, SET_ROCKETS, SELECTED_LAUNCH, REMOVE_SELECTED_LAUNCH} from '../constant'
import {api} from "../../constants/api"

export const setLaunches = (url) => async (dispatch) => {
  const response = await api.get(url);
  dispatch({ type: SET_LAUNCHES, payload: response.data });
};

export const selectedLaunch = (item) => {
  return {
    type: SELECTED_LAUNCH,
    payload: item,
  };
};

export const removeSelectedLaunch = () => {
  return {
    type: REMOVE_SELECTED_LAUNCH,
  };
};

export const setRockets = (url) => async (dispatch) => {
  const response = await api.get(url);
  dispatch({ type: SET_ROCKETS, payload: response.data });
};