import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import copy from "../assets/copy.svg";
import Submit from "../components/button.js";
import {
  Container,
  Heading,
  CustomerNumber,
  Message,
  Hint,
} from "../styles/lead.js";

import { getLead, updateLeadToMarked } from "../actions/leads";
import { getProfile } from "../actions/settings.js";

const Lead = () => {
  const [lead, setLead] = useState(null);
  const [profile, setProfile] = useState();
  let uuid = useParams().uuid;
  let useruuid = useSelector((state) => state.userAuth.uuid);

  const handleClick = () => {
    updateLeadToMarked(uuid);
  };

  useEffect(
    () => {
      getLead(uuid, setLead);
      getProfile(useruuid, profile, setProfile);
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
      <Container>
        <Heading>{lead?.name}</Heading>
        <CustomerNumber>
          <p>Customer’s No.</p>
          <span>
            <h4>+234 {lead?.number}</h4>
            <img src={copy} alt="copy" />
          </span>
        </CustomerNumber>
        <Message>
          <p>
            {` Hi, ${lead?.name}, your friend, ${lead?.friendsName} (+234 ${lead?.friendsNumber}), just gifted
            you with a 5% discount, off your next order with us -
            ${profile?.name}. You can contact ${profile?.name} on +234${profile?.phoneNumber} to
            place an order; and use the Pealeap Code ${lead?.couponCode} when checking out.`}
          </p>
          <img src={copy} alt="copy" />
        </Message>

        <Hint>Copy and Share this message with the Customer</Hint>

        {!lead?.marked ? (
          <span onClick={handleClick}>
            <Submit text="Mark as Sent" />
          </span>
        ) : (
          <Submit text="Marked" />
        )}
      </Container>
    </>
  );
};

export default Lead;
