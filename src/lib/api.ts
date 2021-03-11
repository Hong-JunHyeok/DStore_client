import axios from 'axios';
import { SERVER } from 'config/config.json';

export const getRequest = async (url: string, data?: Object) => {
  const response = await axios.get(`${SERVER}${url}`, {
    data,
  });
  return response.data;
};

export const postRequest = async (url: string, data?: Object) => {
  const response = await axios.post(`${SERVER}${url}`, {
    data,
  });
  return response.data;
};

export const deleteRequest = async (url: string, data?: Object) => {
  const response = await axios.delete(`${SERVER}${url}`, {
    data,
  });
  return response.data;
};

export const putRequest = async (url: string, data?: Object) => {
  const response = await axios.put(`${SERVER}${url}`, {
    data,
  });
  return response.data;
};
