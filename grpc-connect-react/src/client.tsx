import { TransportProvider } from "@bufbuild/connect-query";
import { createConnectTransport } from "@bufbuild/connect-web";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

type Props = {
  baseUrl: string;
  children: ReactNode;
};

export const Client = ({ baseUrl, children }: Props) => {
 
  const transport = createConnectTransport({
    baseUrl,
  });
  const client = new QueryClient();

  return (
    <TransportProvider transport={transport}>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </TransportProvider>
  );
};
