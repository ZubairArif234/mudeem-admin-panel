import { useQuery } from "@tanstack/react-query";
import custAxios from "../../../../config/axios.config";

export const useGetBooks = () => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      const data = await custAxios.get("/academy/book");
      return data?.data?.data;
    },
    queryKey: ["book"],
    refetchOnWindowFocus: false,
    staleTime: "infinity",
    retry: 3,
  });
  return { products: data, ...rest };
};
