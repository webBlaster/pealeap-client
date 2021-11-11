import styled from "styled-components";

export const Container = styled.div`
  padding: 5%;
  margin: 0;
  color: #9a9a9a;

  img {
    cursor: pointer;
  }

  @media (min-width: 800px) {
    width: 30%;
    margin: 0 auto;
  }
`;

export const Heading = styled.h4`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`;

export const CustomerNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      margin-right: 10px;
    }
  }
`;

export const Message = styled.div`
  border: 1px solid #eeeeee;
  border-radius: 9px;
  padding: 5%;
  color: #9a9a9a;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;

  img {
    margin-left: 90% !important;
    margin: 0;
  }
`;

export const Hint = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 60px;
  margin-top: 30px;
`;
