import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import pealeap from "../assets/pealeap.png";
import Submit from "../components/button.js";

const Container = styled.div`
  padding: 5%;
  text-align: center;
  background: #f0fafa;
  margin: 0;
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

const Logo = styled.img`
  width: 25%;
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
      <Container>
        <Link to="/">
          <Logo src={pealeap} alt="pealeap logo" />
        </Link>
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
