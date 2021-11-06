import {
  API_URL,
  LOGIN_USER_SUCCESSFUL,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
} from "../constants.js";

export const signIn = (dispatch, email, history) => {
  return async (dispatch) => {
    let response = await fetch(API_URL + "/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }).catch((err) => {
      console.log(err);
    });
    if (response) {
      let result = await response.json();
      if (result.status === 200) {
        dispatch({ type: LOGIN_USER_SUCCESSFUL, payload: result.data });
        history.push("/overview");
      } else {
        dispatch({ type: LOGIN_USER_FAILED });
      }
    }
  };
};

export const signOut = (dispatch, history) => {
  return (dispatch) => {
    dispatch({ type: LOGOUT_USER });
    history.push("/");
  };
};
