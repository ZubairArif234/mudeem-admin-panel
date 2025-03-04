import { useQuery } from "@tanstack/react-query";
import { formAxios } from "../../../config/axios.config"; // Ensure axios is configured

const useGetNotifications = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["notifications"], // Unique key for caching and invalidation
    queryFn: async () => {
      const response = await formAxios.get("/notification/all"); // Endpoint for notifications
      return response?.data?.data; // Returning the `data` part of the response
    },
    onError: (err) => {
      console.error("Error fetching notifications:", err);
    },
  });

  return {
    notifications: data,
    isLoading,
    isError,
    error,
  };
};

export default useGetNotifications;