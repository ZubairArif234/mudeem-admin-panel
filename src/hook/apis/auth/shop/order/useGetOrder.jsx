import { useQuery } from "@tanstack/react-query";
import custAxios from "../../../../../config/axios.config";

export const useGetOrder = (filters) => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      const data = await custAxios.get("/shop/order", {
        params: filters,
      });
      return data?.data?.data;
    },
    queryKey: ["order", filters],
    refetchOnWindowFocus: false,
    retry: 3,
  });
  return { orders: data, ...rest };
};
