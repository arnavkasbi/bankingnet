import { Formik, FormikValues } from "formik";
import { FormInput } from "../../components/FormInput/FormInput";
import * as Yup from "yup";
import { useEffect, useState } from "react";

type ITransactionProps = {};
export const Transactions: React.FC<ITransactionProps> = () => {
  const [accounts, setAccounts] = useState([] as any);

  const initialValues = {
    origin: "",
    destination: "",
    amount: 0,
    comment: "",
    date: Date.now(),
    agreement: false,
  };

  const validationSchema = {
    origin: Yup.number().required(),
  };

  const fetchAccounts = async () => {
    const accountList = await fetch(`http://localhost:3000/accounts`).then(
      (response) => response.json()
    );
    console.log(accountList);
    setAccounts(accountList);
  };
  const onSubmitHandler = async (values: FormikValues, actions: any) => {
    console.log(values, actions);
  };
  useEffect(() => {
    fetchAccounts();
  }, []);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmitHandler}
    >
      {(formik) => {
        const {
          touched,
          errors,
          handleChange,
          handleSubmit,
          setFieldValue,
          status,
          values,
        } = formik;
        return (
          <>
            <FormInput
              fieldName="origin"
              displayName="Origin Account"
              name="origin"
              error={
                !!errors["origin"] && !!touched["origin"]
                  ? errors["origin"]
                  : ""
              }
            />
            <FormInput
              fieldName="destination"
              displayName="Destination Account"
              name="destination"
              as="select"
              fieldOptions={[]}
              optionKey={accounts}
              error={
                !!errors["destination"] && !!touched["destination"]
                  ? errors["destination"]
                  : ""
              }
            />
            <FormInput
              fieldName="amount"
              displayName="Transfer Amount"
              name="amount"
              error={
                !!errors["amount"] && !!touched["amount"]
                  ? errors["amount"]
                  : ""
              }
            />
            <FormInput
              fieldName="comment"
              displayName="Comment"
              name="comment"
              error={
                !!errors["comment"] && !!touched["comment"]
                  ? errors["comment"]
                  : ""
              }
            />
            <FormInput
              fieldName="date"
              displayName="Date"
              name="date"
              error={errors["date"] && touched["date"] ? errors["date"] : ""}
            />
          </>
        );
      }}
    </Formik>
  );
};
