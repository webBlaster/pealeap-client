import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 5%;
  text-align: center;
  color: #838383;

  h3 {
    color: #838383;
    margin: 0;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
  }

  p {
    font-size: 14px;
    font-weight: normal;
    color: #838383;
  }

  .info {
    font-size: 18px;
    font-family: Roboto;
    font-weight: normal;
    line-height: 21px;
    margin-top: 0 !important;
  }

  @media (min-width: 800px) {
    width: 30%;
    margin: 0 auto;
  }
`;

export const Logo = styled.img`
  width: 25%;
  margin-bottom: 50px;
`;

export const Button = styled.span`
  button {
    width: 100% !important;
    outline: none;
    margin: 0 auto;
    cursor: pointer;
    background: #489f9f;
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

export const AccountInfo = styled.div`
  width: 100%;
  margin: 0 auto;
  color: #bbbbbb;
  font-size: 16px;
  font-weight: bold;

  h4 {
    text-align: left;
    line-height: 0;
  }

  span {
    line-height: 0;
    text-align: left;

    p {
      margin-top: -2px;
    }
  }
  ul {
    width: 100%;
    padding: 0;
    color: #838383;
    li {
      height: 71px;
      margin: 10px 0;
      padding: 0 5%;
      border: 1px solid #e3e3e3;
      border-radius: 3px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
