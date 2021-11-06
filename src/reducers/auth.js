import {
  LOGIN_USER_SUCCESSFUL,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
} from "../constants.js";

const initialState = {
  isAuthenticated: false,
  uuid: null,
  email: null,
  token: null,
  profile: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESSFUL:
      return Object.assign({}, state, {
        isAuthenticated: true,
        ...action.payload,
      });
    case LOGIN_USER_FAILED:
      return Object.assign({}, state, {
        isAuthenticated: false,
      });
    case LOGOUT_USER:
      return Object.assign({}, state, {
        isAuthenticated: false,
      });

    default:
      return state;
  }
};

export default authReducer;
