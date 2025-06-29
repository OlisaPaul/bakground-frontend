// src/api/config.js

const API_BASE =
  import.meta.env.MODE === "production"
    ? "https://170.9.234.156/api"
    : "http://170.9.234.156/api";

export default API_BASE;
