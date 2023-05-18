import axios from "axios";
const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};
const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
    //Need to add deployed link here when it's done
      ? "ga-tea-be-production.up.railway.app"
      : "http://127.0.0.1:9259",
});
api.interceptors.request.use(
  async function (config) {
    config.headers["Authorization"] = await getToken();
    return config;
  },
  function (error) {
    console.log("Request error: ", error);
    return Promise.reject(error);
  }
);
export default api;