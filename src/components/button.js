import React from "react";
import styled from "styled-components";

const SubmitButton = styled.input`
  width: 100% !important;
  outline: none;
  margin: 0 auto;
  cursor: pointer;
  border: none !important;
  background: #489f9f;
  opacity: ${(props) => (props.off ? 0.4 : 1)};
  padding: 5% 5%;
  border-radius: 5px;
  font-size: 16px;
  color: white;

  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
`;

const Submit = ({ text, loading }) => {
  return (
    <>
      {!loading ? (
        <SubmitButton value={text} type="submit" />
      ) : (
        <SubmitButton type="submit" value="Loading..." off disabled />
      )}
    </>
  );
};

export default Submit;
