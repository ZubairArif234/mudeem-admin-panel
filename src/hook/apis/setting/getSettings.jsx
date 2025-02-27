import { useQuery } from "@tanstack/react-query";
import { formAxios } from "../../../config/axios.config";

export const useGetSettings = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["setting"],
    queryFn: async () => {
      const response = await formAxios.get("/setting");
      // Log the entire response to see what data is returned from the backend
      console.log('Fetched settings data:', response?.data);
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
  };
};
