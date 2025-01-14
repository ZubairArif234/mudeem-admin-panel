import { useQuery } from "@tanstack/react-query";
import custAxios from "../../../../config/axios.config";

export const useGetBanner = () => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      const data = await custAxios.get("/farm/banner");
      return data?.data?.data;
    },
    queryKey: ["farm-banner"],
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    retry: 3,
  });
  return { banners: data, ...rest };
};
