import React from "react";
import styled from "styled-components";
import copy from "../assets/copy.svg";
import Submit from "../components/button.js";

const Container = styled.div`
  padding: 5%;
  margin: 0;
  color: #9a9a9a;
`;

const Heading = styled.h4`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`;

const CustomerNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      margin-right: 10px;
    }
  }
`;

const Message = styled.div`
  border: 1px solid #eeeeee;
  border-radius: 9px;
  padding: 5%;
  color: #9a9a9a;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;

  img {
    margin-left: 90% !important;
    margin: 0;
  }
`;

const Hint = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 60px;
  margin-top: 30px;
`;

const Lead = () => {
  return (
    <>
      <Container>
        <Heading>John Doe</Heading>
        <CustomerNumber>
          <p>Customer’s No.</p>
          <span>
            <h4>+234 7081104245</h4>
            <img src={copy} alt="copy" />
          </span>
        </CustomerNumber>
        <Message>
          <p>
            Hi, John Doe, your friend, Jane Doe (+2348054456643), just gifted
            you with a 5% discount, off your next order with us -
            CakesandCreams. You can contact Cakesandcreams on +2347093276654 to
            place an order; and use the Pealeap Code xxxxxx when checking out.
          </p>
          <img src={copy} alt="copy" />
        </Message>

        <Hint>Copy and Share this message with the Customer</Hint>

        <Submit text="Mark as Sent" />
      </Container>
    </>
  );
};

export default Lead;
