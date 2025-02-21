import { useQuery } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";

export const useGetCareers = () => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      const response = await custAxios.get("/careers/");
      return response?.data?.data;
    },
    queryKey: ["careers"],
    refetchOnWindowFocus: false,
    staleTime: "infinity",
    retry: 3,
  });
  return { careers: data, ...rest };
};