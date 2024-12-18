import React from 'react';
import SigninLogo from '../../../../../public/rseen 2.svg';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import OTPForm from './otp-form';
import EditOtp from './edit-otp';
import { useTranslations } from 'next-intl';

const OTPViewPage = () => {
  const t = useTranslations();

  return (
    <div className="mx-auto flex flex-col items-center justify-center space-y-6 rounded border px-6 py-10 shadow-2xl lg:w-[646px] lg:border-0 lg:p-0 lg:shadow-none">
      <div className="flex flex-col space-y-6 text-center">
        <Image src={SigninLogo} alt="Sign in cover" className="mx-auto my-6 lg:hidden" />
        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">{t('signIn')}</h1>
        <p className="text-sm font-semibold text-gray-600 lg:text-2xl">{t('enterOtpCode')}</p>
        <div className="flex justify-center gap-2 font-bold">
          <EditOtp />
          <Link prefetch={true} href="/sign-in" className="text-gray-600 underline">
            {t('edit')}
          </Link>
        </div>
      </div>
      <OTPForm />
    </div>
  );
};

export default OTPViewPage;
