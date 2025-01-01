import { useMutation } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async () => {
      try {
        const response = await custAxios.get("/auth/logout");
        toast.success("Logout successful");
        navigate("/");
        return response?.data?.data;
      } catch (err) {
        toast.error(err.response?.data?.message || "Logout failed");
        throw err; // Rethrow to let the caller handle it
      }
    },
  });

  return {
    logout: mutateAsync,
    isLoading,
    isPending,
    isError,
    error,
  };
};
