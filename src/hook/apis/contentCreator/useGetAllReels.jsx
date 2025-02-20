import { useQuery } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";

export const useGetAllReels = () => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      const data = await custAxios.get("/content-creator/");
      return data?.data?.data;
    },
    queryKey: ["reel"],
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    retry: 3,
  });
  return { reels: data, ...rest };
};
