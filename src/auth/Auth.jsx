import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const Auth = ({ children }) => {
  return <Navigate to="/" replace state={{ from: location }} />;
};
