import React from "react";

const BankList = ({ banks } = this.props) => {
  const list = !banks
    ? null
    : banks.map((bank) => {
        return (
          <option key={bank.code} value={[bank.name, bank.code]}>
            {bank.name}
          </option>
        );
      });

  return <>{list}</>;
};

export default BankList;
