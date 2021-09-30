import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import pealeap from "../assets/pealeap.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Container = styled.div`
  background: #f0fafa;
  padding: 50px 5%;
  div {
    display: flex;
    margin: 0;
    align-items: center;
    justify-content: space-between;
  }

  a {
    margin: 0;
    padding: 0;
    width: 20%;
  }

  h4 {
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    color: #838383;
  }
`;

const Logo = styled.img`
  width: 100%;
`;

const MenuIcon = styled.img`
  cursor: pointer;
`;

const Menu = styled.ul`
  width: 100%;
  height: 100vh;
  padding: 0;
  position: fixed;
  top: 0;
  background: white;
  margin: 0;
  text-align: left;
  overflow-y: scroll;

  li {
    font-size: 22px;
    font-weight: 500;
    font-family: Roboto;
    list-style-type: none;
    margin: 0;
    padding: 4% 5%;
    color: #838383;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .first-menu-item {
    padding-top: 6%;
    text-align: right;
    img {
      cursor: pointer;
    }
  }

  hr {
    border: 1px solid #d2d2d2;
  }

  .active {
    color: #489f9f;
  }
`;

const Header = ({ title }) => {
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Container>
        <div>
          <Link to="/">
            <Logo src={pealeap} alt="pealeap logo" />
          </Link>
          <MenuIcon src={menu} alt="menu" onClick={toggleModal} />
        </div>
        <h4>{title}</h4>
      </Container>
      <Menu hidden={modal}>
        <li className="first-menu-item">
          <img src={close} alt="close" onClick={toggleModal} />{" "}
        </li>
        <li className="active">
          <Link to="/overview">Overview</Link>
        </li>
        <li>
          <Link to="/transactions">Transactions</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <hr />
        </li>
        <li>
          <Link to="/">Sign Out</Link>
        </li>
      </Menu>
    </>
  );
};

export default Header;
