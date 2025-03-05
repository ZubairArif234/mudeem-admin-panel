import { useMutation } from "@tanstack/react-query";
import { formAxios } from "../../../config/axios.config";
import { toast } from "sonner";

export const useUpdateProfile = () => {
  return useMutation({
    mutationFn: async (profileData) => {
      const formData = new FormData();
      formData.append("name", profileData.name);
      formData.append("email", profileData.email);
      formData.append("phone", profileData.phone);
      formData.append("username", profileData.name);
      if (profileData.profilePicture) {
        formData.append("profilePicture", profileData.profilePicture);
      }

      const response = await formAxios.put("/auth/updateProfile", formData);

      return response.data;
    },
    onSuccess: () => {
      toast.success("Profile updated successfully");
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "Profile update failed");
    },
  });
};