import api from "./apiConfig.js";
import axios from "axios";

export const getPosts = async () => {
  try {
    const response = await axios.get("ga-tea-be-production.up.railway.app/posts/");
    return response.data;
  } catch (error) {
    console.error(`Failed to get posts - error: ${error}`);
    throw error;
  }
};

export const createPosts = async (data) => {
    try {
      const response = await axios.post('ga-tea-be-production.up.railway.app/posts/', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const updatePosts = async (id, data) => {
    try {
      const response = await axios.put(`ga-tea-be-production.up.railway.app/posts/${id}/`, data);
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

