import api from "./apiConfig.js";

export const getComments = async () => {
  try {
    const response = await api.get("/comments/");
    return response.data;
  } catch (error) {
    console.error(`Failed to get posts - error: ${error}`);
    throw error;
  }
};

export const createComments = async (data) => {
    try {
      const response = await api.post('/comments/', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const updateComments = async (id, data) => {
    try {
      const response = await api.put(`/comments/${id}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const deleteComments = async (id) => {
    try {
      const response = await api.delete(`/comments/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
