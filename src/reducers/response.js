import {
  RESPONSE_SUCCESS_MESSAGE,
  RESPONSE_ERROR_MESSAGE,
  RESPONSE_REMOVE_MESSAGE,
} from "../constants.js";

const initialState = {
  isResponseAvailable: false,
  errors: false,
  message: "",
};

const responseReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESPONSE_SUCCESS_MESSAGE:
      return {
        ...state,
        isResponseAvailable: true,
        message: action.payload,
        errors: false,
      };
    case RESPONSE_ERROR_MESSAGE:
      return {
        ...state,
        isResponseAvailable: true,
        errors: true,
        message: action.payload,
      };
    case RESPONSE_REMOVE_MESSAGE:
      return {
        ...state,
        isResponseAvailable: false,
        errors: false,
        message: "",
      };
    default:
      return state;
  }
};

export default responseReducer;
