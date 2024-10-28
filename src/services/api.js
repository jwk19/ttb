import { clearStorage } from '../utils/storage';

const BASE_URL = '/api';

const handleResponse = async (response) => {
  if (!response.ok) {
    if (response.status === 401) {
      clearStorage();
      window.location.href = '/login';
    }
    const error = await response.json();
    throw new Error(error.message || 'Network response was not ok');
  }
  return response.json();
};

const getHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };
};

export const api = {
  auth: {
    login: async (credentials) => {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      return handleResponse(response);
    }
  },
  user: {
    getProfile: async () => {
      const response = await fetch(`${BASE_URL}/user/profile`, {
        headers: getHeaders()
      });
      return handleResponse(response);
    }
  }
};