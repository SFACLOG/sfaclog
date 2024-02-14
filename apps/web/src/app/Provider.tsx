'use client';

import { ReactNode, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { UserProvider } from '@/context/UserContext';
import { SessionProvider } from 'next-auth/react';

interface ProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

const Provider = ({ children }: ProviderProps) => {
  return (
    <Suspense>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <UserProvider>{children}</UserProvider>
        </SessionProvider>
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition='bottom-right'
        />
      </QueryClientProvider>
    </Suspense>
  );
};

export default Provider;
