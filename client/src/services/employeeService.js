import axios from "axios";

const API_URL =
  `${import.meta.env.VITE_API_URL}/employees`;

export const getEmployees = async () => {
  const response = await axios.get(API);
  return response.data;
};

export const getEmployeeById = async (id) => {
  const response = await axios.get(`${API}/${id}`);
  return response.data;
};

export const addEmployee = async (employee) => {
  const response = await axios.post(API, employee);
  return response.data;
};

export const updateEmployee = async (id, employee) => {
  const response = await axios.put(`${API}/${id}`, employee);
  return response.data;
};

export const deleteEmployee = async (id) => {
  const response = await axios.delete(`${API}/${id}`);
  return response.data;
};