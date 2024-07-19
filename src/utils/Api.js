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
        window.location.href = '/login';
      }
      throw new Error('Network response was not ok');
    }
  
    return response.json();
};

export default api;