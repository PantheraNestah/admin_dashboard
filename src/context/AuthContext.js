import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isTokenExpired } from '../utils/checkTokenExpiry';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({});

  const login = (token, auth_data) => {
    const newAuthState = {
      token: auth_data.token,
      expiry: auth_data.expiry,
      isAuthenticated: true,
      user: {},
    };
    setAuthState(newAuthState);
    sessionStorage.setItem("auth_state", JSON.stringify(newAuthState));
  };

  const logout = () => {
    setAuthState({
      token: null,
      expiry: null,
      isAuthenticated: false,
      user: null,
    });
    sessionStorage.removeItem("auth_state");
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
