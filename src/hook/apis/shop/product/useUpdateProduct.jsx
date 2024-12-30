import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formAxios } from "../../../../config/axios.config";
import { toast } from "sonner";

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async ({ payload, id }) => {
      try {
        const response = await formAxios.put(`/shop/product/${id}`, payload);
        toast.success("Product updated successful");
        queryClient.invalidateQueries("product");
        return response?.data?.data;
      } catch (err) {
        toast.error(err.response?.data?.message || "Product updated failed");
        throw err; // Rethrow to let the caller handle it
      }
    },
  });

  return {
    updateProduct: mutateAsync,
    isLoading,
    updatePending: isPending,
    isError,
    error,
  };
};
