'use client';

import { ReactNode, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface ProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

const Provider = ({ children }: ProviderProps) => {
  return (
    <Suspense>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition='bottom-right'
        />
      </QueryClientProvider>
    </Suspense>
  );
};

export default Provider;
