import { useQuery } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";

export const useGetMe = () => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      const data = await custAxios.get("/auth/me");
      return data?.data?.data;
    },
    staleTime: Infinity,
    queryKey: "user",
    refetchOnWindowFocus: false,
    retry: 3,
  });
  return { me: data, ...rest };
};
