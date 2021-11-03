import {
  PAYSTACK_API_URL,
  API_URL,
  RESPONSE_SUCCESS_MESSAGE,
} from "../constants";

export const updateProfile = (dispatch, values, setLoading) => {
  //
};

export const verifyAccountNumber = (dispatch) => {
  //
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

export const getProfile = (dispatch) => {
  //
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
