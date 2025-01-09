import { useQuery } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";

export const useGetProjects = (filters) => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      const data = await custAxios.get("/sustainable-innovation", {
        params: filters,
      });
      return data?.data?.data;
    },
    queryKey: ["sustainableInnovation"],
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
    retry: 3,
  });
  return { projects: data, ...rest };
};
