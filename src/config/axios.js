import axios from "axios";
import { camelizeKeys } from "humps";

const requester = axios.create({
  baseURL: "http://192.168.0.104:8000/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

requester.interceptors.response.use((response) => {
  if (
    response.data &&
    response.headers["content-type"] === "application/json"
  ) {
    response.data = camelizeKeys(response.data);
  }
  return response;
});

requester.interceptors.request.use((config) => {
  const newConfig = { ...config };
  if (newConfig.headers["Content-Type"] === "multipart/form-data")
    return newConfig;
  if (config.params) {
    newConfig.params = decamelizeKeys(config.params);
  }
  if (config.data) {
    newConfig.data = decamelizeKeys(config.data);
  }
  return newConfig;
});

export default requester;
