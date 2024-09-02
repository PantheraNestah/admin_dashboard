import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isTokenExpired } from '../utils/checkTokenExpiry';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(() => {
    const local_state = localStorage.getItem("local_auth");
    if (local_state) {
      const auth_state = JSON.parse(local_state);
      if (isTokenExpired(auth_state.expiry)) {
        localStorage.removeItem("local_auth");
        local_state = null;
      }
    }
    return local_state ? JSON.parse(local_state) : {};
  });
  const navigate = useNavigate();

  const login = (token, auth_data) => {
    const newAuthState = {
      token: auth_data.token,
      expiry: auth_data.expiry,
      isAuthenticated: true,
      user: auth_data.staff_data,
    };

    setAuthState(newAuthState);
    sessionStorage.setItem("auth_state", JSON.stringify(newAuthState));
    localStorage.setItem("local_auth", JSON.stringify(newAuthState));
  };
  const logout = () => {
    setAuthState({
      token: null,
      expiry: null,
      isAuthenticated: false,
      user: null,
    });
    localStorage.removeItem("local_auth");
    sessionStorage.removeItem("auth_state");
    navigate("/login");
  };
  useEffect(() => {
    //const auth = sessionStorage.getItem("auth_state");
    const auth = localStorage.getItem("local_auth");
    if (auth) {
      const auth_state = JSON.parse(auth);
      if (!isTokenExpired(auth_state.expiry)) {
        setAuthState(auth_state);
        const interval = setInterval(() => {
          if (isTokenExpired(auth_state.expiry)) {
            logout();
          }
        }, 120000);
        return () => clearInterval(interval);
      } else {
        localStorage.removeItem("local_auth");
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
