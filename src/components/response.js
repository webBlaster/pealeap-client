import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RESPONSE_REMOVE_MESSAGE } from "../constants.js";
import styled from "styled-components";

const Alert = styled.div`
  position: fixed;
  top: 30px;
  right: 5%;
  width: 60%;
  height: 50px;
  border-radius: 5px;
  text-align: center;
  z-index: 1000;
  color: black;
`;

const ResponseAlert = () => {
  const [response, setResponse] = useState({ isResponseAvailable: false });

  let dispatch = useDispatch();
  let requestResponse = useSelector((state) => {
    return state.response;
  });

  useEffect(() => {
    if (requestResponse) {
      setResponse(requestResponse);
      if (!requestResponse.isResponseAvailable) {
        setTimeout(() => dispatch({ type: RESPONSE_REMOVE_MESSAGE }), 4000);
      }
    }
  }, [requestResponse, dispatch]);

  return (
    <Alert
      className="response-alert text-center"
      hidden={!response.isResponseAvailable}
      style={{
        backgroundColor: `${requestResponse.errors ? "red" : "green"}`,
      }}
    >
      <p>{requestResponse.message}</p>
    </Alert>
  );
};

export default ResponseAlert;
