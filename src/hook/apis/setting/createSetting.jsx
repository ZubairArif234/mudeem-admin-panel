import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formAxios } from "../../../config/axios.config";
import { toast } from "sonner";

export const useCreateSetting = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async (payload) => {
      try {
        const response = await formAxios.post("/setting", payload);
        toast.success("Setting created successful");
        queryClient.invalidateQueries("setting");
        return response?.data?.data;
      } catch (err) {
        toast.error(err.response?.data?.message || "Setting created failed");
        throw err; // Rethrow to let the caller handle it
      }
    },
  });

  return {
    createSetting: mutateAsync,
    isLoading,
    isPending,
    isError,
    error,
  };
};
