import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../components/header.js";
import StatsCard from "../components/statscard.js";
import Invoices from "../components/invoices.js";
import RequestPayment from "../components/requestpayment.js";
import { getAllInvoice } from "../actions/invoices.js";

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
  const [invoices, setInvoices] = useState([]);
  let [paid, setPaid] = useState(false);
  let filteredInvoice = invoices.filter((item) => item.paid === paid);
  let userId = useSelector((state) => state.userAuth.uuid);
  const filterInvoice = () => {
    setPaid(!paid);
  };
  useEffect(
    () => {
      getAllInvoice(userId, invoices, setInvoices);
    },
    // eslint-disable-next-line
    []
  );
  return (
    <>
      <Header title="Transactions" />
      <Container>
        <RequestPayment title="Request a payment" />
        <StatsCard received={2000} pending={2000} />
        <Invoices invoices={filteredInvoice} filterInvoice={filterInvoice} />
      </Container>
    </>
  );
};

export default Transactions;
