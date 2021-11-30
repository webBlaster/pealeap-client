import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, Redirect } from "react-router-dom";
import pealeap from "../assets/pealeap.png";
import debitcard from "../assets/debitcard.svg";
import features from "../assets/features.svg";
import { Container, Logo, Button } from "../styles/subscribe";
import { PaystackButton } from "react-paystack";
import { PAYSTACK_PUBLIC_KEY } from "../constants";
import { subscribeUser } from "../actions/auth";

const Subscribe = () => {
  let dispatch = useDispatch();
  let history = useHistory();
  let email = useSelector((state) => state.userAuth.email);
  let uuid = useSelector((state) => state.userAuth.uuid);
  let isSubcribed = useSelector((state) => state.userAuth.subscribed);

  const handleSuccess = () => {
    //subscribe
    dispatch(subscribeUser(dispatch, history, uuid));
  };
  const componentProps = {
    email: email,
    amount: 10000 * 100,
    publicKey: PAYSTACK_PUBLIC_KEY,
    text: "Proceed",
    disabled: true,
    onSuccess: handleSuccess,
    onClose: null,
  };

  return !isSubcribed ? (
    <>
      <Container>
        <Link to="/">
          <Logo src={pealeap} alt="pealeap logo" />
        </Link>
        <p>You’re an Early Bird</p>
        <h3>
          Get access to new and existing
          <br /> features for NGN10,000 per year
        </h3>
        <h5>Subscribe to unlock all features</h5>

        <img className="svgs" src={features} alt="features" />
        <br />
        <img className="svgs" src={debitcard} alt="debit card" />

        <Button>
          <PaystackButton disabled={true} {...componentProps} />
        </Button>
      </Container>
    </>
  ) : (
    <Redirect to="/overview" />
  );
};

export default Subscribe;
