import { useQuery } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";

export const useGetLocation = (filters) => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      const data = await custAxios.get("/green-map", {
        params: filters,
      });
      return data?.data?.data;
    },
    queryKey: ["location", JSON.stringify(filters)],
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    retry: 3,
  });
  return { categories: data, ...rest };
};
