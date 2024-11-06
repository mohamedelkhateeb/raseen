import SignUpCompanyView from '@/components/view/auth/create-company/signup-view';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'Raseen - Sign up company',
  description: 'Create your account to continue to Raseen.',
};

export default function SigninPage() {
  return (
    <>
      <SignUpCompanyView />
    </>
  );
}
