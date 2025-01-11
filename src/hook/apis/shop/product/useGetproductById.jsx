import { useQuery } from "@tanstack/react-query";
import custAxios from "../../../../config/axios.config";

export const useGetProductById = (id) => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      const data = await custAxios.get(`/shop/product/${id}`);
      return data?.data?.data;
    },
    queryKey: ["productDetail", id],
    refetchOnWindowFocus: false,
    staleTime: "infinity",
    retry: 3,
  });
  return { productDetail: data, ...rest };
};
