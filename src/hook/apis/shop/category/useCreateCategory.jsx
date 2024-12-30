import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formAxios } from "../../../../config/axios.config";

import { toast } from "sonner";

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async (payload) => {
      try {
        const response = await formAxios.post("/shop/category", payload);
        toast.success("Category created successful");
        queryClient.invalidateQueries("category");
        return response?.data?.data;
      } catch (err) {
        toast.error(err.response?.data?.message || "Category created failed");
        throw err; // Rethrow to let the caller handle it
      }
    },
  });

  return {
    createCategory: mutateAsync,
    isLoading,
    isPending,
    isError,
    error,
  };
};
