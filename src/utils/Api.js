import React from "react";

const api = async (url, options = {}) => {
    var response = null;
    const headers = {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
      ...(options.token ? { Authorization: `Bearer ${options.token}` } : {}),
    };

    if (options.token != null) {
      response = await fetch(url, { ...options, headers });
    }

    if (response != null) {
      if (!response.ok) {
        //console.log(await response.json());
        if (response.status === 401) {
          // Handle unauthorized response, e.g., redirect to login
          window.location.href = '/login';
          return;
        }
        else if (response.status === 403) {
          // Handle forbidden response
          window.location.href = '/login';
          return;
        }
        //handle internal server error
        if (response.status === 500) {
          console.log(await response.json());
          return (await response.json());
        }
      }
      else {
        return (await response.json());
      }
    }
    else {
      return (await response.json());
    }
};

export default api;