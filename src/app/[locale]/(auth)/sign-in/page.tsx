import { SignInView } from '@/components/view/auth/sign-in/signin-view';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'Raseen - Sign in',
  description: 'Login to your account to continue to Raseen.',
};

export default async function SigninPage() {
  return (
    <>
      <SignInView />
    </>
  );
}
