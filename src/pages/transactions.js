import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/header.js";
import StatsCard from "../components/statscard.js";
import Invoices from "../components/invoices.js";
import RequestPayment from "../components/requestpayment.js";

const Container = styled.div`
  text-align: center;
  margin: 0;
  margin-top: -60px;
  background: white;
  padding-top: 8%;

  @media (min-width: 800px) {
    width: 30%;
    margin: 0 auto;
  }
`;

const Transactions = () => {
  const [invoices] = useState(null);
  return (
    <>
      <Header title="Transactions" />
      <Container>
        <RequestPayment title="Request a payment" />
        <StatsCard received={2000} pending={2000} />
        <Invoices invoices={invoices} />
      </Container>
    </>
  );
};

export default Transactions;
