import api from "./apiConfig.js";
import axios from "axios";

export const getPosts = async () => {
  try {
    const response = await api.get("/api/posts");
    return response.data;
  } catch (error) {
    console.error(`Failed to get posts - error: ${error}`);
    throw error;
  }
};

export const createPosts = async (data) => {
    try {
      const response = await api.post('/api/posts/', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const updatePosts = async (id, data) => {
    try {
      const response = await api.put(`ga-tea-be-production.up.railway.app/posts/${id}/`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const deletePosts = async (id) => {
    try {
      const response = await axios.delete(`ga-tea-be-production.up.railway.app/posts/${id}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

