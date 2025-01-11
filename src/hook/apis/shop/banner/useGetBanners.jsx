import { useQuery } from "@tanstack/react-query";
import custAxios from "../../../../config/axios.config";

export const useGetBanner = () => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      const data = await custAxios.get("/shop/banner");
      return data?.data?.data;
    },
    queryKey: ["banner"],
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    retry: 3,
  });
  return { banners: data, ...rest };
};
