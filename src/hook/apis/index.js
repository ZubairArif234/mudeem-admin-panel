import custAxios from "../../config/axios.config";

export const getFetcher = (url) => custAxios.get(url).then((res) => res.data);
export const postFetcher = (url) => custAxios.post(url).then((res) => res.data);
export const putFetcher = (url) => custAxios.put(url).then((res) => res.data);
export const deleteFetcher = (url) =>
  custAxios.delete(url).then((res) => res.data);
