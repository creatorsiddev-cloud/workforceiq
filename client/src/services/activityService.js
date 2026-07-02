import axios from "axios";

const API_URL =
  `${import.meta.env.VITE_API_URL}/employees`;

// ==========================================
// Get Activities
// ==========================================

export const getActivities = async () => {

  const response = await axios.get(API_URL);

  return response.data;

};

// ==========================================
// Add Activity
// ==========================================

export const addActivity = async (activity) => {

  const response = await axios.post(
    API_URL,
    activity
  );

  return response.data;

};