import { useMutation, useQueryClient } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";

export const useRewardPoints = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async ({ payload, id }) => {
      try {
        const response = await custAxios.put(
          `/waste/request/approve-reject/${id}`,
          payload
        );
        queryClient.invalidateQueries("record");
        return response?.data?.data;
      } catch (err) {
        console.log(err);

        // throw err; // Rethrow to let the caller handle it
      }
    },
  });

  return {
    rewardPoints: mutateAsync,
    isLoading,
    isPending,
    isError,
    error,
  };
};
