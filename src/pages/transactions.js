import React from "react";
import styled from "styled-components";
import Header from "../components/header.js";
import StatsCard from "../components/statscard.js";
import RequestPayment from "../components/requestpayment.js";
import greaterthan from "../assets/greaterthan.svg";

const Container = styled.div`
  text-align: center;
  margin: 0;
  margin-top: -60px;
  background: white;
  padding-top: 8%;
`;

const Leads = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 100px;
  color: #bbbbbb;
  font-size: 16px;
  font-weight: bold;

  h4 {
    text-align: left;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .options {
      outline: none;
      margin: 0;
      width: 40%;
      height: 40px;
      padding: 0 10px;
      border-radius: 4px;
      color: #489f9f;
      border: 1px solid #eeeeee;
      background: white;
    }
  }
  ul {
    width: 100%;
    padding: 0;
    list-style-type: circle;
    color: #838383;
    li {
      margin: 10px 0;
      padding: 0 5%;
      border: 1px solid #e3e3e3;
      border-radius: 5px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Transactions = () => {
  return (
    <>
      <Header title="Transactions" />
      <Container>
        <RequestPayment />
        <StatsCard received={2000} pending={2000} />
        <Leads>
          <span>
            <h4>Transactions</h4>
            <select name="options" className="options">
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
            </select>
          </span>

          <ul>
            <li>
              <h4>John Doe</h4> <img src={greaterthan} alt="greater than" />
            </li>
            <li>
              <h4>John Doe</h4> <img src={greaterthan} alt="greater than" />
            </li>
          </ul>
        </Leads>
      </Container>
    </>
  );
};

export default Transactions;