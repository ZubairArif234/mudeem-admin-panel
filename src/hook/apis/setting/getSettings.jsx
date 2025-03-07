import { useQuery } from "@tanstack/react-query";
import { formAxios } from "../../../config/axios.config";

export const useGetSettings = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: async () => {
      const response = await formAxios.get("/setting");
      return response?.data?.data;
    },
    queryKey: ["setting"],
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
