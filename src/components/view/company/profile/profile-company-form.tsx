'use client';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import { Input } from '@/components/ui/input';
import { useRouter } from '@/i18n/routing';
import React, { useState } from 'react';
import FormError from '@/components/common/form-error';
import MultiImageUpload from '@/components/common/MultiImageUpload';
import { updateCompany } from '@/services/authService';
import toast from 'react-hot-toast';

type AddCompany = {
  name: string;
  email: string;
};

export default function CompanyProfile({ profile }: { profile: any }) {
  const [cvs, setCvs] = useState<any[]>(profile.user?.cvs.map((cv: any) => ({ file: cv.img, preview: cv.img })));
  const [certificates, setCertificates] = useState<any[]>(profile.user?.certeficates?.map((cv: any) => ({ file: cv.img, preview: cv.img })));
  const [errMsg, setErrMsg] = useState('');
  const [data, setData] = useState<AddCompany>({
    name: '',
    email: '',
  });
  const router = useRouter();
  const submitForm = async (formData: FormData) => {
    formData.append("phone", "554475588");
    setErrMsg('');
    cvs.forEach((cv, index) => {
      formData.append(`cvs[${index}][img]`, cv.file);
    });
    certificates.forEach((c, index) => {
      formData.append(`certeficates[${index}][img]`, c.file);
    });
    console.log(Object.fromEntries(formData));
    const res = await updateCompany(formData);
    console.log(res);
    if (!res.status) {
      setErrMsg(res?.message);
    }
    if (res?.status) {
      toast.success('تم التعديل بنجاح');
      router.push('/');
    }
  };
  return (
    <>
      <form action={submitForm} className="my-8 grid gap-5 overflow-auto rounded-2xl border-2 bg-white p-6 lg:grid-cols-2 lg:gap-10 lg:p-12">
        <input type="hidden" name="device_key" value={'device_key'} />
        <div className="col-span-2 lg:col-span-1">
          <p className="py-4 text-xl font-semibold">الأسم الكامل</p>
          <Input
            defaultValue={profile?.user?.name}
            required
            name="name"
            className="rounded-2xl border-2 px-5 py-9 text-xl"
            placeholder="أدخل اسمك كاملاً"
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <p className="py-4 text-xl font-semibold">البريد الإلكتروني </p>
          <Input
            defaultValue={profile?.user?.email}
            required
            name="email"
            className="rounded-2xl border-2 px-5 py-9 text-xl"
            placeholder="أدخل بريدك الإلكتروني"
          />
        </div>
        <div className="col-span-2">
          <MultiImageUpload images={cvs} setImages={setCvs} label="صور التراخيص" placeholder="ارفق صور التراخيص" maxImages={6} />
        </div>
        <div className="col-span-2">
          <MultiImageUpload
            images={certificates}
            setImages={setCertificates}
            label="صور سابقة الأعمال"
            placeholder="ارفق صور سابقة الأعمال"
            maxImages={6}
          />
        </div>
        <div className="col-span-2">
          <FormError error={errMsg} />
        </div>
        <div className="col-span-2 mt-8 flex items-start justify-start gap-4">
          <LoadingButton
            content="حفظ التغيرات"
            loader="حفظ التغيرات"
            style=" w-1/2 mr-auto rounded-lg bg-darkBlue py-6 text-base text-white xl:py-9 xl:text-2xl"
          />
        </div>
      </form>
    </>
  );
}
