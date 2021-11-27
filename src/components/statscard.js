import React from "react";
import styled from "styled-components";
import { numberFormat } from "../utils";

const Container = styled.div`
  background: white;
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
      border: 1px solid #bbbbbb;
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
`;

const StatsCard = ({ received, pending }) => {
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
      </Container>
    </>
  );
};

export default StatsCard;
