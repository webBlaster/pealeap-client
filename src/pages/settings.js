import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Submit from "../components/button.js";
import Header from "../components/header.js";
import BankList from "../components/banklist.js";
import { MainContainer, Container, CircleLogo } from "../styles/settings.js";
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
  const [loading, setLoading] = useState(false);
  //bank state
  const [banks, setBanks] = useState(null);

  let uuid = useSelector((state) => state.userAuth.uuid);
  let isProfileUpdated = useSelector(
    (state) => state.userAuth.isProfileUpdated
  );

  const handlePicture = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("userId", uuid);
    if (profile?.picture?.name) {
      formData.append("picture", profile?.picture, profile?.picture?.name);
    }
    dispatch(updatePicture(dispatch, formData));
  };

  const previewImage = (event) => {
    event.preventDefault();
    let reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        imageRef.current.src = reader.result;
        setProfile({ ...profile, picture: event.target.files[0] });
        setTimeout(() => {
          imageSubmitRef.current.click();
        }, 2000);
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleProfile = (event) => {
    event.preventDefault();
    if (!profile?.bankName.includes(",")) {
      let bankName = `${profile?.bankName},${
        banks.filter((item) => {
          return item.name === profile?.bankName;
        })[0]?.code
      }`;
      setLoading(true);
      dispatch(
        updateProfile(
          dispatch,
          { ...profile, userId: uuid, bankName: bankName },
          setLoading,
          isProfileUpdated
        )
      );
      return;
    }
    setLoading(true);
    dispatch(
      updateProfile(
        dispatch,
        { ...profile, userId: uuid },
        setLoading,
        isProfileUpdated
      )
    );
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
      <MainContainer>
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
              onChange={setProfileAttribute}
              required
            >
              <BankList banks={banks} />
              <option
                selected
                defaultValue={
                  banks?.length > 0
                    ? [
                        profile?.bankName,
                        banks.filter((item) => {
                          return item.name === profile?.bankName;
                        })[0]?.code,
                      ]
                    : ""
                }
              >
                {profile?.bankName}
              </option>
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
            <Submit text="Save" loading={loading} />
          </form>
        </Container>
      </MainContainer>
    </>
  );
};

export default Settings;
