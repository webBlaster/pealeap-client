import React from "react";
import styled from "styled-components";
import Header from "../components/header.js";
import RequestPayment from "../components/requestpayment.js";
import GreenStatsCard from "../components/greenstatscard.js";
import profilecard from "../assets/profilecard.svg";
import greaterthan from "../assets/greaterthan.svg";

const Container = styled.div`
  text-align: center;
  margin: 0;
`;

const ProfileCard = styled.img`
  margin: 0;
  margin-top: -30px;
  background: white;
  width: 90%;
`;

const Leads = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 100px;
  color: #bbbbbb;
  font-size: 16px;
  font-weight: bold;

  h4 {
    text-align: left;
  }
  ul {
    width: 100%;
    padding: 0;
    list-style-type: circle;
    color: #838383;
    li {
      margin: 10px 0;
      padding: 0 5%;
      border: 1px solid #e3e3e3;
      border-radius: 5px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Overview = () => {
  return (
    <>
      <Container>
        <Header title="Overview" />
        <ProfileCard src={profilecard} alt="profile card" />
        <RequestPayment title="Request a payment" />
        <GreenStatsCard received={1000} pending={2000} />
        <Leads>
          <h4>Leads</h4>
          <ul>
            <li>
              <h4>John Doe</h4> <img src={greaterthan} alt="greater than" />
            </li>
            <li>
              <h4>John Doe</h4> <img src={greaterthan} alt="greater than" />
            </li>
          </ul>
        </Leads>
      </Container>
    </>
  );
};

export default Overview;
