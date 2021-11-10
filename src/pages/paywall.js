import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import pealeap from "../assets/pealeap.png";
import {
  Container,
  Logo,
  Button,
  AccountInfo,
  DiscountInfo,
} from "../styles/paywall";

import { getInvoice } from "../actions/invoices";
import { getProfile } from "../actions/settings.js";

const Paywall = () => {
  const [invoice, setInvoice] = useState({});
  const [profile, setProfile] = useState({});
  let { uuid, useruuid } = useParams();

  useEffect(
    () => {
      getInvoice(uuid, setInvoice);
      getProfile(useruuid, profile, setProfile);
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
      <Container>
        <Link to="/">
          <Logo src={pealeap} alt="pealeap logo" />
        </Link>
        <p className="info">pay by making a transfer into this account</p>
        <AccountInfo>
          <ul>
            <li>
              <span>
                <h4>Bank</h4>
                <br />
                <p>{profile?.bankName}</p>
              </span>
            </li>
            <li>
              <span>
                <h4>Account Number</h4>
                <br />
                <p>{profile?.accountNumber}</p>
              </span>
            </li>
            <li>
              <span>
                <h4>Seller's Name</h4>
                <br />
                <p>{profile?.name}</p>
              </span>
            </li>
            <li>
              <span>
                <h4>Amount</h4>
                <br />
                <p>NGN {invoice?.amount}</p>
              </span>
            </li>
          </ul>
        </AccountInfo>
        <DiscountInfo>
          <h4>You would save</h4>
          <p>NGN {invoice?.discountLevel === 0 ? "0" : ""}</p>
        </DiscountInfo>
        <Link to="/confirmation">
          <Button>I have made the transfer</Button>
        </Link>
      </Container>
    </>
  );
};

export default Paywall;
