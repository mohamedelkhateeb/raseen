import SignUpCompanyView from '@/components/view/auth/create-company/signup-view';
import { searchParamsCache } from '@/utils/searchparams';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'Raseen - Sign up company',
  description: 'Create your account to continue to Raseen.',
};

export default async function SigninPage({ searchParams }: { searchParams: Record<string, string> }) {
  searchParamsCache.parse(searchParams);
  return (
    <>
      <SignUpCompanyView />
    </>
  );
}
