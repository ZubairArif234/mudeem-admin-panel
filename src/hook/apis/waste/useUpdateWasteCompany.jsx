import { useMutation, useQueryClient } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";
import { toast } from "sonner";

export const useUpdateCompany = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async ({ payload, id }) => {
      try {
        const response = await custAxios.patch(`/waste/company/${id}`, payload);
        toast.success("Company updated successful");
        queryClient.invalidateQueries("company");
        return response?.data?.data;
      } catch (err) {
        toast.error(err.response?.data?.message || "Company updated failed");
        throw err; // Rethrow to let the caller handle it
      }
    },
  });

  return {
    updateWasteCompany: mutateAsync,
    isLoading,
    updatePending: isPending,
    isError,
    error,
  };
};
