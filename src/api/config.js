// src/api/config.js

const API_BASE =
  import.meta.env.MODE === "production"
    ? "http://170.9.234.156/api"
    : "http://localhost:8000/api";

export default API_BASE;
