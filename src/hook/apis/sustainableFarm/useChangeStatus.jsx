import { useMutation, useQueryClient } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";

export const useChangeStatus = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async ({ payload, id }) => {
      try {
        const response = await custAxios.put(`/farm/reward${id}`, payload);
        queryClient.invalidateQueries("sustainableFarm");
        return response?.data?.data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  return {
    changeStatus: mutateAsync,
    isLoading,
    isPending,
    isError,
    error,
  };
};
