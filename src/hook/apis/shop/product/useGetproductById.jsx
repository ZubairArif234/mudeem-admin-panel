import { useQuery } from "@tanstack/react-query";
import custAxios from "../../../../config/axios.config";

export const useGetProductById = (id) => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      if (!id) return null; // Prevents API call if ID is missing
      const response = await custAxios.get(`/shop/product/${id}`);
      return response?.data?.data;
    },
    queryKey: ["productDetail", id],
    enabled: !!id, // Ensures the query runs only when ID is valid
    refetchOnWindowFocus: false,
    staleTime: Infinity, // Use 'Infinity' without quotes
    retry: 3,
  });

  return { productDetail: data, ...rest };
};
