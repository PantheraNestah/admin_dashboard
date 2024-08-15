import React from "react";

const api = async (url, options = {}) => {
  try {
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
          const error = new Error('Internal server error');
          //throw error;
          return ({ statusCode: 500, message: "Internal server error" });
        }
      }
      else {
        return (await response.json());
      }
    }
    else {
      return (await response.json());
    }
  } catch (error) {
    return ({ statusCode: 400, message: "Request Failed" });
  }
};

export default api;

export const save_file = async (url, options = {}) => {
    const headers = {
        'Content-Type': 'multipart/form-data',
        ...(options.headers || {}),
        ...(options.token ? { Authorization: `Bearer ${options.token}` } : {}),
    };
    let response = null;
    try {
      response = await fetch(url, { ...options, headers });
    } catch (error) {
      console.log(error);
      return (
        {
          statusCode: 500,
          message: "Internal server error"
        }
      )
    }
    if (!response.ok) {
        if (response.status === 500) {
            console.log(await response.json());
            return (await response.json());
        }
    }
    else {
        return (await response.json());
    }
};