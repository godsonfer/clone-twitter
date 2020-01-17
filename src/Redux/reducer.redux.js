import * as actionTypes from "./type.redux";
import { combineReducers } from "redux";

const initialState = {
  setUser: null
};

const setUser = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        setUser: action.payload
      };

    default:
      return state;
  }
};

const reducersRoot = combineReducers({
  currentUser: setUser
});

export default reducersRoot;
