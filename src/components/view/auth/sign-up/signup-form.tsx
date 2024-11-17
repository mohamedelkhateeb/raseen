'use client';
import FormError from '@/components/common/form-error';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link, redirect, useRouter } from '@/i18n/routing';
import useUserStore from '@/lib/store/userStore';
import { cn } from '@/lib/utils';
import { signUp } from '@/services/authService';
import { Cities } from '@/types/app';
import { Data, Response } from '@/types/interfaces/auth';
import { signUpSchema } from '@/types/schema/auth';
import { useDirection } from '@/utils/helpers';
import React, { useState } from 'react';

export default function SignUpForm({ cities }: { cities: Cities[] }) {
  const [errMsg, setErrMsg] = useState('');
  const router = useRouter();
  const authData = useUserStore((state) => state.settings.auth);
  const setUserauth = useUserStore((state) => state.setUserauth);
  if (authData.phone?.length != 9) redirect('/sign-in');

  const submitForm = async (formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
    const result = signUpSchema.safeParse({ ...data, phone: authData.phone });
    if (!result.success) {
      setErrMsg(result.error.errors[0].message);
      return;
    }
    const res: Response<Data> = await signUp(result?.data);
    if (!res.status) {
      setErrMsg(res.message);
    }
    if (!res?.data?.is_active && res?.data?.is_available) {
      setUserauth({
        otp: res.data?.user?.otp,
        phone: res.data?.user?.phone,
      });
      router.push('/otp');
    }
  };

  return (
    <>
      <form action={submitForm} className="flex max-h-[90vh] flex-col gap-2 overflow-auto px-4">
        <div>
          <p className="py-4 text-xl font-semibold">الأسم الكامل</p>
          <Input name="name" className="px-5 py-9 text-xl" placeholder="أدخل اسمك كاملاً" />
        </div>
        <div>
          <p className="py-4 text-xl font-semibold">البريد الإلكتروني (اختياري)</p>
          <Input name="email" className="px-5 py-9 text-xl" placeholder="أدخل بريدك الإلكتروني" />
        </div>
        <div>
          <p className="py-4 text-xl font-semibold">المدينة</p>
          <Select name="city_id">
            <SelectTrigger dir={useDirection()} className={cn('px-5 py-9 text-xl')}>
              <SelectValue className="text-xl text-gray-200" placeholder="اختار مدينتك" />
            </SelectTrigger>
            <SelectContent dir={useDirection()}>
              <SelectGroup>
                {cities?.map((city) => (
                  <SelectItem className="text-xl" value={city.id.toString()} key={city.id}>
                    {city.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <FormError error={errMsg} />
        <div className="my-2 text-right text-sm font-bold">
          بإنشاء حسابك أنت توافق على{' '}
          <Link prefetch={true} href="/terms" className="text-darkBlue underline">
            شروط وأحكام
          </Link>{' '}
          رصين
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <LoadingButton
            content="انشاء حساب"
            loader="انشاء حساب..."
            style="ml-auto w-full rounded-lg bg-darkBlue py-6 text-base text-white xl:py-9 xl:text-2xl"
          />
        </div>
      </form>
    </>
  );
}
