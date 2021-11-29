import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory, Redirect } from "react-router-dom";
import InvoiceCell from "../components/invoicecell.js";
import Submit from "../components/button.js";
import ProfileCard from "../components/profilecard.js";
import { Container, Note } from "../styles/invoice.js";
import { getProfile } from "../actions/settings.js";
import { getInvoice, couponCode } from "../actions/invoices.js";
import { numberFormat } from "../utils.js";

const Invoice = () => {
  const [invoice, setInvoice] = useState(null);
  const [profile, setProfile] = useState({});
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  let invoiceId = useParams().uuid;
  let useruuid = invoice?.UserUuid;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleInput = (event) => {
    if (event.target.value.length === 5) {
      setActive(true);
      setLoading(true);
      dispatch(
        couponCode(
          { code: event.target.value, invoiceId },
          dispatch,
          setActive,
          setLoading,
          () => {
            getInvoice(invoiceId, setInvoice);
          }
        )
      );
    }
  };

  let discount =
    invoice?.discountLevel > 0
      ? invoice?.amount * (invoice?.discountLevel === 1 ? 5 / 100 : 10 / 100)
      : 0;
  useEffect(
    () => {
      if (useruuid === undefined) {
        getInvoice(invoiceId, setInvoice);
      }
      if (useruuid !== undefined) {
        getProfile(useruuid, profile, setProfile);
      }
    },
    // eslint-disable-next-line
    [useruuid]
  );

  return !invoice?.paid ? (
    <>
      <Container>
        <div className="top">
          <h1>Invoice</h1>
        </div>
        <span className="profile">
          <ProfileCard
            image={profile?.imageUrl}
            name={profile?.name}
            number={profile?.phoneNumber}
            edit={false}
          />
        </span>
        <InvoiceCell property="Amount" value={numberFormat(invoice?.amount)} />
        <InvoiceCell property="Name" value={invoice?.name} />
        <InvoiceCell
          property="Customer’s No."
          value={"+234" + invoice?.customerNumber}
        />
        <Note>
          <p>Note</p>
          <p>{invoice?.note}</p>
        </Note>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            history.push(`/giftfriends/${invoice?.uuid}/${invoice?.UserUuid}`);
          }}
        >
          <input
            type="text"
            placeholder="Bundans Code (if any)"
            onChange={handleInput}
            disabled={active}
          />
          <span>{loading ? "Loading..." : null}</span>
          <Submit text={"Pay " + numberFormat(invoice?.amount - discount)} />
        </form>
        <h4>Powered by Bundans</h4>
      </Container>
    </>
  ) : (
    <Redirect to="/confirmation" />
  );
};

export default Invoice;
