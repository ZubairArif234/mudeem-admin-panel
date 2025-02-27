import { useMutation, useQueryClient } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";
import { toast } from "sonner";

export const useUserStatus = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async (id) => {
      try {
        const response = await custAxios.patch(`/user/${id}`);
        toast.success("User updated successful");
        queryClient.invalidateQueries("user");
        return response?.data?.data;
      } catch (err) {
        toast.error(err.response?.data?.message || "User updated failed");
        throw err; // Rethrow to let the caller handle it
      }
    },
  });

  return {
    updateUser: mutateAsync,
    isLoading,
    updatePending: isPending,
    isError,
    error,
  };
};
