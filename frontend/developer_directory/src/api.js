import axios from "axios";

const api = axios.create({
  baseURL: "/api/developers",   
});

export default api;