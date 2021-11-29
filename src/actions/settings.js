import {
  PAYSTACK_API_URL,
  API_URL,
  RESPONSE_SUCCESS_MESSAGE,
  UPDATE_PROFILE,
} from "../constants";

import { getAuthInfo, storeAuthInfo } from "../utils";

export const updateProfile = (
  dispatch,
  values,
  setLoading,
  isProfileUpdated
) => {
  return async (dispatch) => {
    let response = await fetch(API_URL + "/update.profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).catch((err) => {
      setLoading(false);
      console.log(err);
    });

    if (response) {
      setLoading(false);
      let result = await response.json();
      if (result.status === 200) {
        if (!isProfileUpdated) {
          //updateProfileStatus
          updateProfileStatus(dispatch, values.userId);
          console.log("i dey work boss");
        }
        dispatch({ type: RESPONSE_SUCCESS_MESSAGE, payload: result.message });
      }
    }
  };
};

export const updatePicture = (dispatch, formData) => {
  return async (dispatch) => {
    let response = await fetch(API_URL + "/update.picture", {
      method: "POST",
      body: formData,
    });

    if (response) {
      let result = await response.json();
      if (result.status) {
        dispatch({ type: RESPONSE_SUCCESS_MESSAGE, payload: result.message });
      }
    }
  };
};

export const getProfile = async (userId, profile, setProfile) => {
  let response = await fetch(API_URL + "/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId }),
  }).catch((err) => {
    console.log(err);
  });
  if (response) {
    let result = await response.json();
    setProfile({ ...profile, ...result.data });
  }
};

export const updateProfileStatus = async (dispatch, uuid) => {
  let response = await fetch(API_URL + "/update.profile.status", {
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
      let authInfo = getAuthInfo();
      storeAuthInfo({ ...authInfo, isProfileUpdated: true });
      dispatch({ type: UPDATE_PROFILE });
    }
  }
};

export const getBankList = async (setBanks) => {
  let response = await fetch(PAYSTACK_API_URL + "/bank", {
    method: "GET",
  }).catch((err) => {
    console.log(err);
  });
  if (response) {
    let result = await response.json();
    setBanks(result.data);
  }
};
