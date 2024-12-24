import axios from "axios";

export const baseURL = "https://ufa-be.up.railway.app/";

// axios instance for json data
const custAxios = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default custAxios;
