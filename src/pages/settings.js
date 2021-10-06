import React from "react";
import styled from "styled-components";
import Submit from "../components/button.js";
import Header from "../components/header.js";

const Container = styled.div`
  padding: 5%;
  text-align: center;
  background: #f0fafa;
  margin: 0;
  margin-top: -80px;
  label {
    text-align: left !important;
    font-size: 15px;
  }

  form {
    text-align: left;
    font-size: 15px;
    font-weight: 400;
    color: #838383;
    font-family: Roboto;
    padding: 10% 5%;
    background: white;
    border-radius: 7px;
    margin: 0;
    padding-top: 100px;
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

const CircleLogo = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 200px;
  border: 1px solid #489f9f;
  margin: 0 auto;
  margin-bottom: -70px;
  background: white;
  color: #489f9f;
`;

const Settings = () => {
  return (
    <>
      <Header title="" />
      <Container>
        <CircleLogo>
          <p>Logo</p>
        </CircleLogo>
        <form>
          <label>Merchants Name</label>
          <br />
          <input type="text" placeholder="Name" required />
          <br />
          <label>Phone Number</label>
          <br />
          <input type="text" placeholder="Phone Number" required />
          <br />
          <label>Bank Name</label>
          <br />
          <input type="text" placeholder="Bank Name" required />
          <br />
          <label>Account Number</label>
          <br />
          <input type="text" placeholder="Account Number" required />
          <br />
          <label>Account Name</label>
          <br />
          <input type="text" placeholder="Account Name" required />
          <br />
          <Submit text="Save" />
        </form>
      </Container>
    </>
  );
};

export default Settings;
