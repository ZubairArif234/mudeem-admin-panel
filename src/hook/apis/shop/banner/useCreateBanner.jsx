import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formAxios } from "../../../../config/axios.config";
import { toast } from "sonner";

export const useCreateBanner = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async (payload) => {
      try {
        const response = await formAxios.post("/shop/banner", payload);
        toast.success("Banner created successful");
        queryClient.invalidateQueries("banner");
        return response?.data?.data;
      } catch (err) {
        toast.error(err.response?.data?.message || "Banner created failed");
        throw err; // Rethrow to let the caller handle it
      }
    },
  });

  return {
    createBanner: mutateAsync,
    isLoading,
    isPending,
    isError,
    error,
  };
};
