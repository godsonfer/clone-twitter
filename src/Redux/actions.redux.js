import * as actionTypes from "./type.redux";

export const setCurrentUser = user => ({
  type: actionTypes.SET_USER,
  payload: {
    currentUser: user
  }
});
