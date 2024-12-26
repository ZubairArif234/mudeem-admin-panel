import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const QueryProvider = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default QueryProvider;
