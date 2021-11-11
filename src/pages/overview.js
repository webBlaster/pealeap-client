import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../components/header.js";
import RequestPayment from "../components/requestpayment.js";
import GreenStatsCard from "../components/greenstatscard.js";
import profilecard from "../assets/profilecard.svg";
import Leads from "../components/leads.js";
import { getAllLeads } from "../actions/leads.js";

const Container = styled.div`
  text-align: center;
  margin: 0;

  @media (min-width: 800px) {
    width: 30%;
    margin: 0 auto;
  }
`;

const ProfileCard = styled.img`
  margin: 0;
  margin-top: -30px;
  background: white;
  width: 90%;
`;

const Overview = () => {
  let [leads, setLeads] = useState([]);
  let userUuid = useSelector((state) => state.userAuth.uuid);
  useEffect(
    () => {
      getAllLeads(userUuid, leads, setLeads);
    },
    // eslint-disable-next-line
    []
  );
  return (
    <>
      <Header title="Overview" />
      <Container>
        <ProfileCard src={profilecard} alt="profile card" />
        <RequestPayment title="Request a payment" />
        <GreenStatsCard received={1000} pending={2000} />
        <Leads leads={leads} />
      </Container>
    </>
  );
};

export default Overview;
