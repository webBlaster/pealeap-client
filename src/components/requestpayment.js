import React from "react";
import styled from "styled-components";
import forwardicon from "../assets/forwardicon.svg";

const Button = styled.button`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #489f9f;
  border: none;
  width: 90%;
  margin: 0 auto;
  padding: 3px 5%;
  border-radius: 5px;
  p {
    font-weight: bold;
    font-family: Poppins;
  }
`;

const RequestPayment = () => {
  return (
    <>
      <Button>
        <p>Request a payment</p>
        <img src={forwardicon} alt="go" />
      </Button>
    </>
  );
};

export default RequestPayment;
