import { useQuery } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";

export const useGetCarpool = () => {
  const { data, error, isLoading } = useQuery({
    queryFn: async () => {
      const response = await custAxios.get("/carpool/get-all");
      return response?.data?.data;
    },
    queryKey: ["carpool"],
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    retry: 3,
  });

  if (error) console.error("React Query Error:", error);

  return { carpool: data, isLoading, error };
};