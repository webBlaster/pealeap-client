import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Submit from "../components/button.js";
import Header from "../components/header.js";
import BankList from "../components/banklist.js";
import surogate from "../assets/clock.svg";
import { Container, CircleLogo } from "../styles/settings.js";
import { getBankList, updatePicture } from "../actions/settings.js";

const Settings = () => {
  const dispatch = useDispatch();
  const fileRef = useRef();
  const imageRef = useRef();
  const imageFormRef = useRef();
  const [profile, setProfile] = useState(null);
  //bank state
  const [banks, setBanks] = useState(null);

  let uuid = useSelector((state) => state.userAuth.uuid);

  const handlePicture = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("picture", profile.picture, profile.picture.name);
    formData.append("userId", uuid);
    dispatch(updatePicture(dispatch, formData));
    console.log("stuff");
  };

  const previewImage = (event) => {
    event.preventDefault();
    let reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        imageRef.current.src = reader.result;
        setProfile({ ...profile, picture: event.target.files[0] });
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
      imageFormRef.current.submit();
    }
  };

  const setProfileAttribute = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    getBankList(setBanks);
  }, []);

  return (
    <>
      <Header title="" />
      <Container>
        <CircleLogo
          onClick={() => {
            fileRef.current.click();
          }}
        >
          <img alt="Logo" ref={imageRef} src={surogate} />
          <form
            className="imageForm"
            ref={imageFormRef}
            onSubmit={handlePicture}
          >
            <input
              type="file"
              ref={fileRef}
              name="picture"
              accept="image/*"
              onChange={previewImage}
            />
            <input type="submit" value="submit" />
          </form>
        </CircleLogo>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(profile);
          }}
        >
          <label>Merchants Name</label>
          <br />
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={setProfileAttribute}
            required
          />
          <br />
          <label>Phone Number</label>
          <br />
          <input
            type="tel"
            pattern="[0-9]{11}"
            placeholder="080851*****"
            name="phoneNumber"
            onChange={setProfileAttribute}
            required
          />
          <br />
          <label htmlFor="bankName">Bank Name</label>
          <br />
          <select
            as="select"
            name="bankName"
            id="bankName"
            onChange={setProfileAttribute}
            required
          >
            <BankList banks={banks} />
          </select>
          <br />
          <label>Account Number</label>
          <br />
          <input
            type="number"
            placeholder="Account Number"
            name="accountNumber"
            onChange={setProfileAttribute}
            required
          />
          <br />
          <label>Account Name</label>
          <br />
          <input
            type="text"
            placeholder="Account Name"
            name="accountName"
            onChange={setProfileAttribute}
            required
          />
          <br />
          <Submit text="Save" />
        </form>
      </Container>
    </>
  );
};

export default Settings;
