import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user.isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
}
