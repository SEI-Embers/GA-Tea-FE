import api from "./apiConfig.js";


export const getPosts = async () => {
  try {
    const response = await api.get("/api/posts/");
    return response.data;
  } catch (error) {
    console.error(`Failed to get posts - error: ${error}`);
    throw error;
  }
};

export const getPost = async (id) => {
  try {
    const response = await api.get(`/api/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to get posts - error: ${error}`);
    throw error;
  }
}

export const createPosts = async (data) => {
    try {
      const response = await api.post('/api/posts/', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const updatePost = async (id, data) => {
    try {
      const response = await api.put(`/api/posts/${id}/`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const deletePosts = async (id) => {
    try {
      const response = await api.delete(`/api/posts/${id}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

