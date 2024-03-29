import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Link, useParams, useHistory } from "react-router-dom";
import giftbox from "../assets/giftbox.svg";
import Submit from "../components/button.js";
import {
  Container,
  GreenTop,
  GiftBox,
  InfoCard,
  Form,
  Skip,
} from "../styles/giftfriends.js";
import { getProfile } from "../actions/settings.js";
import { getInvoice } from "../actions/invoices.js";
import { createLeads } from "../actions/leads.js";
import { numberFormat } from "../utils";

const GiftFriends = () => {
  const [profile, setProfile] = useState({});
  const [invoice, setInvoice] = useState({});
  const [leads, setLeads] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();
  let uuid = useParams().uuid;
  let useruuid = useParams().useruuid;

  const handleLeadsSubmit = (event) => {
    event.preventDefault();
    dispatch(createLeads(dispatch, history, leads, invoice));
  };

  const updateAttribute = (event) => {
    setLeads({ ...leads, [event.target.name]: event.target.value });
    console.log(leads);
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
        <GreenTop>
          <GiftBox src={giftbox} alt="gift box" />
        </GreenTop>
        <InfoCard>
          <h4>Gift two friend who may need this</h4>
          <p>
            <b>Gift 2 friends</b> with a 5% discount each from {profile?.name}.
            You would also get a 5% Discount on this order.
          </p>
        </InfoCard>
        <Form onSubmit={handleLeadsSubmit}>
          <div>
            <p className="circle">1</p>
            <input
              onChange={updateAttribute}
              type="text"
              placeholder="Friend’s Name"
              name="firstLeadName"
              required
            />
            <br />
            <span>
              <label>Whatsapp No.</label>{" "}
              <input
                onChange={updateAttribute}
                type="tel"
                pattern="[0-9]{11}"
                placeholder="080851*****"
                name="firstLeadNumber"
                required
              />
            </span>
          </div>

          <div>
            <p className="circle">2</p>
            <input
              onChange={updateAttribute}
              type="text"
              placeholder="Friend’s Name"
              name="secondLeadName"
              required
            />
            <br />
            <span>
              <label>Whatsapp No.</label>{" "}
              <input
                onChange={updateAttribute}
                type="tel"
                pattern="[0-9]{11}"
                placeholder="080851*****"
                name="secondLeadNumber"
                required
              />
            </span>
          </div>

          <span className="checkbox">
            <input
              onChange={updateAttribute}
              type="checkbox"
              id="agree"
              name="agree"
              value="yes"
              required
            />
            <label htmlFor="agree">
              <Link to="/terms">I agree to the Terms and Conditions</Link>
            </label>
          </span>

          <Submit text="Proceed" />
          <Skip>
            <Link to={`/paywall/${uuid}/${invoice?.UserUuid}`}>
              Pay {numberFormat(invoice?.amount - discount)} instead
            </Link>
          </Skip>
        </Form>
      </Container>
    </>
  ) : (
    <Redirect to="/confirmation" />
  );
};

export default GiftFriends;
