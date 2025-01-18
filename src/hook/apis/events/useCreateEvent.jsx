import { useMutation, useQueryClient } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";

import { toast } from "sonner";

export const useCreateEvents = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async (payload) => {
      try {
        const response = await custAxios.post("/events", payload);
        toast.success("Event created successful");
        queryClient.invalidateQueries("event");
        return response?.data?.data;
      } catch (err) {
        toast.error(err.response?.data?.message || "Event created failed");
        throw err; // Rethrow to let the caller handle it
      }
    },
  });

  return {
    createEvent: mutateAsync,
    isLoading,
    isPending,
    isError,
    error,
  };
};
