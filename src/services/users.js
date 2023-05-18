import api from "./apiConfig";
import jwtDecode from "jwt-decode";

export const signUp = async (credentials) => {
    try {
      const res = await api.post("/api/auth/register/", credentials);
      localStorage.setItem("token", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      const user = res.data.user;
      return user;
    } catch (error) {
      throw error;
    }
  };

  export const signIn = async (credentials) => {
    try {
      const res = await api.post("/api/auth/login/", credentials);
      localStorage.setItem("token", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      const user = res.data.user;
      return user;
    } catch (error) {
      throw error;
    }
  };
  
  // export const getToken = () => {
  //   return new Promise((resolve) => {
  //     resolve(`Token ${localStorage.getItem("knox") || null}`);
  //   });
  // };

  export const getUser = async (id) => {
    try {
      const resp = await api.get(`/api/users/${id}`);
      return resp.data;
    } catch (error) {
      throw error;
    }
  };

  // export const getUser = async (id) => {
  //   try {
  //     let token = await getToken();
  
  //     const headers = {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       Authorization: token,
  //     };
  
  //     const response = await api.get(`/api/users/${id}`, { headers }); 
  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // };


export const signOut = async () => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    return true;
  } catch (error) {
    throw error;
  }
};

// export const changePassword = async (passwords, user) => {
//   try {
//     const resp = await api.post("https://localhost:9295/c");
//     return resp.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const verifyUser = async () => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     const res = await api.get("https://localhost/9295/verify");
//     return res.data;
//   }
//   return false;
// };