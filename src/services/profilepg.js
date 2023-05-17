import axios from "axios";
import axios from "./apiConfig.js";

export const updateProfile = async (id, data) => {
    try {
      const response = await axios.put(`ga-tea-be-production.up.railway.app/users/${id}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const createProfile = async (data) => {
    try {
      const response = await axios.post('ga-tea-be-production.up.railway.app/users/', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const getProfile = async () => {
    try {
      const response = await axios.get("ga-tea-be-production.up.railway.app/users");
      return response.data;
    } catch (error) {
      console.error(`Failed to get user - error: ${error}`);
      throw error;
    }
  };
  