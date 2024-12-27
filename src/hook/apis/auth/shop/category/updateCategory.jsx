import { useMutation, useQueryClient } from "@tanstack/react-query";
import custAxios from "../../../../../config/axios.config";
import { toast } from "sonner";

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async (payload, id) => {
      try {
        const response = await custAxios.put(`/shop/category${id}`, payload);
        toast.success("Category updated successful");
        queryClient.invalidateQueries("category");
        return response?.data?.data;
      } catch (err) {
        toast.error(err.response?.data?.message || "Category updated failed");
        throw err; // Rethrow to let the caller handle it
      }
    },
  });

  return {
    updateCategory: mutateAsync,
    isLoading,
    isPending,
    isError,
    error,
  };
};
