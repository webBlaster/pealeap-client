import React from "react";
import styled from "styled-components";
import copy from "../assets/copy.svg";
import { copyText } from "../utils.js";

const InvoiceLink = styled.div`
  display: flex;
  padding: 1px;
  padding-right: 1px;
  border-radius: 4px;
  background: #489f9f;
  width: 100%;
  color: white;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden !important;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;

  p {
    width: 40% !important;
    text-align: center !important;
  }
  span {
    font-size: 14px;
    color: #838383;
    background: white;
    width: 60% !important;
    padding: 2px 5% !important;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;

    p {
      height: 20px !important;
      width: 80% !important;
      overflow: hidden;
      align-items: center;
      text-align: left !important;
    }

    img {
      cursor: pointer;
    }
  }
`;

const CopyInvoice = ({ link, showCopied }) => {
  const handleCopy = () => {
    const url = `${link}`;
    copyText(url);
    showCopied();
  };
  return (
    <InvoiceLink>
      <p>Invoice Link</p>
      <span>
        <p>{link}</p> <img src={copy} alt="copy" onClick={handleCopy} />
      </span>
    </InvoiceLink>
  );
};

export default CopyInvoice;
