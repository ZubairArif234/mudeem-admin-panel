import { useQuery } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";

export const useGetCarpool = () => {
  const { data, ...rest } = useQuery({
    queryFn: async () => {
      const data = await custAxios.get("/carpool");
      return data?.data?.data;
    },
    queryKey: ["carpool"],
    refetchOnWindowFocus: false,
    staleTime: "infinity",
    retry: 3,
  });
  return { carpool: data, ...rest };
};
