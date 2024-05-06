import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8989/api/v1/",
  timeout: 10000,
});

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
