import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 0;
  background: #f0fafa;
`;

export const Container = styled.div`
  padding: 5%;
  text-align: center;
  background: #f0fafa;
  margin: 0;
  margin-top: -80px;
  label {
    text-align: left !important;
    font-size: 15px;
  }

  form {
    text-align: left;
    font-size: 15px;
    font-weight: 400;
    color: #838383;
    font-family: Roboto;
    padding: 10% 5%;
    background: white;
    border-radius: 7px;
    margin: 0;
    padding-top: 100px;
  }

  .imageForm {
    margin: 0 !important;
    padding: 0 !important;
  }

  input,
  #bankName {
    width: 90%;
    height: 50px;
    padding: 0 5%;
    border-radius: 5px;
    border: 1px solid #838383 !important;
    margin: 5% 0;
  }

  #bankName {
    width: 100%;
  }

  @media (min-width: 800px) {
    width: 30%;
    margin: 0 auto;
  }
`;

export const CircleLogo = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 200px;
  border: 1px solid #489f9f;
  margin: 0 auto;
  margin-bottom: -70px;
  background: white;
  color: #489f9f;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
  }
  input {
    display: none;
  }
`;

export const PayoutTitle = styled.span`
  display: flex;
  align-items: center;
  p {
    width: 37%;
  }
  div {
    width: 63%;
    margin: 0;
    padding: 0;

    hr {
      border: 1px solid #838383;
      opacity: 0.7;
    }
  }
`;
