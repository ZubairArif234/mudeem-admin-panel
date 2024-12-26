import { useMutation } from "@tanstack/react-query";
import custAxios from "../../../config/axios.config";
import { toast } from "sonner";
// export const useLogin = () => {
//   const { mutateAsync, data, error, isLoading, isError, isSuccess } =
//     useMutation({
//       mutationFn: async (payload) => {
//         const response = await custAxios.post("/auth/login", payload);
//         return response?.data?.data;
//       },
//       onError: (error) => {
//         console.error("Login failed:", error);
//       },
//       onSuccess: (data) => {
//         console.log("Login successful:", data);
//       },
//     });

//   return {
//     login: mutateAsync,
//     data,
//     error,
//     isLoading,
//     isError,
//     isSuccess,
//   };
// };

export const useLogin = () => {
  const { mutateAsync, isLoading, isPending, isError, error } = useMutation({
    mutationFn: async (payload) => {
      try {
        const response = await custAxios.post("/auth/login", payload);
        toast.success("Login successful");

        return response?.data?.data;
      } catch (err) {
        // Log the full error to understand it better
        console.log(isPending);
        toast.error(err.response?.data?.message || "Login failed");
        throw err; // Rethrow to let the caller handle it
      }
    },
  });

  return {
    login: mutateAsync,
    isLoading,
    isPending,
    isError,
    error,
  };
};
