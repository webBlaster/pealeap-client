import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import { GoogleLogin as GoogleLoginComponent } from "react-google-login";
import { signIn } from "../actions/auth";
import google from "../assets/google.png";
import bottomcurve from "../assets/curvyshape.png";
import desktopcurve from "../assets/desktopshape.svg";
import pealeap from "../assets/pealeap.png";
import play from "../assets/play.png";

import {
  Container,
  Logo,
  GoogleLogin,
  SecondSection,
  Video,
  Desktop,
  TopDestopSection,
  Bottom,
  Pricing,
} from "../styles/home.js";

const Home = () => {
  let history = useHistory();
  let dispatch = useDispatch();
  let isAuthenticated = useSelector((state) => state.userAuth.isAuthenticated);

  const clickGoogleLogin = () => {
    let googleButton = document.querySelector(".google");
    googleButton.click();
  };

  const handleLogin = async (response) => {
    let email = response.profileObj.email;
    dispatch(signIn(dispatch, email, history));
  };

  return !isAuthenticated ? (
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
          onSuccess={handleLogin}
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
  ) : (
    <Redirect to={"/overview"} />
  );
};

export default Home;
