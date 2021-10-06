import React from "react";
import styled from "styled-components";
import InvoiceCell from "../components/invoicecell.js";
import CopyInvoice from "../components/copyinvoice.js";
import greydot from "../assets/greydot.svg";

const Container = styled.div`
  padding: 5%;
  text-align: center;
  color: #838383;

  h1 {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 25%;
  }

  h5 {
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
  }
  .top {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
  }
  p {
    text-align: left;
  }
`;
const Note = styled.div`
  width: 90%;
  margin: 0 auto;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;

const PendingInvoice = () => {
  return (
    <>
      <Container>
        <div className="top">
          <h1>Invoice #452000</h1>
          <span>
            <img src={greydot} alt="grey dot" />
            <p>Pending</p>
          </span>
        </div>
        <InvoiceCell property="Amount" value="NGN 20,000" />
        <InvoiceCell property="Name" value="John Doe" />
        <InvoiceCell property="Customer’s No." value="+234 7081104245" />
        <Note>
          <p>Note</p>
          <p>
            Lorem ipseum dolor met calor Lorem ipseum dolor met calor Lorem
            ipseum dolor met calor Lorem ipseum dolor met calor{" "}
          </p>
        </Note>

        <CopyInvoice />
        <h5>Share this link with your customer</h5>
      </Container>
    </>
  );
};

export default PendingInvoice;
