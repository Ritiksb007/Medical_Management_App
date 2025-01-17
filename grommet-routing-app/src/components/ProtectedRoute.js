import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    // Redirect to login if not logged in
    return <Navigate to="/" />;
  }

  return children;  // Allow access to the protected route
};

export default ProtectedRoute;