import React from "react";
import AccountFormInput from "./acoountFormInput";
import { useNavigate } from "react-router-dom";

export default function TransactionInfo(props: any) {
  const navigate = useNavigate();
  console.log(props.accoiuntData[0].txns[0]);
  return (
    <div className="container">
      <AccountFormInput
        label="Transaction Type"
        inputValue={props.accoiuntData[0].txns[0].type}
      />
      <AccountFormInput
        label="Payer"
        inputValue={props.accoiuntData[0].txns[0].player2}
      />
      <AccountFormInput
        label="Amount"
        inputValue={props.accoiuntData[0].txns[0].amount}
      />
      <AccountFormInput
        label="Comments"
        inputValue={props.accoiuntData[0].txns[0].comment}
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
