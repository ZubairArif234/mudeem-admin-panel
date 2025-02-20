import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formAxios } from "../../../config/axios.config";
import { toast } from "sonner";

export const useDeleteBook = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async (id) => {
      try {
        const response = await formAxios.delete(`/academy/book/${id}`);
        toast.success("Book deleted successfully");
        queryClient.invalidateQueries("book");
        return response?.data?.data;
      } catch (err) {
        toast.error(err.response?.data?.message || "Book deletion failed");
        throw err; // Rethrow to let the caller handle it
      }
    },
  });

  return {
    deleteBook: mutateAsync,
    isLoading,
    isPending,
    isError,
    error,
  };
};
