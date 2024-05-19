import axios from "axios";


const getToken = () => {
  // Replace this with the actual code to get your token
  return localStorage.getItem("accessToken");
};

const request = axios.create({
  baseURL: "http://localhost:8989/api/v1/",
  timeout: 10000,
});

request.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers['Content-Type'] = 'application/json';
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
    config.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const get = async (path, options) => {
  const res = await request.get(path, options);
  return res.data;
};

const post = async (path, options) => {
  try {
    const res = await request.post(path, options);
    return res;
  } catch (error) {
    console.error("Error during POST request:", error);
    throw error;
  }
};

const patch = async (path, options) => {
  try {
    const res = await request.patch(path, options);
    return res;
  } catch (error) {
    console.error("Error during PATCH request:", error);
    throw error;
  }
};

export { get, post, patch };
