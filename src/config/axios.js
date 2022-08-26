import axios from "axios";

import { camelizeKeys, decamelizeKeys } from "humps";
const requester = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    "Content-type": "application/json",
  },
});
// Axios middleware to convert all api responses to camelCase
requester.interceptors.response.use((response) => {
  console.log("response");
  if (
    response.data &&
    response.headers["content-type"] === "application/json"
  ) {
    response.data = camelizeKeys(response.data);
  }
  return response;
});

export default requester;
