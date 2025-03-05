import { useQuery } from "@tanstack/react-query";
import { formAxios } from "../../../config/axios.config";

export const useGetSettings = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["setting"],
    queryFn: async () => {
      const response = await formAxios.get("/setting");
      return response?.data?.data;
    },
    onError: (err) => {
      console.error("Error fetching settings:", err);
    },
  });

  return {
    settings: data,
    isLoading,
    isError,
    error,
    faviconUrl: data?.favIcon,
  };
}; 