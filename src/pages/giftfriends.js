import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import giftbox from "../assets/giftbox.svg";
import Submit from "../components/button.js";
import {
  Container,
  GreenTop,
  GiftBox,
  InfoCard,
  Form,
  Skip,
} from "../styles/giftfriends.js";

const GiftFriends = () => {
  const history = useHistory();
  let uuid = useParams().uuid;
  return (
    <>
      <Container>
        <GreenTop>
          <GiftBox src={giftbox} alt="gift box" />
        </GreenTop>
        <InfoCard>
          <h4>Gift two friend who may need this</h4>
          <p>
            <b>Gift 2 friends</b> with a 5% discount each from Cakesandcream.
            You would also get a 5% Discount on this order.
          </p>
        </InfoCard>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            history.push("/paywall/" + uuid);
          }}
        >
          <div>
            <p className="circle">1</p>
            <input type="text" placeholder="Friend’s Name" required />
            <br />
            <span>
              <label>Whatsapp No.</label> <input type="mobile" required />
            </span>
          </div>

          <div>
            <p className="circle">2</p>
            <input type="text" placeholder="Friend’s Name" required />
            <br />
            <span>
              <label>Whatsapp No.</label> <input type="mobile" required />
            </span>
          </div>

          <span className="checkbox">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              value="yes"
              required
            />
            <label htmlFor="agree">I agree to the Terms and Conditions</label>
          </span>

          <Submit text="Proceed" />
          <Skip>
            <Link to={"/paywall/" + uuid}>Pay NGN 19,500 instead</Link>
          </Skip>
        </Form>
      </Container>
    </>
  );
};

export default GiftFriends;
