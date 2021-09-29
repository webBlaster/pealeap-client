import React from "react";
import styled from "styled-components";
import Header from "../components/header.js";
import profilecard from "../assets/profilecard.svg";
import forwardicon from "../assets/forwardicon.svg";

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
const Button = styled.button`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #489f9f;
  border: none;
  width: 90%;
  margin: 0 auto;
  padding: 0 5%;
  border-radius: 5px;
`;

const Overview = () => {
  return (
    <>
      <Container>
        <Header title="Overview" />
        <ProfileCard src={profilecard} alt="profile card" />
        <Button>
          <p>Request a payment</p>
          <img src={forwardicon} alt="go" />
        </Button>
      </Container>
    </>
  );
};

export default Overview;
