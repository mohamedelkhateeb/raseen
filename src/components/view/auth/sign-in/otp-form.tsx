'use client';
import React, { useEffect, useRef, useState } from 'react';
import FormError from '@/components/common/form-error';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { redirect, useRouter } from '@/i18n/routing';
import useUserStore from '@/lib/store/userStore';
import { checkOtpSchema } from '@/types/schema/auth';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
const OTPStyle = 'mr-5 rounded-lg h-28 w-28 md:h-[100px] md:w-[100px] xl:h-[130px] xl:w-[140px] text-xl lg:text-4xl border-2';
import { signIn } from 'next-auth/react';

const OTPForm = () => {
  const otpRef = useRef<any>(null);
  const [value, setValue] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const router = useRouter();
  const authData = useUserStore((state) => state.settings.auth);
  if (authData.otp === 0) redirect('/sign-in');
  const submitForm = async () => {
    const result = checkOtpSchema.safeParse({
      phone: authData.phone,
      otp: Number(value),
      confirmedOTP: authData.otp,
    });
    if (!result.success) {
      setErrMsg(result.error.errors[0].message);
      return;
    }
    try {
      const response: any = await signIn('credentials', {
        otp: Number(value),
        phone: authData.phone,
        redirect: false,
      });
      response.status == 401 ? setErrMsg('الرقم غير صحيح') : router.push('/');
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    otpRef.current?.focus();
  }, []);
  return (
    <form action={submitForm}>
      <p className="py-3 font-semibold">رقم التحقق</p>
      <div className="space-y-2">
        <InputOTP ref={otpRef} className="" maxLength={4} value={value} onChange={(value) => setValue(value)}>
          <InputOTPGroup>
            <InputOTPSlot className={OTPStyle} index={0} />
            <InputOTPSlot className={OTPStyle} index={1} />
            <InputOTPSlot className={OTPStyle} index={2} />
            <InputOTPSlot className={OTPStyle} index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <FormError error={errMsg} />
      <div className="mt-12 flex flex-col gap-4">
        <LoadingButton
          content="تحقق الان"
          loader="تحقق الان..."
          style="ml-auto py-6 xl:py-9 xl:text-2xl w-full bg-darkBlue text-white text-base rounded-lg"
        />
      </div>
    </form>
  );
};

export default OTPForm;
