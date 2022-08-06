import React from "react";

export default function AccountFormInput(props: any) {
  return (
    <div className="input-container">
      <div className="label">{props.label}:</div>
      <div className="inputValue">{props.inputValue}</div>
    </div>
  );
}
