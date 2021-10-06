import React from "react";
import styled from "styled-components";

const Cell = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;

  h4 {
    font-weight: 700 !important;
  }
`;

const InvoiceCell = ({ property, value }) => {
  return (
    <>
      <Cell>
        <p>{property}</p>
        <h4>{value}</h4>
      </Cell>
    </>
  );
};

export default InvoiceCell;
