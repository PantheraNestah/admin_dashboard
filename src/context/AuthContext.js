import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    isAuthenticated: false,
    user: null,
  });

  useEffect(() => {
    // Check for token in localStorage on initial load
    const token = localStorage.getItem('token');
    if (token) {
      setAuthState({
        token,
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
  };

  const logout = () => {
    localStorage.removeItem('token');
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
