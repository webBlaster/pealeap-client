import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import clock from "../assets/clock.svg";
import greenarrow from "../assets/greenarrow.svg";
import { numberFormat } from "../utils.js";

const Container = styled.div`
  background: #f0fafa;
  margin: 5% auto;
  padding: 20px 0;
  width: 90%;
  span {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    div {
      font-family: Roboto;
      color: #838383;
      line-height: 0.5;
      padding: 2% 5%;
      text-align: left;
      background: white;
      width: 35%;
      border-radius: 5px;

      h4 {
        font-size: 13px;
        font-weight: bold;
      }

      p {
        font-size: 16px;
        font-weight: normal;
      }
    }
  }

  .invoice {
    margin: 0;
    margin-top: 20px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;

    p {
      margin: 0;
      font-size: inherit;
      font-family: Poppins;
    }
    a {
      text-decoration: none;
      color: #489f9f;
    }
  }
`;

const GreenStatsCard = ({ received, pending }) => {
  return (
    <>
      <Container>
        <span>
          <div>
            <h4>Received</h4>
            <p>{numberFormat(received)}</p>
          </div>
          <div>
            <h4>Pending</h4>
            <p>{numberFormat(pending)}</p>
          </div>
        </span>
        <div className="invoice">
          <img src={clock} alt="clock icon" />
          <p>
            <Link to="/transactions">View all Invoices</Link>
          </p>
          <img src={greenarrow} alt="forward icon" />
        </div>
      </Container>
    </>
  );
};

export default GreenStatsCard;
