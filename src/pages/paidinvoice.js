import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import InvoiceCell from "../components/invoicecell.js";
import greendot from "../assets/greendot.svg";
import { Container, Note, Wrapper, Coupon } from "../styles/paidinvoice.js";

import { getInvoice } from "../actions/invoices.js";

const PaidInvoice = () => {
  const [invoice, setInvoice] = useState(null);
  let invoiceId = useParams().uuid;
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
  return (
    <>
      <Container>
        <div className="top">
          <h1>Invoice #452000</h1>
          <span>
            <img src={greendot} alt="grey dot" />
            <p>Paid</p>
          </span>
        </div>
        <InvoiceCell property="Amount" value={`NGN ${invoice?.amount}`} />
        <InvoiceCell property="Name" value={`${invoice?.name}`} />
        <InvoiceCell
          property="Customer’s No."
          value={`+234 ${invoice?.customerNumber}`}
        />
        <Note>
          <p>Note</p>
          <p>{`${invoice?.note}`}</p>
        </Note>

        <Coupon>
          <p>{invoice?.discountLevel >= 1 ? "coupon applied" : null}</p>
          <p>{invoice?.discountLevel === 2 ? "2 friends referred" : null}</p>
        </Coupon>

        <Wrapper>
          <InvoiceCell
            property="New Amount"
            value={`NGN ${invoice?.amount - discount}`}
          />
        </Wrapper>
      </Container>
    </>
  );
};

export default PaidInvoice;
