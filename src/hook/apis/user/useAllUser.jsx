import { useQuery } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";

export const useGetUsers = () => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      const data = await custAxios.get("/user");
      return data?.data?.data;
    },
    queryKey: ["user"],
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    retry: 3,
  });
  return { user: data, ...rest };
};
