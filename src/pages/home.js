import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import google from "../assets/google.png";
import bottomcurve from "../assets/curvyshape.png";
import pealeap from "../assets/pealeap.png";
import play from "../assets/play.png";

const Container = styled.div`
  margin: 0;
  padding: 5%;
  text-align: center;

  h1 {
    color: #838383;
    font-weight: normal;
    font-size: 25px;
  }

  h6 {
    font-weight: 400;
    font-size: 15px;
    color: #489f9f;
  }

  p {
    font-size: 14px;
    font-weight: normal;
    color: #838383;
  }

  a {
    text-decoration: none;
  }
`;

const Logo = styled.img`
  width: 25%;
`;

const GoogleLogin = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  background: #489f9f;
  padding: 1% 5%;
  border-radius: 5px;
  font-size: 16px;
  color: white;

  p {
    color: white;
  }
`;

const Bottom = styled.img`
  width: 100%;
  z-index: -1;
  position: relative;
  margin-bottom: -20px;
`;

const Video = styled.div`
  border: 1px solid #838383;
  width: 80%;
  height: 220px;
  background: white;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: -100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <>
      <Container>
        <Logo src={pealeap} alt="pealeap logo" />
        <h1>
          Let your customers
          <br /> spread the word
        </h1>
        <p>
          When your customers pay through Pealeap, they automatically promote
          your business
        </p>
        <br />
        <h6>start selling with us</h6>
        <Link to="/subscribe">
          <GoogleLogin>
            <img src={google} alt="google logo" />
            <p>Sign in with Google</p>
          </GoogleLogin>
        </Link>
      </Container>
      <Video>
        <img src={play} alt="play button" />
      </Video>
      <Bottom src={bottomcurve} alt="bottom shape" />
    </>
  );
};

export default Home;
