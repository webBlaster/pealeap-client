import React, { useState, useEffect } from "react";
import { Redirect, Link, useHistory, useParams } from "react-router-dom";
import pealeap from "../assets/pealeap.png";
import {
  Container,
  Logo,
  Button,
  AccountInfo,
  DiscountInfo,
} from "../styles/paywall";

import { getInvoice, updateInvoicePaymentStatus } from "../actions/invoices";
import { getProfile } from "../actions/settings.js";
import { numberFormat } from "../utils";

const Paywall = () => {
  const [invoice, setInvoice] = useState({});
  const [profile, setProfile] = useState({});
  let { uuid, useruuid } = useParams();
  const history = useHistory();

  const handleClick = () => {
    updateInvoicePaymentStatus(uuid, history);
  };

  let discount =
    invoice?.discountLevel > 0
      ? invoice?.amount * (invoice?.discountLevel === 1 ? 5 / 100 : 10 / 100)
      : 0;

  useEffect(
    () => {
      getInvoice(uuid, setInvoice);
      getProfile(useruuid, profile, setProfile);
    },
    // eslint-disable-next-line
    []
  );

  return !invoice?.paid ? (
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
                <p>{numberFormat(invoice?.amount - discount)}</p>
              </span>
            </li>
          </ul>
        </AccountInfo>
        <DiscountInfo>
          <h4>You would save</h4>
          <p>{numberFormat(discount)}</p>
        </DiscountInfo>

        <Button onClick={handleClick}>I have made the transfer</Button>
      </Container>
    </>
  ) : (
    <Redirect to="/confirmation" />
  );
};

export default Paywall;
