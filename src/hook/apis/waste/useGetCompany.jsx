import { useQuery } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";

export const useGetCompany = (filters) => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      const data = await custAxios.get("/waste/company", {
        params: filters,
      });
      return data?.data?.data;
    },
    queryKey: ["company", JSON.stringify(filters)],
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    retry: 3,
  });
  return { companies: data, ...rest };
};
