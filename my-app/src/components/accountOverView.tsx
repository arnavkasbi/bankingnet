import React from "react";
import { useNavigate } from "react-router-dom";

import AccountFormInput from "./acoountFormInput";

export default function AccountOverView(props: any) {
  const navigate = useNavigate();
  return (
    <div className="container">
      <AccountFormInput
        label="Name"
        inputValue={props.accoiuntData[0].accountName}
      />
      <AccountFormInput
        label="AccountNumber"
        inputValue={props.accoiuntData[0].accountNumber}
      />
      <AccountFormInput
        label="Balance"
        inputValue={props.accoiuntData[0].accountBalance}
      />
      <input
        type="button"
        value="Account Details"
        onClick={() =>
          navigate(
            `/account-info/customerId=${props.accoiuntData[0].customerId}`
          )
        }
        className="button-page"
      />
      <input type="button" value="Transfer" className="button-page" />
    </div>
  );
}
