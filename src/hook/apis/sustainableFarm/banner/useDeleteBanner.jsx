import { useMutation, useQueryClient } from "@tanstack/react-query";
import custAxios from "../../../../config/axios.config";
import { toast } from "sonner";

export const useDeletedBanner = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async (id) => {
      try {
        const response = await custAxios.delete(`/farm/banner/${id}`);
        toast.success("Banner deleted successful");
        queryClient.invalidateQueries("farm-banner");
        return response?.data?.data;
      } catch (err) {
        toast.error(err.response?.data?.message || "Banner deleted failed");
        throw err; // Rethrow to let the caller handle it
      }
    },
  });

  return {
    deleteBanner: mutateAsync,
    isLoading,
    isPending,
    isError,
    error,
  };
};
