// src/api/config.js

const API_BASE =
  import.meta.env.MODE === "production"
    ? "https://170.9.234.156.com/api"
    : "http://localhost:8000/api";

export default API_BASE;
