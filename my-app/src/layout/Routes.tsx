import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login";
import AccountDetails from "../pages/accountDetails";
import OverViewPage from "../pages/overViewPage";
import TransactionDetails from "../pages/transactionDetails";
import {
  LOGIN_ROUTE,
  ACCOUNT_DETAILS,
  OVERVIEW_ACCOUNT,
  ACCOUNT_TRANSACTIONS,
} from "./appRoutes";

type routesProps = Record<string, never>;

export const AppRoutes: React.FC<routesProps> = () => {
  return (
    <BrowserRouter>
      {" "}
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Login />} />

        {/* Page Routes */}
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={ACCOUNT_DETAILS} element={<AccountDetails />} />
        <Route path={OVERVIEW_ACCOUNT} element={<OverViewPage />} />
        <Route path={ACCOUNT_TRANSACTIONS} element={<TransactionDetails />} />

        {/* Faulty Route */}
        <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace />} />
      </Routes>
    </BrowserRouter>
  );
};
