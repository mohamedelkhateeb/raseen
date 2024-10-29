import { options } from '@/app/api/auth/[...nextauth]/options';
import { SignInView } from '@/components/view/auth/sign-in/signin-view';
import { redirect } from '@/i18n/routing';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
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
