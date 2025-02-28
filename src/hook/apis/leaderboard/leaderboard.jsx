import { useQuery } from "@tanstack/react-query";
import { formAxios } from "../../../config/axios.config"; // Ensure axios is configured

const useGetLeaderboard = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["leaderboard"], // Unique key for caching and invalidation
    queryFn: async () => {
      const response = await formAxios.get("/leaderboard/"); // Endpoint for leaderboard
      return response?.data?.data; // Returning the `data` part of the response
    },
    onError: (err) => {
      console.error("Error fetching leaderboard data:", err);
    },
  });

  return {
    leaderboard: data,
    isLoading,
    isError,
    error,
  };
};

export default useGetLeaderboard;