import { useQuery } from "@tanstack/react-query";
import { formAxios } from "../../../config/axios.config"; // Make sure axios is configured

const useGetStatus = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["dashboardStats"], // Unique key for caching and invalidation
    queryFn: async () => {
      const response = await formAxios.get("/dashboard"); // Endpoint for stats
      return response?.data?.data; // Returning the `data` part of the response
    },
    onError: (err) => {
      console.error("Error fetching dashboard stats:", err);
    },
  });

  return {
    stats: data,
    isLoading,
    isError,
    error,
  };
};

export default useGetStatus;
