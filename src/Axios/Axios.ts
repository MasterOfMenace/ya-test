import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://openlibrary.org/",
  timeout: 10000,
});
