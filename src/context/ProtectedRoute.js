import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate, Outlet } from "react-router-dom";
import { isTokenExpired } from "../utils/checkTokenExpiry";
import AuthContext from "./AuthContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const authState = useContext(AuthContext);
    const [is_authorized, setIs_authorized] = useState(authState.authState.isAuthenticated);
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (isTokenExpired(authState.authState.expiry)) {
            sessionStorage.removeItem("auth_state");
            navigate("/login");
        }
        setIs_authorized(authState.authState.isAuthenticated);
    }, [authState.authState]);
    return (
        (is_authorized) ? <Outlet /> : <Navigate to="/login" />
    );
  };
  
  export default ProtectedRoute;