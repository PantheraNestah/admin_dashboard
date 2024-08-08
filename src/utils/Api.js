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
      else {
        return (await response.json());
      }
    }
    else {
      return response;
    }
};

export default api;