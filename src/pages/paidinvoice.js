import React from "react";
import styled from "styled-components";
import InvoiceCell from "../components/invoicecell.js";
import greendot from "../assets/greendot.svg";

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
    width: 15%;
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

  @media (min-width: 800px) {
    width: 30%;
    margin: 0 auto;
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

const Wrapper = styled.span`
  background: #f0fafa;
  width: 100% !important;
  border-radius: 4px;
  margin: 5% auto;
`;

const Coupon = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 14px;
    margin-right: 4%;
    padding: 2%;
    background: #f0fafa;
  }
`;

const PaidInvoice = () => {
  return (
    <>
      <Container>
        <div className="top">
          <h1>Invoice #452000</h1>
          <span>
            <img src={greendot} alt="grey dot" />
            <p>Paid</p>
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

        <Coupon>
          <p>coupon applied</p>
          <p>2 friends referred</p>
        </Coupon>

        <Wrapper>
          <InvoiceCell property="New Amount" value="NGN 19,000" />
        </Wrapper>
      </Container>
    </>
  );
};

export default PaidInvoice;
