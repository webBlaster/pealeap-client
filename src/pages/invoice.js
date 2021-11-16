import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory, Redirect } from "react-router-dom";
import InvoiceCell from "../components/invoicecell.js";
import Submit from "../components/button.js";
import profilecard from "../assets/profilecard.svg";
import { Container, Note, ProfileCard } from "../styles/invoice.js";
import { getInvoice, couponCode } from "../actions/invoices.js";

const Invoice = () => {
  const [invoice, setInvoice] = useState(null);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  let invoiceId = useParams().uuid;
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
          setLoading
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
      getInvoice(invoiceId, setInvoice);
    },
    // eslint-disable-next-line
    []
  );

  return !invoice?.paid ? (
    <>
      <Container>
        <div className="top">
          <h1>Invoice #452000</h1>
        </div>
        <ProfileCard src={profilecard} alt="profile card" />
        <InvoiceCell property="Amount" value={"NGN" + invoice?.amount} />
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
            history.push("/giftfriends/" + invoice?.uuid);
          }}
        >
          <input
            type="text"
            placeholder="Pealeap Code (if any)"
            onChange={handleInput}
            disabled={active}
          />
          <span>{loading ? "Loading..." : null}</span>
          <Submit text={"Pay NGN " + (invoice?.amount - discount)} />
        </form>
        <h4>Powered by Pealeap</h4>
      </Container>
    </>
  ) : (
    <Redirect to="/confirmation" />
  );
};

export default Invoice;
