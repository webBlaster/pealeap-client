import React from "react";
import styled from "styled-components";
import InvoiceCell from "../components/invoicecell.js";
import Submit from "../components/button.js";
import profilecard from "../assets/profilecard.svg";

const Container = styled.div`
  padding: 5%;
  text-align: center;
  color: #838383;

  h1 {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }

  h4 {
    font-family: Pacifico;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
  }

  .top {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
  }

  input {
    width: 90%;
    height: 50px;
    padding: 0 5%;
    border-radius: 5px;
    border: 1px solid #838383;
    margin: 5% 0;
  }
`;
const Note = styled.div`
  width: 90%;
  margin: 0 auto;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;

const ProfileCard = styled.img`
  margin: 0;
  background: white;
  width: 90%;
`;

const Invoice = () => {
  return (
    <>
      <Container>
        <div className="top">
          <h1>Invoice #452000</h1>
        </div>
        <ProfileCard src={profilecard} alt="profile card" />
        <InvoiceCell property="Amount" value="NGN 20,000" />
        <InvoiceCell property="Name" value="John Doe" />
        <InvoiceCell property="Customer’s No." value="+234 7081104245" />
        <Note>
          <p>Note</p>
          <p>
            Lorem ipseum dolor met calor Lorem ipseum dolor met calor Lorem
            ipseum dolor met calor Lorem ipseum dolor met calor{" "}
          </p>
        </Note>
        <form>
          <input type="text" placeholder="Pealeap Code (if any)" />
          <Submit text="Pay NGN 19,500" />
        </form>
        <h4>Powered by Pealeap</h4>
      </Container>
    </>
  );
};

export default Invoice;
