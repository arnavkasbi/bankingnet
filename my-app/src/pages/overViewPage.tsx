import React, { useEffect, useState } from "react";
import AccountInfo from "../components/accountInfo";
import AccountOverView from "../components/accountOverView";
import Footer from "../components/footer";
import Header from "../components/header";
import "./style.css";

export default function OverViewPage(props: any) {
  //const { customerId } = props.customerId;
  let accountInfo: any;
  const [accoiuntData, setAccountData] = useState(accountInfo);
  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch(
        `http://localhost:3000/accounts?customerId=${1}`
      ).then((response) => response.json());
      console.log(response);
      setAccountData(response);
    };
    getApiData();
  }, []);
  return (
    <>
      <Header label="Overview" />
      <div id="accountDetailsPage">
        {accoiuntData != null ? (
          <AccountOverView accoiuntData={accoiuntData}></AccountOverView>
        ) : (
          "Data not loaded"
        )}
      </div>
      <Footer />
    </>
  );
}
