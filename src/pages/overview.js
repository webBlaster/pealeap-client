import React from "react";
import styled from "styled-components";
import Header from "../components/header.js";
import profilecard from "../assets/profilecard.svg";

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

const Overview = () => {
  return (
    <>
      <Container>
        <Header title="Overview" />
        <ProfileCard src={profilecard} alt="profile card" />
      </Container>
    </>
  );
};

export default Overview;
