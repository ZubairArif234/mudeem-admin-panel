import { useMutation } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";
import { toast } from "sonner";

export const useForgotPassword = () => {
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async (payload) => {
      try {
        const response = await custAxios.post("/auth/forgotPassword", payload);
        toast.success("OTP sent to your email successful");

        return response?.data?.data;
      } catch (err) {
        toast.error(
          err.response?.data?.message || "OTP sent to your email failed"
        );
        throw err; // Rethrow to let the caller handle it
      }
    },
  });

  return {
    forgotPassword: mutateAsync,
    isLoading,
    isPending,
    isError,
    error,
  };
};
