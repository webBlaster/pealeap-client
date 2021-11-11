import { API_URL, RESPONSE_SUCCESS_MESSAGE } from "../constants";

export const createLeads = (dispatch, history, leads, invoice) => {
  return async (dispatch) => {
    const response = await fetch(API_URL + "/create.leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...leads,
        invoiceUuid: invoice?.uuid,
        userUuid: invoice?.UserUuid,
        friendsName: invoice?.name,
        friendsNumber: invoice?.customerNumber,
      }),
    });
    if (response) {
      const result = await response.json();
      if (result.status) {
        dispatch({ type: RESPONSE_SUCCESS_MESSAGE, payload: result.message });
        history.push(`/paywall/${invoice?.uuid}/${invoice?.UserUuid}`);
      }
    }
  };
};

export const getAllLeads = async (userUuid, leads, setLeads) => {
  const response = await fetch(API_URL + "/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userUuid }),
  });
  if (response) {
    const result = await response.json();
    if (result.status) {
      let freshLeadsArray = leads.concat(result.data);
      setLeads(freshLeadsArray);
    }
  }
};

export const getLead = async (leadId, setLead) => {
  const response = await fetch(API_URL + "/lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ uuid: leadId }),
  });
  if (response) {
    const result = await response.json();
    setLead(result.data);
  }
};
