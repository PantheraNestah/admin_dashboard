import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(
    (localStorage.getItem("auth_state") !== null) ? JSON.parse(localStorage.getItem("auth_state")) : 
    {
      token: null,
      isAuthenticated: false,
      user: null,
    }
  );

  useEffect(() => {
    // Check for token in localStorage on initial load
    const auth_token = localStorage.getItem('token');
    if (auth_token) {
      setAuthState({
        token: auth_token,
        isAuthenticated: true,
        user: { /* You can fetch user info here if needed */ },
      });
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setAuthState({
      token,
      isAuthenticated: true,
      user: { /* You can fetch user info here if needed */ },
    });
    localStorage.setItem("auth_state", JSON.stringify(authState));
    //console.log("auth_state: ", JSON.parse(localStorage.getItem("auth_state")));
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem("auth_state");
    setAuthState({
      token: null,
      isAuthenticated: false,
      user: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
