import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InvoiceCell from "../components/invoicecell.js";
import CopyInvoice from "../components/copyinvoice.js";
import greydot from "../assets/greydot.svg";
import { Container, Note } from "../styles/pendinginvoice.js";
import { getInvoice } from "../actions/invoices.js";

const PendingInvoice = () => {
  const [invoice, setInvoice] = useState(null);
  let invoiceId = useParams().uuid;

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
          <span>
            <img src={greydot} alt="grey dot" />
            <p>Pending</p>
          </span>
        </div>
        <InvoiceCell property="Amount" value={"NGN" + invoice?.amount} />
        <InvoiceCell property="Name" value={invoice?.name} />
        <InvoiceCell
          property="Customer’s No."
          value={"+234 " + invoice?.customerNumber}
        />
        <Note>
          <p>Note</p>
          <p>{invoice?.note}</p>
        </Note>

        <CopyInvoice link={`pealeap.netlify.app/${invoiceId}`} />
        <h5>Share this link with your customer</h5>
      </Container>
    </>
  );
};

export default PendingInvoice;
