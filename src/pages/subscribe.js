import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import pealeap from "../assets/pealeap.png";
import { Container, Logo, Button, AccountInfo } from "../styles/subscribe";
import { PaystackButton } from "react-paystack";
import { PAYSTACK_PUBLIC_KEY } from "../constants";
import { subscribeUser } from "../actions/auth";

const Subscribe = () => {
  let dispatch = useDispatch();
  let history = useHistory();
  let email = useSelector((state) => state.userAuth.email);
  let uuid = useSelector((state) => state.userAuth.uuid);

  const handleSuccess = () => {
    //subscribe
    dispatch(subscribeUser(dispatch, history, uuid));
  };
  const componentProps = {
    email: email,
    amount: 10000 * 100,
    publicKey: PAYSTACK_PUBLIC_KEY,
    text: "SUBSCRIBE",
    disabled: true,
    // onSuccess: () => handleSuccess(),
    onClose: handleSuccess,
  };

  return (
    <>
      <Container>
        <Link to="/">
          <Logo src={pealeap} alt="pealeap logo" />
        </Link>
        <h3>Pealeap costs NGN 10,000/year</h3>
        <p className="info">
          Make a payment into this
          <br /> account to start using Pealeap
        </p>
        <AccountInfo>
          <ul>
            <li>
              <span>
                <h4>Bank</h4>
                <br />
                <p>Wema Bank</p>
              </span>
            </li>
            <li>
              <span>
                <h4>Account Number</h4>
                <br />
                <p>09122232323</p>
              </span>
            </li>
            <li>
              <span>
                <h4>Seller's Name</h4>
                <br />
                <p>Pealeap</p>
              </span>
            </li>
            <li>
              <span>
                <h4>Amount</h4>
                <br />
                <p>NGN 10,000</p>
              </span>
            </li>
          </ul>
        </AccountInfo>

        <Button>
          <PaystackButton disabled={true} {...componentProps} />
        </Button>
      </Container>
    </>
  );
};

export default Subscribe;
