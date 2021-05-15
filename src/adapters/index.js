import { API_URL } from './constants';

const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject({ error: response.status, message: response.message });
};

export const get = (endpoint) => {
  return fetch(`${API_URL}/${endpoint}`, {
    method: 'GET',
  }).then((res) => handleResponse(res));
};

export const post = (endpoint, data) => {
  return fetch(`${API_URL}/${endpoint}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...data }),
  }).then((res) => handleResponse(res));
};

export const put = (endpoint, data) => {
  return fetch(`${API_URL}/${endpoint}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...data }),
  }).then((res) => handleResponse(res));
};

export const remove = (endpoint) => {
  return fetch(`${API_URL}/${endpoint}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => handleResponse(res));
};
