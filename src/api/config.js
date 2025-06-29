// src/api/config.js

const API_BASE =
  import.meta.env.MODE === "production"
    ? "https://background-job.duckdns.org/api"
    : "https://background-job.duckdns.org/api";

export default API_BASE;
