import { API_URL, RESPONSE_SUCCESS_MESSAGE } from "../constants";

export const createInvoice = (dispatch, invoice, history) => {
  return async (dispatch) => {
    const response = await fetch(API_URL + "/create.invoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(invoice),
    });
    if (response) {
      const result = await response.json();
      console.log(result);
      if (result.status) {
        dispatch({ type: RESPONSE_SUCCESS_MESSAGE, payload: result.message });
        history.push("/overview");
      }
    }
  };
};
