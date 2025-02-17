import { useMutation, useQueryClient } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";

import { toast } from "sonner";

export const useDeletedCompany = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async (id) => {
      try {
        const response = await custAxios.delete(`/waste/company/${id}`);
        toast.success("Company deleted successful");
        queryClient.invalidateQueries("event");
        return response?.data?.data;
      } catch (err) {
        toast.error(err.response?.data?.message || "Company deleted failed");
        throw err; // Rethrow to let the caller handle it
      }
    },
  });

  return {
    deleteCompany: mutateAsync,
    deleteLoading: isLoading,
    isPending,
    isError,
    error,
  };
};
