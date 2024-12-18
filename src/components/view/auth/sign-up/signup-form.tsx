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
import { useTranslations } from 'next-intl'; // Import useTranslations
import React, { useState } from 'react';

export default function SignUpForm({ cities }: { cities: Cities[] }) {
  const [errMsg, setErrMsg] = useState('');
  const router = useRouter();
  const authData = useUserStore((state) => state.settings.auth);
  const setUserauth = useUserStore((state) => state.setUserauth);
  const t = useTranslations(); // Initialize the translation hook

  if (authData.phone?.length !== 9) redirect('/sign-in');

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
          <p className="py-4 text-xl font-semibold">{t('fullName')}</p>
          <Input name="name" className="px-5 py-9 text-xl" placeholder={t('enterFullName')} />
        </div>
        <div>
          <p className="py-4 text-xl font-semibold">{t('emailOptional')}</p>
          <Input name="email" className="px-5 py-9 text-xl" placeholder={t('enterEmail')} />
        </div>
        <div>
          <p className="py-4 text-xl font-semibold">{t('city')}</p>
          <Select name="city_id">
            <SelectTrigger dir={useDirection()} className={cn('px-5 py-9 text-xl')}>
              <SelectValue className="text-xl text-gray-200" placeholder={t('chooseCity')} />
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
          {t('termsAgreement')}{' '}
          <Link prefetch={true} href="/terms" className="text-darkBlue underline">
            {t('termsAndConditions')}
          </Link>{' '}
          {t('companyName')}
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <LoadingButton
            content={t('createAccount')}
            loader={t('creatingAccount')}
            style="ml-auto w-full rounded-lg bg-darkBlue py-6 text-base text-white xl:py-9 xl:text-2xl"
          />
        </div>
      </form>
    </>
  );
}
