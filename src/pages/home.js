import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import { GoogleLogin as GoogleLoginComponent } from "react-google-login";
import { signIn } from "../actions/auth";
import google from "../assets/google.png";
import invoice from "../assets/invoice.svg";
import pealeap from "../assets/pealeap.svg";

import {
  Container,
  Logo,
  GoogleLogin,
  SecondSection,
  Desktop,
  TopDestopSection,
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
          Send more than
          <br /> an Invoice
        </h1>
        <p>
          Scale with simple but powerful invoices that encourage your customers
          to help you grow
        </p>
        <br />

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
        <img src={invoice} alt="invoice" />
      </SecondSection>

      <Desktop>
        <Logo src={pealeap} alt="pealeap logo" />
        <TopDestopSection>
          <span>
            <h1>Send more than an Invoice</h1>
            <p className="describe">
              Scale with simple but powerful invoices that
              <br /> turn customers into patrons.
            </p>
            <br />

            <GoogleLogin onClick={clickGoogleLogin}>
              <img src={google} alt="google logo" />
              <p>Sign in with Google</p>
            </GoogleLogin>
          </span>

          <img className="invoice" src={invoice} alt="invoice" />
        </TopDestopSection>
      </Desktop>
    </>
  ) : (
    <Redirect to={"/overview"} />
  );
};

export default Home;
