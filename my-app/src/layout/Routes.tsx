import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Login from '../pages/login';
import { LOGIN_ROUTE, TRANSACTION_ROUTE } from "./appRoutes";



type routesProps = Record<string, never>;

export const AppRoutes: React.FC<routesProps> = () => {
  return (
    <BrowserRouter> <Routes>
        {/* Default Route */}
        <Route path="/" element={<Login />} />

        {/* Page Routes */}
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={TRANSACTION_ROUTE} element={<Login />} />

        {/* Faulty Route */}
        <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace />} />
      </Routes></BrowserRouter>
  );
};
