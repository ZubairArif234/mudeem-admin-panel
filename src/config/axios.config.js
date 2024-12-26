import axios from "axios";

export const baseURL = "https://mudeem-be-production.up.railway.app/";

// axios instance for json data
const custAxios = axios.create({
  withCredentials: true,
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default custAxios;
