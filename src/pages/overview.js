import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../components/header.js";
import RequestPayment from "../components/requestpayment.js";
import GreenStatsCard from "../components/greenstatscard.js";
import ProfileCard from "../components/profilecard.js";
import Leads from "../components/leads.js";
import { getAllLeads } from "../actions/leads.js";
import { getProfile } from "../actions/settings.js";
import { getInvoiceTotals } from "../actions/invoices.js";

const Container = styled.div`
  text-align: center;
  margin: 0;
  padding-top: 20px;
  margin-bottom: -100px !important;
  background: white;

  @media (min-width: 800px) {
    width: 30%;
    margin: 0 auto;
    padding-top: 0;
  }
`;

const HeaderContainer = styled.div`
  padding: 0;
  width: 100%;
  margin: 0;
  margin-bottom: -60px;
  overflow: hidden;

  @media (min-width: 800px) {
    margin: 0 auto;
    padding-top: 0;
    margin-bottom: 0;
  }
`;

const Overview = () => {
  let [leads, setLeads] = useState([]);
  const [stats, setStats] = useState({ paid: 0, pending: 0 });
  const [profile, setProfile] = useState({});

  let userUuid = useSelector((state) => state.userAuth.uuid);
  useEffect(
    () => {
      getInvoiceTotals(userUuid, setStats);
      getAllLeads(userUuid, leads, setLeads);
      getProfile(userUuid, profile, setProfile);
    },
    // eslint-disable-next-line
    []
  );
  let { paid, pending } = stats;
  return (
    <>
      <HeaderContainer>
        <Header title="Overview" />
      </HeaderContainer>
      <Container>
        <ProfileCard
          image={profile?.imageUrl}
          name={profile?.name}
          number={profile?.phoneNumber}
          edit={true}
        />
        <RequestPayment title="Request a payment" />
        <GreenStatsCard received={paid} pending={pending} />
        <Leads leads={leads} />
      </Container>
    </>
  );
};

export default Overview;
