import { Navigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import { Children } from "react";

function ProtectedRoute({ isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <Dashboard />;
}
export default ProtectedRoute;
