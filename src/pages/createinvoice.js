import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import forwardicon from "../assets/forwardicon.svg";
import { Container, Button } from "../styles/createinvoice";
import { createInvoice } from "../actions/invoices";

const CreateInvoice = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let uuid = useSelector((state) => state.userAuth.uuid);
  let isSubcribed = true;
  const [invoice, setInvoice] = useState({ userId: uuid });

  const handleAttribute = (event) => {
    setInvoice({ ...invoice, [event.target.name]: event.target.value });
    console.log(invoice);
  };

  const handleInvoice = (event) => {
    event.preventDefault();
    dispatch(createInvoice(dispatch, invoice, history));
  };

  return isSubcribed ? (
    <>
      <Container>
        <form onSubmit={handleInvoice}>
          <h3>Create Invoice</h3>
          <input
            type="text"
            placeholder="Customer’s Name"
            name="name"
            onChange={handleAttribute}
            required
          />
          <div>
            <label>Customer’s No.</label>
            <input
              type="tel"
              pattern="[0-9]{11}"
              placeholder="080851*****"
              className="number"
              name="customerNumber"
              onChange={handleAttribute}
              required
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="number"
              min={1}
              placeholder="Amount(Naira)"
              className="amount"
              name="amount"
              onChange={handleAttribute}
              required
            />
          </div>
          <textarea
            required
            placeholder="Notes"
            name="note"
            onChange={handleAttribute}
          ></textarea>
          <br />
          <Button>
            <p>Save and Send</p>
            <img src={forwardicon} alt="go" />
          </Button>
        </form>
      </Container>
    </>
  ) : (
    <Redirect to="/subscribe" />
  );
};

export default CreateInvoice;
