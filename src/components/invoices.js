import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import greaterthan from "../assets/greaterthan.svg";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 100px;
  color: #bbbbbb;
  font-size: 16px;
  font-weight: bold;

  h4 {
    text-align: left;
  }

  a {
    text-decoration: none;
    color: #838383;
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

const Empty = styled.li`
  border: none;
  opacity: 0.6;
`;

const Invoices = ({ invoices, filterInvoice }) => {
  return (
    <>
      <Container>
        <span>
          <h4>Transactions</h4>
          <select name="options" className="options" onChange={filterInvoice}>
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
          </select>
        </span>

        <ul>
          {invoices.length > 0 ? (
            invoices.map((item) => (
              <Link
                to={
                  item.paid
                    ? "/paidinvoice/" + item.uuid
                    : "/pendinginvoice/" + item.uuid
                }
                key={item.uuid}
              >
                <li>
                  <h4>{item.name}</h4>{" "}
                  <img src={greaterthan} alt="greater than" />
                </li>
              </Link>
            ))
          ) : (
            <Empty>No Invoice available</Empty>
          )}
        </ul>
      </Container>
    </>
  );
};

export default Invoices;
