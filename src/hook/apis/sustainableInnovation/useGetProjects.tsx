import { useQuery } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";

export const useGetProjects = () => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      const data = await custAxios.get("/sustainable-innovation");
      return data?.data?.data;
    },
    queryKey: ["sustainableIInnovation"],
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
    retry: 3,
  });
  return { projects: data, ...rest };
};
