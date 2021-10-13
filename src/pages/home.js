import React from "react";
import { GoogleLogin as GoogleLoginComponent } from "react-google-login";
import styled from "styled-components";
import google from "../assets/google.png";
import bottomcurve from "../assets/curvyshape.png";
import desktopcurve from "../assets/desktopshape.svg";
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
  .google {
    display: none !important;
  }

  @media (min-width: 800px) {
    display: none;
  }
`;

const SecondSection = styled.span`
  @media (min-width: 800px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 25%;
  @media (min-width: 800px) {
    width: 7.5%;
    margin-left: 5%;
    margin-top: 5%;
  }
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
    color: white !important;
  }

  @media (min-width: 800px) {
    margin: 0;
    width: 310px;
    padding: 0 5% !important;
    border-radius: 50px;
    justify-content: flex-start;

    p {
      margin-left: 5%;
    }
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
  margin-bottom: -160px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 800px) {
    width: 527px;
    height: 460px;
  }
`;

const Desktop = styled.div`
  h1 {
    font-family: Poppins;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: left;
    color: #838383;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const TopDestopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  margin-bottom: -170px;
  padding: 5% 5%;

  h6 {
    color: #489f9f;
    font-size: 15px;
    margin: 0;
    margin-top: -20px;
    margin-bottom: 3%;
  }

  .describe {
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: #838383;
  }

  a {
    text-decoration: none;
  }

  span {
    margin-bottom: -200px;
  }
`;

const Pricing = styled.div`
  color: #489f9f;
  text-align: center;
  margin-top: -120px;
  font-family: Poppins;
  font-size: 19px;
  font-style: normal;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: center;

  h5 {
    margin: 0;
    font-family: Poppins;
    font-size: 19px;
    font-style: normal;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
  }

  p {
    margin: 0;
  }
`;

const Home = () => {
  let googleButton = document.querySelector(".google");
  const clickGoogleLogin = () => {
    googleButton.click();
  };
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

        <GoogleLogin onClick={clickGoogleLogin}>
          <img src={google} alt="google logo" />
          <p>Sign in with Google</p>
        </GoogleLogin>

        <GoogleLoginComponent
          className="google"
          clientId="13038225535-po09b2t18e5p9o9i79dimcgbjsuv9nfh.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={() => {
            console.log("sucessful login");
          }}
          onFailure={() => {
            console.log("failed login");
          }}
          cookiePolicy={"single_host_origin"}
        />
      </Container>
      <SecondSection>
        <Video>
          <img src={play} alt="play button" />
        </Video>
        <Bottom src={bottomcurve} alt="bottom shape" />
      </SecondSection>

      <Desktop>
        <Logo src={pealeap} alt="pealeap logo" />
        <TopDestopSection>
          <span>
            <h1>
              Let your customers spread <br />
              the word
            </h1>
            <p className="describe">
              When your customers pay through
              <br /> Pealeap, they automatically promote your
              <br /> business
            </p>
            <br />
            <h6>start selling with us</h6>

            <GoogleLogin onClick={clickGoogleLogin}>
              <img src={google} alt="google logo" />
              <p>Sign in with Google</p>
            </GoogleLogin>
          </span>

          <Video>
            <img src={play} alt="play button" />
          </Video>
        </TopDestopSection>
        <Bottom src={desktopcurve} alt="bottom shape" />
        <Pricing>
          <h5>Pricing:</h5>
          <p>2.5% Per Transaction</p>
        </Pricing>
      </Desktop>
    </>
  );
};

export default Home;
