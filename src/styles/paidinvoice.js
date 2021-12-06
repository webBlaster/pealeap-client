import styled from "styled-components";

export const Container = styled.div`
  padding: 5%;
  text-align: center;
  color: #838383;

  h1 {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 15%;
  }

  h5 {
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
  }
  .top {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
  }
  p {
    text-align: left;
  }

  @media (min-width: 800px) {
    width: 30%;
    margin: 0 auto;
  }
`;
export const Note = styled.div`
  width: 90%;
  margin: 0 auto;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  .note {
    white-space: pre-wrap;
  }
`;

export const Wrapper = styled.span`
  background: #f0fafa;
  width: 100% !important;
  border-radius: 4px;
  margin: 5% auto;
`;

export const Coupon = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 14px;
    margin-right: 4%;
    padding: 2%;
    background: #f0fafa;
  }
`;
