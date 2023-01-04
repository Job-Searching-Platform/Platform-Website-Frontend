import axios from "axios";

export default axios.create({
  baseURL: "https://fyp-backend-api.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});