import { useMutation, useQueryClient } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";
import { toast } from "sonner";

export const useCreateCompany = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async (payload) => {
      try {
        const response = await custAxios.post("/waste/company", payload);
        toast.success("Company created successful");
        queryClient.invalidateQueries("company");
        return response?.data?.data;
      } catch (err) {
        toast.error(err.response?.data?.message || "Copmpany created failed");
        throw err; // Rethrow to let the caller handle it
      }
    },
  });

  return {
    createWasteCompany: mutateAsync,
    isLoading,
    isPending,
    isError,
    error,
  };
};
