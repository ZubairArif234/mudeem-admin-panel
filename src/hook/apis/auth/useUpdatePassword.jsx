import { useMutation } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";
import { toast } from "sonner";

export const useUpdatePassword = () => {
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async (payload) => {
      try {
        const response = await custAxios.put("/auth/updatePassword", payload);
        toast.success("Password updated successful");

        return response?.data?.data;
      } catch (err) {
        toast.error(err.response?.data?.message || "Password update failed");
        throw err; // Rethrow to let the caller handle it
      }
    },
  });

  return {
    updatePassword: mutateAsync,
    isLoading,
    isPending,
    isError,
    error,
  };
};
