import { SignUpView } from '@/components/view/auth/sign-up/signup-view';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'Raseen - Sign up',
  description: 'Create your account to continue to Raseen.',
};

export default function SigninPage() {
  return (
    <>
      <SignUpView />
    </>
  );
}
