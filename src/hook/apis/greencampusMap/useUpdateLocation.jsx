import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formAxios } from "../../../config/axios.config";
import { toast } from "sonner";

export const useUpdateLocation = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async ({ payload, id }) => {
      try {
        const response = await formAxios.put(`/green-map/${id}`, payload);
        toast.success("Location updated successful");
        queryClient.invalidateQueries("location");
        return response?.data?.data;
      } catch (err) {
        toast.error(err.response?.data?.message || "Location updated failed");
        throw err; // Rethrow to let the caller handle it
      }
    },
  });

  return {
    useUpdateLocation: mutateAsync,
    isLoading,
    updatePending: isPending,
    isError,
    error,
  };
};
