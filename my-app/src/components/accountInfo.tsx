import React from "react";
import AccountFormInput from "./acoountFormInput";
import { useNavigate } from "react-router-dom";

export default function AccountInfo(props: any) {
  const navigate = useNavigate();
  return (
    <div className="container">
      <AccountFormInput
        label="Cusomer Id"
        inputValue={props.accoiuntData[0].customerId}
      />
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
        value="Back"
        onClick={() => navigate("/overview")}
        className="button-page"
      />
    </div>
  );
}
