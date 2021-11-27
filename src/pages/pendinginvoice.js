import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InvoiceCell from "../components/invoicecell.js";
import CopyInvoice from "../components/copyinvoice.js";
import greydot from "../assets/greydot.svg";
import { Container, Note } from "../styles/pendinginvoice.js";
import { getInvoice } from "../actions/invoices.js";
import { numberFormat } from "../utils.js";

const PendingInvoice = () => {
  const [invoice, setInvoice] = useState(null);
  const [copied, setCopied] = useState(false);
  let invoiceId = useParams().uuid;

  const showCopied = () => {
    setCopied(true);
  };

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
          <h1>Invoice</h1>
          <span>
            <img src={greydot} alt="grey dot" />
            <p>Pending</p>
          </span>
        </div>
        <InvoiceCell property="Amount" value={numberFormat(invoice?.amount)} />
        <InvoiceCell property="Name" value={invoice?.name} />
        <InvoiceCell
          property="Customer’s No."
          value={"+234 " + invoice?.customerNumber}
        />
        <Note>
          <p>Note</p>
          <p>{invoice?.note}</p>
        </Note>

        <CopyInvoice link={window.location.href} showCopied={showCopied} />
        <h5>Share this link with your customer</h5>
        <h5>{copied ? "Copied!" : ""}</h5>
      </Container>
    </>
  );
};

export default PendingInvoice;
