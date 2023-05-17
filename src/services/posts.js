import api from "./apiConfig.js";

export const getPosts = async () => {
  try {
    const response = await api.get("/posts");
    return response.data;
  } catch (error) {
    console.error(`Failed to get posts - error: ${error}`);
    throw error;
  }
};

export const createPosts = async (data) => {
    try {
      const response = await api.post('/posts/', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const updatePosts = async (id, data) => {
    try {
      const response = await api.put(`/posts/${id}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const deletePosts = async (id) => {
    try {
      const response = await api.delete(`/posts/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

