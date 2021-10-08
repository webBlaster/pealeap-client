import React from "react";
import styled from "styled-components";
import clock from "../assets/clock.svg";

const Container = styled.div`
  margin: 0 auto;
  padding: 50px 5%;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  color: #838383;

  img {
    width: 30%;
    margin: 30px auto;
  }

  @media (min-width: 800px) {
    width: 30%;
    margin: 0 auto;
  }
`;

const Confirmation = () => {
  return (
    <>
      <Container>
        <p>This order has been marked as complete</p>
        <img src={clock} alt="clock" />
        <p>Share the transaction receipt from your bank with the seller</p>
      </Container>
    </>
  );
};

export default Confirmation;
