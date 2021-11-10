import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import InvoiceCell from "../components/invoicecell.js";
import Submit from "../components/button.js";
import profilecard from "../assets/profilecard.svg";
import { Container, Note, ProfileCard } from "../styles/invoice.js";
import { getInvoice } from "../actions/invoices.js";

const Invoice = () => {
  const [invoice, setInvoice] = useState(null);
  let invoiceId = useParams().uuid;
  const history = useHistory();

  useEffect(
    () => {
      getInvoice(invoiceId, setInvoice);
    },
    // eslint-disable-next-line
    []
  );
  return (
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
          <input type="text" placeholder="Pealeap Code (if any)" />
          <Submit text={"Pay NGN " + invoice?.amount} />
        </form>
        <h4>Powered by Pealeap</h4>
      </Container>
    </>
  );
};

export default Invoice;
