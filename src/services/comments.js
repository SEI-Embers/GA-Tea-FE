import api from "./apiConfig.js";

export const getComments = async () => {
  try {
    const response = await api.get("ga-tea-be-production.up.railway.app/comments/");
    return response.data;
  } catch (error) {
    console.error(`Failed to get posts - error: ${error}`);
    throw error;
  }
};

export const createComments = async (data) => {
    try {
      const response = await api.post('ga-tea-be-production.up.railway.app/comments/', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const updateComments = async (id, data) => {
    try {
      const response = await api.put(`ga-tea-be-production.up.railway.app/comments/${id}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const deleteComments = async (id) => {
    try {
      const response = await api.delete(`ga-tea-be-production.up.railway.app/comments/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
