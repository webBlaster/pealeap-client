import {
  API_URL,
  RESPONSE_SUCCESS_MESSAGE,
  RESPONSE_ERROR_MESSAGE,
} from "../constants";

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
      if (result.status) {
        dispatch({ type: RESPONSE_SUCCESS_MESSAGE, payload: result.message });
        history.push("/transactions");
      }
    }
  };
};

export const getAllInvoice = async (userId, invoices, setInvoices) => {
  const response = await fetch(API_URL + "/invoices", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId }),
  });
  if (response) {
    const result = await response.json();
    if (result.status) {
      let freshInvoiceArray = invoices.concat(result.data);
      setInvoices(freshInvoiceArray);
    }
  }
};

export const getInvoiceTotals = async (uuid, setStats) => {
  const response = await fetch(API_URL + "/invoice.totals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ uuid }),
  });
  if (response) {
    const result = await response.json();
    if (result.status) {
      let { paid, pending } = result.data;
      setStats({ paid, pending });
    }
  }
};

export const getInvoice = async (invoiceId, setInvoice) => {
  const response = await fetch(API_URL + "/invoice", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ uuid: invoiceId }),
  });
  if (response) {
    const result = await response.json();
    setInvoice(result.data);
  }
};

export const updateInvoicePaymentStatus = async (invoiceId, history) => {
  const response = await fetch(API_URL + "/invoice.update.payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ uuid: invoiceId }),
  });
  if (response) {
    const result = await response.json();
    if (result.status === 200) {
      history.push("/confirmation");
    }
  }
};

export const couponCode = (
  data,
  dispatch,
  setActive,
  setLoading,
  getInvoice
) => {
  return async (dispatch) => {
    const response = await fetch(API_URL + "/coupon.code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response) {
      setLoading(false);
      setActive(false);
      const result = await response.json();

      if (result?.status !== 200) {
        dispatch({ type: RESPONSE_ERROR_MESSAGE, payload: result.message });
        return;
      }
      dispatch({ type: RESPONSE_SUCCESS_MESSAGE, payload: result.message });
      getInvoice();
    }
  };
};
