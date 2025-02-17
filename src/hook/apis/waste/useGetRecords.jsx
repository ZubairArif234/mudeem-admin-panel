import { useQuery } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";

export const useGetRecords = (filters) => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      const data = await custAxios.get("/waste/request", {
        params: filters,
      });
      return data?.data?.data;
    },
    queryKey: ["record", JSON.stringify(filters)],
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    retry: 3,
  });
  return { records: data, ...rest };
};
