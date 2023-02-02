import axios from "axios";

export default axios.create({
  // baseURL: "https://fyp-backend-api.herokuapp.com/",
  baseURL: "http://localhost:8000/",
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});
