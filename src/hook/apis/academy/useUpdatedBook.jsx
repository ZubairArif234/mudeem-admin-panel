import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formAxios } from "../../../config/axios.config";
import { toast } from "sonner";

export const useUpdateBook = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async ({ id, payload }) => {
      try {
        const response = await formAxios.patch(`/academy/book/${id}`, payload);
        toast.success("Book updated successfully");
        queryClient.invalidateQueries("book");
        return response?.data?.data;
      } catch (err) {
        toast.error(err.response?.data?.message || "Book update failed");
        throw err; // Rethrow to let the caller handle it
      }
    },
  });

  return {
    updateBook: mutateAsync,
    isLoading,
    isPending,
    isError,
    error,
  };
};