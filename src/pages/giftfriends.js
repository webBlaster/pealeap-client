import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import giftbox from "../assets/giftbox.svg";
import Submit from "../components/button.js";

const Container = styled.div`
  margin: 0;

  @media (min-width: 800px) {
    width: 30%;
    margin: 0 auto;
  }
`;

const GreenTop = styled.div`
  width: 100%;
  height: 280px;
  background: #f0fafa;
  display: flex;
  align-items: center;
`;

const GiftBox = styled.img`
  width: 20%;
  margin: 0 auto;
`;

const InfoCard = styled.div`
  width: 80%;
  background: white;
  margin-top: -70px !important;
  margin: 50px auto;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  padding: 5%;

  box-shadow: 0px 0px 21px rgba(154, 154, 154, 0.25);
  border-radius: 9px;

  h4 {
    color: #489f9f;
  }

  p {
    font-weight: 400;
  }
`;

const Form = styled.form`
  width: 90%;
  margin: 0 auto;

  .circle {
    width: 50px;
    background: white;
    margin-top: -60px;
    height: 50px;
    display: flex;
    align-items: center;
    border: 1px solid #e5e5e5;
    justify-content: center;
    border-radius: 60px;
  }

  .checkbox {
    font-size: 14px;
    margin-top: -40px;
    margin-bottom: 20px;
    padding: 5% 2% !important;
    display: block !important;
    border: 1px solid #e5e5e5;
    border-radius: 9px;
  }

  div {
    border: 1px solid #e5e5e5;
    border-radius: 9px;
    padding: 10% 5%;
    margin: 60px auto;
    color: #838383;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;

    input {
      width: 90%;
      height: 50px;
      padding: 0 5%;
      border-radius: 5px;
      border: 1px solid #bbbbbb;
      margin: 2% 0;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      input {
        width: 57% !important;
      }
    }
  }
`;

const Skip = styled.h1`
  width: 100%;
  margin: 30px auto;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;

  a {
    color: #838383;
  }
`;

const GiftFriends = () => {
  return (
    <>
      <Container>
        <GreenTop>
          <GiftBox src={giftbox} alt="gift box" />
        </GreenTop>
        <InfoCard>
          <h4>Gift two friend who may need this</h4>
          <p>
            <b>Gift 2 friends</b> with a 5% discount each from Cakesandcream.
            You would also get a 5% Discount on this order.
          </p>
        </InfoCard>
        <Form>
          <div>
            <p className="circle">1</p>
            <input type="text" placeholder="Friend’s Name" />
            <br />
            <span>
              <label>Whatsapp No.</label> <input type="mobile" />
            </span>
          </div>

          <div>
            <p className="circle">2</p>
            <input type="text" placeholder="Friend’s Name" />
            <br />
            <span>
              <label>Whatsapp No.</label> <input type="mobile" />
            </span>
          </div>

          <span className="checkbox">
            <input type="checkbox" id="agree" name="agree" value="yes" />
            <label htmlFor="agree">I agree to the Terms and Conditions</label>
          </span>

          <Submit text="Proceed" />
          <Skip>
            <Link to="/paywall">Pay NGN 19,500 instead</Link>
          </Skip>
        </Form>
      </Container>
    </>
  );
};

export default GiftFriends;
