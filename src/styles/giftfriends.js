import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  a {
    color: #838383;
  }

  a:hover {
    color: black;
    opacity: 0.8;
  }

  @media (min-width: 800px) {
    width: 30%;
    margin: 0 auto;
  }
`;

export const GreenTop = styled.div`
  width: 100%;
  height: 280px;
  background: #f0fafa;
  display: flex;
  align-items: center;
`;

export const GiftBox = styled.img`
  width: 20%;
  margin: 0 auto;
`;

export const InfoCard = styled.div`
  width: 80%;
  background: white;
  margin-top: -70px !important;
  margin: 50px auto;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  padding: 5%;

  box-shadow: 0px 0px 21px rgba(154, 154, 154, 0.25);
  border-radius: 9px;

  h4 {
    color: #489f9f;
  }

  p {
    font-weight: 400;
  }
`;

export const Form = styled.form`
  width: 90%;
  margin: 0 auto;

  .circle {
    width: 50px;
    background: white;
    margin-top: -60px;
    height: 50px;
    display: flex;
    align-items: center;
    border: 1px solid #e5e5e5;
    justify-content: center;
    border-radius: 60px;
  }

  .checkbox {
    font-size: 14px;
    margin-top: -40px;
    margin-bottom: 20px;
    padding: 5% 2% !important;
    display: block !important;
    border: 1px solid #e5e5e5;
    border-radius: 9px;
  }

  div {
    border: 1px solid #e5e5e5;
    border-radius: 9px;
    padding: 10% 5%;
    margin: 60px auto;
    color: #838383;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;

    input {
      width: 90%;
      height: 50px;
      padding: 0 5%;
      border-radius: 5px;
      border: 1px solid #bbbbbb;
      margin: 2% 0;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      input {
        width: 57% !important;
      }
    }
  }
`;

export const Skip = styled.h1`
  width: 100%;
  margin: 30px auto;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;

  a {
    color: #838383;
  }
`;
