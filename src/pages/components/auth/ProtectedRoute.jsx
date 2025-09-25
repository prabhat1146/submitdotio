import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserAuthContext } from "../../../context/AuthContextProvider";
import FullScreenLoader from "../FullScreenLoader";

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useUserAuthContext();
  console.log(isAuthenticated);

  if (loading) {
    return <FullScreenLoader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/pages/user/logout" replace />;
  }

  return <Outlet />; // Render nested routes
};

export default ProtectedRoute;
