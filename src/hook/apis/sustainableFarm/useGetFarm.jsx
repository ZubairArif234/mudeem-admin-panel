import { useQuery } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";

export const useGetFarm = (filters) => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      const data = await custAxios.get("/farm", {
        params: filters,
      });
      return data?.data?.data;
    },
    queryKey: ["sustainableFarm"],
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
    retry: 3,
  });
  return { farm: data, ...rest };
};
