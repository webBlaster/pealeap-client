import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import forwardicon from "../assets/forwardicon.svg";

const Button = styled.button`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #489f9f;
  border: none;
  width: 90%;
  margin: 0 auto;
  padding: 3px 5%;
  border-radius: 5px;
  p {
    font-weight: bold;
    font-family: Poppins;
  }
`;

const Container = styled.span`
  a {
    text-decoration: none;
  }
`;

const RequestPayment = ({ title }) => {
  return (
    <>
      <Container>
        <Link to="/create.invoice" className="link">
          <Button>
            <p>{title}</p>
            <img src={forwardicon} alt="go" />
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default RequestPayment;
