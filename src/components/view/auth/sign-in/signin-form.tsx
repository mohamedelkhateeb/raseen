'use client';
import FormError from '@/components/common/form-error';
import Saudi from '@/components/svgs/saudi-flag';
import { Button, buttonVariants } from '@/components/ui/button';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import { Input } from '@/components/ui/input';
import { Link, useRouter } from '@/i18n/routing';
import useUserStore from '@/lib/store/userStore';
import { cn } from '@/lib/utils';
import { signIn } from '@/services/authService';
import { Data, Response } from '@/types/interfaces/auth';
import { signInSchema } from '@/types/schema/auth';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
export default function SigninForm() {
  const [errMsg, setErrMsg] = useState('');
  const router = useRouter();
  const setUserauth = useUserStore((state) => state.setUserauth);
  const submitForm = async (formData: FormData) => {
    const result = signInSchema.safeParse({
      phone: formData.get('phone'),
    });
    if (!result.success) {
      setErrMsg(result.error.errors[0].message);
      return;
    }
    const res: Response<Data> = await signIn(result.data);
    console.log({ res });

    if (!res?.data?.is_active && !res?.data?.is_available) {
      setUserauth({
        otp: 0,
        phone: result.data.phone,
      });
      router.replace('/sign-up');
      toast.error('الرقم الذي  ادخلته غير مرتبط بحسابات');
    } else if (res?.data?.is_active && res?.data?.is_available) {
      router.push('/');
    } else if (!res?.data?.is_active && res?.data?.is_available) {
      setUserauth({
        otp: res.data?.user?.otp,
        phone: res.data?.user?.phone,
      });
      router.push('/otp');
    }
  };

  return (
    <>
      <form action={submitForm}>
        <p className="py-3 font-semibold">رقم الجوال</p>
        <div dir="ltr" className="mb-5 flex items-center rounded-lg border px-4 py-2">
          <span className="flex items-center gap-2 border-r-2 pr-2 text-sm lg:text-xl">
            <Saudi />
            +966
          </span>
          <Input
            className={cn('border-0 text-sm shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 lg:text-xl xl:py-7')}
            name="phone"
            type="text"
            placeholder="50******"
            maxLength={9}
          />
        </div>
        <FormError error={errMsg} />
        <div className="mt-12 flex flex-col gap-4">
          <LoadingButton
            content="تسجيل الدخول"
            loader="تسجيل الدخول..."
            style="ml-auto py-6 xl:py-9 xl:text-2xl w-full bg-darkBlue text-white text-base rounded-lg"
          />
          <Link
            href="/sign-company"
            className={cn(
              buttonVariants({
                variant: 'outline',
              }),
              'mt-2 w-full rounded-lg border border-darkBlue bg-transparent py-6 text-base text-darkBlue hover:bg-darkBlue hover:text-white lg:text-xl xl:py-9 xl:text-2xl',
            )}
          >
            انشاء حساب كشركه
          </Link>
        </div>
      </form>
    </>
  );
}
