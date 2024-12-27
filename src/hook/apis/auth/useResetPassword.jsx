import { useMutation } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";
import { toast } from "sonner";

export const useResetPassword = () => {
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async (payload) => {
      try {
        const response = await custAxios.put("/auth/resetPassword", payload);
        toast.success("Password reset successful");

        return response?.data?.data;
      } catch (err) {
        toast.error(err.response?.data?.message || "Password reset failed");
        throw err; // Rethrow to let the caller handle it
      }
    },
  });

  return {
    resetPassword: mutateAsync,
    isLoading,
    isPending,
    isError,
    error,
  };
};
