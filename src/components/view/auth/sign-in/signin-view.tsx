'use client';
import { Metadata } from 'next';
import SigninLogo from '../../../../../public/rseen 2.svg';
import Image from 'next/image';
import SigninForm from './signin-form';
import { useTranslations } from 'next-intl'; 

export const metadata: Metadata = {
  title: 'Authentication',
};

export async function SignInView() {
  const t = useTranslations('signIn');

  return (
    <div className="mx-auto flex w-[430px] flex-col justify-center space-y-6 rounded border px-6 py-10 shadow-2xl lg:w-[646px] lg:border-0 lg:p-0 lg:shadow-none">
      <div className="flex flex-col space-y-6 text-center">
        <Image src={SigninLogo} alt="Sign in cover" className="mx-auto my-6 lg:hidden" />
        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">{t('title')}</h1>
        <p className="text-sm font-semibold text-gray-600 lg:text-xl">{t('description')}</p>
      </div>
      <SigninForm />
    </div>
  );
}
