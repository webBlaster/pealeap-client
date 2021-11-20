import {
  API_URL,
  LOGIN_USER_SUCCESSFUL,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
  SUBSCRIBE_USER,
} from "../constants.js";
import { clearAuthInfo } from "../utils.js";

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

export const signOut = (dispatch) => {
  return (dispatch) => {
    dispatch({ type: LOGOUT_USER });
    clearAuthInfo();
  };
};

export const subscribeUser = (dispatch, history, uuid) => {
  return async (dispatch) => {
    let response = await fetch(API_URL + "/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uuid }),
    }).catch((err) => {
      console.log(err);
    });
    if (response) {
      let result = await response.json();
      if (result.status === 200) {
        dispatch({ type: SUBSCRIBE_USER });
        history.push("/create.invoice");
      }
    }
  };
};
