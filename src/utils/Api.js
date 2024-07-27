import React from "react";

const api = async (url, options = {}) => {
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
  
    const response = await fetch(url, { ...options, headers });
    if (!response.ok) {
      if (response.status === 401) {
        // Handle unauthorized response, e.g., redirect to login
        //window.location.href = '/login';
      }
      else if (response.status === 403) {
        // Handle forbidden response
        //window.location.href = '/login';
      }

      //handle internal server error
      if (response.status === 500) {
        console.log(await response.json());
        //window.location.href = '/login';
      }
      //throw new Error('Network response was not ok');
      //console.log(await response.json());
    }
  
    return (await response.json());
};

export default api;