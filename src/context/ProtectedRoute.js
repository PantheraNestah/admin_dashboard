import React, { useContext } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import AuthContext from "./AuthContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { authState } = useContext(AuthContext);
  
    return (
        authState.isAuthenticated ? <Outlet /> : <Navigate to="/login" />
    );
  };
  
  export default ProtectedRoute;