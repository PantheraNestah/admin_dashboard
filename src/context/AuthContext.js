import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isTokenExpired } from '../utils/checkTokenExpiry';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({});
  const navigate = useNavigate();

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
    navigate("/login");
  };
  useEffect(() => {
    const auth = sessionStorage.getItem("auth_state");
    if (auth) {
      const auth_state = JSON.parse(auth);
      if (!isTokenExpired(auth_state.expiry)) {
        setAuthState(auth_state);
        const interval = setInterval(() => {
          if (isTokenExpired(auth_state.expiry)) {
            logout();
          }
        }, 60000);
        return () => clearInterval(interval);
      } else {
        logout();
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
