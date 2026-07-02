import axios from "axios";
const API_URL = `${import.meta.env.VITE_API_URL}/departments`;

// ==========================================
// Get All Departments
// ==========================================

export const getDepartments = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// ==========================================
// Get Department By ID
// ==========================================

export const getDepartmentById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// ==========================================
// Add Department
// ==========================================

export const addDepartment = async (department) => {
  const response = await axios.post(API_URL, department);
  return response.data;
};

// ==========================================
// Update Department
// ==========================================

export const updateDepartment = async (id, department) => {
  const response = await axios.put(`${API_URL}/${id}`, department);
  return response.data;
};

// ==========================================
// Delete Department
// ==========================================

export const deleteDepartment = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};