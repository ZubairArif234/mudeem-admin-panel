import { useQuery } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";

export const useGetMe = () => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      const data = await custAxios.get("/auth/me");
      return data?.data?.data;
    },
    queryKey: ["me"],
    refetchOnWindowFocus: false,
    retry: 3,
    staleTime: Infinity,
  });
  return { me: data, ...rest };
};
