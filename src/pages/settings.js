import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Submit from "../components/button.js";
import Header from "../components/header.js";
import BankList from "../components/banklist.js";
import { Container, CircleLogo } from "../styles/settings.js";
import {
  getBankList,
  getProfile,
  updatePicture,
  updateProfile,
} from "../actions/settings.js";

const Settings = () => {
  const dispatch = useDispatch();
  const fileRef = useRef();
  const imageRef = useRef();
  const imageSubmitRef = useRef();
  const [profile, setProfile] = useState({});
  //bank state
  const [banks, setBanks] = useState(null);

  let uuid = useSelector((state) => state.userAuth.uuid);

  const handlePicture = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("userId", uuid);
    if (profile?.picture?.name) {
      formData.append("picture", profile?.picture, profile?.picture?.name);
    }
    dispatch(updatePicture(dispatch, formData));
    console.log(formData);
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
      imageSubmitRef.current.click();
    }
  };

  const handleProfile = (event) => {
    event.preventDefault();
    console.log(profile);
    dispatch(updateProfile(dispatch, { ...profile, userId: uuid }));
  };

  const setProfileAttribute = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value });
  };

  useEffect(
    () => {
      getBankList(setBanks);
      getProfile(uuid, profile, setProfile);
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
      <Header title="" />
      <Container>
        <CircleLogo
          onClick={() => {
            fileRef.current.click();
          }}
        >
          <img alt="Logo" ref={imageRef} src={profile?.imageUrl} />
          <form
            className="imageForm"
            onSubmit={handlePicture}
            encType="multipart/form-data"
          >
            <input
              type="file"
              ref={fileRef}
              name="picture"
              accept="image/*"
              onChange={previewImage}
            />
            <input type="submit" value="submit" ref={imageSubmitRef} />
          </form>
        </CircleLogo>
        <form onSubmit={handleProfile}>
          <label>Merchants Name</label>
          <br />
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={profile?.name}
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
            value={profile?.phoneNumber}
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
            value={profile?.bankName}
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
            value={profile?.accountNumber}
            required
          />
          <br />
          <label>Account Name</label>
          <br />
          <input
            type="text"
            placeholder="Account Name"
            name="accountName"
            value={profile?.accountName}
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
