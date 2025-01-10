import { useMutation, useQueryClient } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";

import { toast } from "sonner";

export const useDeletedLocation = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async (id) => {
      try {
        const response = await custAxios.delete(`/green-map/${id}`);
        toast.success("Category deleteed successful");
        queryClient.invalidateQueries("location");
        return response?.data?.data;
      } catch (err) {
        toast.error(err.response?.data?.message || "Category deleted failed");
        throw err; // Rethrow to let the caller handle it
      }
    },
  });

  return {
    useDeletedLocation: mutateAsync,
    isLoading,
    isPending,
    isError,
    error,
  };
};
