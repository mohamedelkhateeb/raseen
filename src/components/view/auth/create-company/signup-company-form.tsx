'use client';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import { Input } from '@/components/ui/input';
import { Link, useRouter } from '@/i18n/routing';
import React, { useState } from 'react';
import MultiImageUpload from '../../orders/multi-image-upload';
import { MdAttachFile } from 'react-icons/md';
import DropdownMenu from '../../home/companies/dropdown';
import { LocateIcon } from 'lucide-react';
import { TbLocationQuestion } from 'react-icons/tb';
import { IoLocationOutline } from 'react-icons/io5';

export default function SignUpCompanyForm() {
  const [errMsg, setErrMsg] = useState('');
  const [data, setData] = useState({
    name: '',
    email: '',
    owner: '',
    address: '',
    owner_img: null,
    lat: 0,
    lng: 0,
    location: '',
    commercial_img: null,
    min: '',
    max: '',
  });
  const router = useRouter();

  const submitForm = async (formData: FormData) => {
    console.log(Object.fromEntries(formData));
  };

  return (
    <>
      <form action={submitForm} className="my-8 grid gap-5 overflow-auto rounded-2xl border-2 bg-white p-6 lg:grid-cols-2 lg:gap-10 lg:p-12">
        <div>
          <p className="py-4 text-xl font-semibold">الأسم الكامل</p>
          <Input name="name" className="rounded-2xl border-2 px-5 py-9 text-xl" placeholder="أدخل اسمك كاملاً" />
        </div>
        <div>
          <p className="py-4 text-xl font-semibold">البريد الإلكتروني </p>
          <Input name="email" className="rounded-2xl border-2 px-5 py-9 text-xl" placeholder="أدخل بريدك الإلكتروني" />
        </div>
        <div>
          <p className="py-4 text-xl font-semibold">اسم مالك الشركة</p>
          <Input name="owner" className="rounded-2xl border-2 px-5 py-9 text-xl" placeholder="اسم مالك الشركة" />
        </div>
        <DropdownMenu dataFilter={data} setDataFilter={setData} />
        <div className="grid w-full gap-1.5">
          <p className="py-4 font-semibold lg:text-xl">صورة السجل التجاري</p>
          <label htmlFor="upload" className="text-medium relative cursor-pointer rounded-2xl border-2 px-5 py-6">
            صورة السجل التجاري
            <MdAttachFile className="absolute bottom-5 end-4 rotate-45 text-3xl" />
          </label>
          <input type="file" id="upload" className="hidden" accept="image/*" name="commercial_img" />
        </div>
        <div className="grid w-full gap-1.5">
          <p className="py-4 font-semibold lg:text-xl">صورة هوية المالك</p>
          <label htmlFor="upload" className="text-medium relative cursor-pointer rounded-2xl border-2 px-5 py-6">
            صورة هوية المالك
            <MdAttachFile className="absolute bottom-5 end-4 rotate-45 text-3xl" />
          </label>
          <input type="file" id="upload" className="hidden" accept="image/*" name="owner_img" />
        </div>
        <div className="col-span-2 grid w-full gap-1.5">
          <p className="py-4 font-semibold lg:text-xl">الموقع</p>
          <Link href="/map" className="text-medium relative cursor-pointer rounded-2xl border-2 px-5 py-6">
            الموقع
            <IoLocationOutline className="absolute bottom-5 end-4 text-3xl" />
          </Link>
        </div>
        <div className="col-span-2 grid w-full gap-1.5">
          <p>تحديد الميزانية</p>
          <div className="col-span-2 flex items-center gap-5 lg:gap-10">
            <div className="relative w-full">
              <Input
                value={data.min.replace(/(\d{3})(?=\d)/g, '$1,')}
                type="text"
                className="rounded-2xl border-2 px-5 py-9 text-xl"
                placeholder="اكتب السعر"
                onChange={(e) => setData({ ...data, min: e.target.value })}
                maxLength={8}
              />
              <span className="absolute bottom-7 end-4 lg:bottom-6">ر.س</span>
            </div>
            <p>بين</p>
            <div className="relative w-full">
              <Input
                maxLength={11}
                value={data.max.replace(/(\d{3})(?=\d)/g, '$1,')}
                type="text"
                className="rounded-2xl border-2 px-5 py-9 text-xl"
                placeholder="اكتب السعر"
                onChange={(e) => setData({ ...data, max: e.target.value })}
              />
              <span className="absolute bottom-7 end-4 lg:bottom-6">ر.س</span>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <LoadingButton
            content="انشاء حساب"
            loader="انشاء حساب..."
            style="mr-auto w-full rounded-lg bg-darkBlue py-6 text-base text-white xl:py-9 xl:text-2xl"
          />
        </div>
      </form>
    </>
  );
}
