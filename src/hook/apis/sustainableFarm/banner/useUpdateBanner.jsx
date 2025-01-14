import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formAxios } from "../../../../config/axios.config";
import { toast } from "sonner";

export const useUpdateBanner = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async ({ payload, id }) => {
      try {
        const response = await formAxios.put(`/farm/banner/${id}`, payload);
        toast.success("Banner updated successful");
        queryClient.invalidateQueries("farm-banner");
        return response?.data?.data;
      } catch (err) {
        toast.error(err.response?.data?.message || "Banner updated failed");
        throw err; // Rethrow to let the caller handle it
      }
    },
  });

  return {
    updateBanner: mutateAsync,
    isLoading,
    updatePending: isPending,
    isError,
    error,
  };
};
