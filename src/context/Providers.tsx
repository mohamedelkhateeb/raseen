'use client';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import React from 'react';
import { SessionProvider, SessionProviderProps } from 'next-auth/react';
export default function Providers({ children, session }: { children: React.ReactNode; session: SessionProviderProps['session'] }) {
  return (
    <>
      <SessionProvider session={session}>
        <NuqsAdapter>{children}</NuqsAdapter>
      </SessionProvider>
    </>
  );
}
