import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Profile = styled.div`
  padding: 4% 5%;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 10px auto !important;

  a,
  p {
    color: #838383;
  }
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;

    .details {
      display: block;
      width: 80%;
      margin: 0;
      p {
        margin: 0;
        line-height: 0.1;
        text-align: left;
        color: #838383;
        font-size: 14px;
      }
    }
  }

  img {
    width: 40px;
    height: 40px !important;
    border-radius: 100px;
    border: 1px solid #838383;
  }
  @media (min-width: 800px) {
    .details p {
      font-size: 14px !important;
    }
    span {
      width: 90% !important;
    }
  }
`;

const ProfileCard = ({ image, name, number, edit }) => {
  return (
    <>
      <Profile>
        <span>
          <img src={image} alt="" />
          <div className="details">
            <p>{name}</p>
            <br />
            <p>{number}</p>
          </div>
        </span>
        <p>{edit ? <Link to="/settings">edit</Link> : null}</p>
      </Profile>
    </>
  );
};

export default ProfileCard;
