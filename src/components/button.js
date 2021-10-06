import React from "react";
import styled from "styled-components";

const SubmitButton = styled.input`
  width: 100% !important;
  outline: none;
  margin: 0 auto;
  cursor: pointer;
  border: none !important;
  background: #489f9f;
  padding: 5% 5%;
  border-radius: 5px;
  font-size: 16px;
  color: white;
`;

const Submit = ({ text }) => {
  return (
    <>
      <SubmitButton value={text} type="submit" />
    </>
  );
};

export default Submit;
