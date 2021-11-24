import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 5%;
  text-align: center;
  color: #838383;
  background: #f0fafa;

  h3 {
    color: #838383;
    margin: 0;
    font-family: Roboto;
    font-size: 21px;
    font-style: normal;
    font-weight: 900;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
  }

  p {
    font-size: 18px;
    font-weight: normal;
    color: #489f9f;
  }

  h5 {
    font-size: 18px;
  }

  .svgs {
    margin-bottom: 50px;
  }

  @media (min-width: 800px) {
    padding: 5% 35%;
    margin: 0 auto;
  }
`;

export const Logo = styled.img`
  width: 25%;

  @media (min-width: 800px) {
    margin: 30px 0;
  }
`;

export const Button = styled.span`
  button {
    width: 100% !important;
    outline: none;
    margin: 0 auto;
    cursor: pointer;
    background: #fbbb00;
    padding: 1% 5%;
    border-radius: 5px;
    font-size: 16px;
    color: white;
    height: 50px;
    border: none;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
  }
`;
