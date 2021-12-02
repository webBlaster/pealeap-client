import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 5%;
  text-align: center;

  h1 {
    color: #838383;
    font-weight: normal;
    font-size: 25px;
  }

  h6 {
    font-weight: 400;
    font-size: 15px;
    color: #489f9f;
  }

  p {
    font-size: 14px;
    font-weight: normal;
    color: #838383;
  }

  a {
    text-decoration: none;
  }
  .google {
    display: none !important;
  }

  @media (min-width: 800px) {
    display: none;
  }
`;

export const SecondSection = styled.span`
  img {
    width: 100%;
    margin: 0;
    margin-top: -60px;
  }
  @media (min-width: 800px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 136px;
  @media (min-width: 800px) {
    width: 166px;
    margin-left: 5%;
    margin-top: 5%;
  }
`;

export const GoogleLogin = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  background: #489f9f;
  padding: 1% 5%;
  border-radius: 5px;
  font-size: 16px;
  color: white;

  p {
    color: white !important;
  }

  @media (min-width: 800px) {
    margin: 0;
    width: 310px;
    padding: 0 5% !important;
    border-radius: 50px;
    justify-content: flex-start;

    p {
      margin-left: 5%;
    }
  }
`;

export const Desktop = styled.div`
  h1 {
    font-family: Poppins;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: left;
    color: #838383;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const TopDestopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  margin-top: -130px;
  padding: 0 5%;

  h6 {
    color: #489f9f;
    font-size: 15px;
    margin: 0;
    margin-top: -20px;
    margin-bottom: 3%;
  }

  .describe {
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: #838383;
  }

  a {
    text-decoration: none;
  }

  span {
    h1 {
      font-weight: 700;
    }
  }

  .invoice {
    width: 50%;
  }
`;
