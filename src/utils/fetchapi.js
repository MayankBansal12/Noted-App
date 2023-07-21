import axios from "axios";

// Create an instance of axios with the common headers
const fetchapi = axios.create({
  baseURL: "http://localhost:8000", // Set the base URL for the API
  headers: {
    "Content-Type": "application/json",
    // Get the token from local storage and include it in the "Authorization" header
    Authorization: `${localStorage.getItem("token")}`,
  },
});

export default fetchapi;
