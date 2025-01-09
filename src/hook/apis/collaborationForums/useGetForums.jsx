import { useQuery } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";

export const useGetForums = (filters) => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      const data = await custAxios.get("/collab-forum", {
        params: filters,
      });
      return data?.data?.data;
    },
    queryKey: ["collaborationForums", JSON.stringify(filters)],
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
    retry: 3,
  });
  return { forums: data, ...rest };
};
