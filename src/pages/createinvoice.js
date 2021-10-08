import React from "react";
import styled from "styled-components";
import forwardicon from "../assets/forwardicon.svg";

const Button = styled.button`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #489f9f;
  border: none;
  width: 100%;
  margin: 0 auto;
  padding: 3px 5%;
  border-radius: 5px;
  p {
    font-weight: bold;
    font-family: Poppins;
  }
`;

const Container = styled.div`
  padding: 5%;
  text-align: center;
  margin: 0;
  label {
    font-size: 15px;
  }

  form {
    font-size: 15px;
    font-weight: 400;
    color: #838383;
    font-family: Roboto;
    padding: 10% 5%;
    background: white;
    border-radius: 7px;
    margin: 0;

    input {
      margin: 5px 0;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .number {
        width: 50%;
      }
      .amount {
        width: 65%;
      }
    }
  }

  input {
    width: 90%;
    height: 50px;
    padding: 0 5%;
    border-radius: 5px;
    border: 1px solid #838383;
    margin: 5% 0;
  }

  textarea {
    width: 90%;
    padding: 5% 5% !important;
    border-radius: 5px;
    border: 1px solid #838383;
    height: 100px;
    margin: 5% 0;
  }

  @media (min-width: 800px) {
    width: 30%;
    margin: 0 auto;
  }
`;

const CreateInvoice = () => {
  return (
    <>
      <Container>
        <form>
          <h3>Create Invoice</h3>
          <input type="text" placeholder="Customer’s Name" required />
          <div>
            <label>Customer’s No.</label>
            <input
              type="text"
              placeholder="Phone Number"
              className="number"
              required
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="text"
              placeholder="Amount"
              className="amount"
              required
            />
          </div>
          <textarea required placeholder="Notes"></textarea>
          <br />
          <Button>
            <p>Save and Send</p>
            <img src={forwardicon} alt="go" />
          </Button>
        </form>
      </Container>
    </>
  );
};

export default CreateInvoice;
