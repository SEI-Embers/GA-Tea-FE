export const updateProfile = async (id, data) => {
    try {
      const response = await api.put(`/users/${id}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const createProfile = async (data) => {
    try {
      const response = await api.post('/users/', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const getProfile = async () => {
    try {
      const response = await api.get("/users");
      return response.data;
    } catch (error) {
      console.error(`Failed to get user - error: ${error}`);
      throw error;
    }
  };
  