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
  ul {
    width: 100%;
    padding: 0;
    list-style-type: circle;
    color: #838383;
    a {
      text-decoration: none;
      color: #838383;
    }
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

const Leads = ({ leads }) => {
  return (
    <>
      <Container>
        <h4>Leads</h4>
        <ul>
          {leads ? (
            leads.map((item) => (
              <Link to="/lead">
                <li key={item}>
                  <h4>John Doe</h4> <img src={greaterthan} alt="greater than" />
                </li>
              </Link>
            ))
          ) : (
            <Empty>No leads available</Empty>
          )}
        </ul>
      </Container>
    </>
  );
};

export default Leads;
