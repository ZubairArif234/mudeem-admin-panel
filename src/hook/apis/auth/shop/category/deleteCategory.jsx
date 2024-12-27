import { useMutation, useQueryClient } from "@tanstack/react-query";
import custAxios from "../../../../../config/axios.config";
import { toast } from "sonner";

export const useDeletedCategory = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async (id) => {
      try {
        const response = await custAxios.delete(`/shop/category/${id}`);
        toast.success("Category deleteed successful");
        queryClient.invalidateQueries("category");
        return response?.data?.data;
      } catch (err) {
        toast.error(err.response?.data?.message || "Category deleted failed");
        throw err; // Rethrow to let the caller handle it
      }
    },
  });

  return {
    deleteCategory: mutateAsync,
    isLoading,
    isPending,
    isError,
    error,
  };
};
