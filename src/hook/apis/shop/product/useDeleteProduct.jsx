import { useMutation, useQueryClient } from "@tanstack/react-query";
import custAxios from "../../../../config/axios.config";
import { toast } from "sonner";

export const useDeletedProduct = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async (id) => {
      try {
        const response = await custAxios.delete(`/shop/product/${id}`);
        toast.success("Product deleteed successful");
        queryClient.invalidateQueries("product");
        return response?.data?.data;
      } catch (err) {
        toast.error(err.response?.data?.message || "Product deleted failed");
        throw err; // Rethrow to let the caller handle it
      }
    },
  });

  return {
    deleteProduct: mutateAsync,
    isLoading,
    isPending,
    isError,
    error,
  };
};
