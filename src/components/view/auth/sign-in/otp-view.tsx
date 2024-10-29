import React from 'react';
import SigninLogo from '../../../../../public/rseen 2.svg';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import OTPForm from './otp-form';

const OTPViewPage = () => {
  return (
    <div className="mx-auto flex  flex-col justify-center items-center space-y-6 rounded border px-6 py-10 shadow-2xl lg:w-[646px] lg:border-0 lg:p-0 lg:shadow-none">
      <div className="flex flex-col space-y-6 text-center">
        <Image src={SigninLogo} alt="Sign in cover" className="mx-auto my-6 lg:hidden" />
        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">تسجيل الدخول</h1>
        <p className="text-sm font-semibold text-gray-600 lg:text-2xl">أدخل كود التحقق المرسل إلى </p>
        <div className="flex justify-center gap-2 font-bold">
          <span dir="ltr" className="font-bold">
            +966 50 268 9874
          </span>
          <Link href="/sign-in" className="text-gray-600 underline">
            تعديل
          </Link>
        </div>
      </div>
      <OTPForm />
    </div>
  );
};

export default OTPViewPage;
