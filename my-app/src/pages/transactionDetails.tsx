import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TransactionInfo from "../components/transactionInfo";
import Footer from "../components/footer";
import Header from "../components/header";
import { ACCOUNT_DETAILS_API } from "../constant";
import "./style.css";

export default function TransactionDetails(props: any) {
  //const navigate = useNavigate();
  const { customerId } = useParams();
  console.log(customerId);

  let accountInfo: any;
  const [accoiuntData, setAccountData] = useState(accountInfo);
  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch(`${ACCOUNT_DETAILS_API}${1}`).then(
        (response) => response.json()
      );
      console.log(response);
      setAccountData(response);
    };
    getApiData();
  }, []);
  return (
    <>
      <Header label="Transaction Details" />
      <div id="accountDetailsPage">
        {accoiuntData != null ? (
          <TransactionInfo accoiuntData={accoiuntData}></TransactionInfo>
        ) : (
          "Data not loaded"
        )}
      </div>
      <Footer />
    </>
  );
}
