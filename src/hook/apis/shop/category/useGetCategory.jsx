import { useQuery } from "@tanstack/react-query";
import custAxios from "../../../../config/axios.config";

export const useGetCategory = (filters) => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      const data = await custAxios.get("/shop/category", {
        params: filters,
      });
      return data?.data?.data;
    },
    queryKey: ["category", JSON.stringify(filters)],
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    retry: 3,
  });
  return { categories: data, ...rest };
};
