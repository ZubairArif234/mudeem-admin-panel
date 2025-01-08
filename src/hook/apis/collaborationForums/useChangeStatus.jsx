import { useMutation, useQueryClient } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";

export const useChangeStatus = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async ({ payload, id }) => {
      try {
        const response = await custAxios.put(
          `/collab-forum/changePostStatus/${id}`,
          payload
        );
        queryClient.invalidateQueries("collaborationForums");
        return response?.data?.data;
      } catch (err) {
        console.log(err);

        // throw err; // Rethrow to let the caller handle it
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
