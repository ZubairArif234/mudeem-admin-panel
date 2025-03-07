import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { formAxios } from "../../../config/axios.config";

export const useGetSettings = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["setting"],
    queryFn: async () => {
      const response = await formAxios.get("/setting");
      return response?.data?.data;
    },
    onError: (err) => {
      console.error("Error fetching settings:", err);
    },
  });

  // Store settings in localStorage
  useEffect(() => {
    if (data) {
      localStorage.setItem("settings", JSON.stringify(data));
    }
  }, [data]);

  return {
    settings: data || JSON.parse(localStorage.getItem("settings") || "null"),
    isLoading,
    isError,
    error,
    faviconUrl: data?.favIcon,
  };
};
