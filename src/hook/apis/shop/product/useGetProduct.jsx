import { useQuery } from "@tanstack/react-query";
import custAxios from "../../../../config/axios.config";

export const useGetProduct = (filters) => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      const data = await custAxios.get("/shop/product", {
        params: filters,
      });
      return data?.data?.data;
    },
    queryKey: ["product", filters],
    refetchOnWindowFocus: false,
    staleTime: "infinity",
    retry: 3,
  });
  return { products: data, ...rest };
};
