// import axios from "axios";
// const getToken = () => {
//   return new Promise((resolve) => {
//     resolve(`Bearer ${localStorage.getItem("token") || null}`);
//   });
// };
// const api = axios.create({
//   baseURL:
//     process.env.NODE_ENV === "production"
//     //Need to add deployed link here when it's done - it done
//       ? "https://ga-tea-be-production.up.railway.app/"
//       : "https://ga-tea-be-production.up.railway.app/",
// });
// api.interceptors.request.use(
//   async function (config) {
//     config.headers["Authorization"] = await getToken();
//     return config;
//   },
//   function (error) {
//     console.log("Request error: ", error);
//     return Promise.reject(error);
//   }
// );
// export default api;

import axios from "axios";

const api = axios.create({
  baseURL: "https://ga-tea-be-production.up.railway.app/",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `JWT ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;