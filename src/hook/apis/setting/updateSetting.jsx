import { useMutation, useQueryClient } from "@tanstack/react-query";
import custAxios, { formAxios } from "../../../config/axios.config";
import { toast } from "sonner";

export const useUpdateSetting = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async (payload, type) => {
      try {
        const axiosInstance = type === "form" ? formAxios : custAxios;
        const response = await axiosInstance.put(`/setting`, payload);

        toast.success("Setting updated successfully");
        queryClient.invalidateQueries("setting");
        return response?.data?.data;
      } catch (err) {
        toast.error(err.response?.data?.message || "Setting update failed");
        throw err;
      }
    },
  });

  return {
    updateSetting: mutateAsync,
    isLoading,
    isPending,
    isError,
    error,
  };
};