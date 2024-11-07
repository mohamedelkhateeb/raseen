'use client';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import { Input } from '@/components/ui/input';
import { useRouter } from '@/i18n/routing';
import React, { useState } from 'react';
import { MdAttachFile, MdOutlineDelete } from 'react-icons/md';
import DropdownMenu from '../../home/companies/dropdown';
import { IoLocationOutline } from 'react-icons/io5';
import { useQueryState } from 'nuqs';
import Popup from '@/components/common/popup';
import GoogleMap from '../../maps/map';
import { useImageUpload } from '@/hooks/useImageUpload';
import { Select, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useDirection } from '@/utils/helpers';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import { SubCategory } from '@/types/models/home.model';
import FormError from '@/components/common/form-error';
import { companySignUp } from '@/services/authService';
import useUserStore from '@/lib/store/userStore';

type AddCompany = {
  name: string;
  email: string;
  owner: string;
  address: string;
  owner_img: string | null;
  lat: string | null;
  lng: string | null;
  location: string;
  commercial_img: string | null;
  min: string;
  max: string;
  sub_categories: SubCategory[];
};

export default function SignUpCompanyForm({ subCategories }: { subCategories: SubCategory[] }) {
  const {
    imageUrl: commercialImgUrl,
    error: commercialError,
    handleImageChange: handleCommercialChange,
    resetImage: resetCommercial,
  } = useImageUpload();
  const { imageUrl: ownerImgUrl, error: ownerError, handleImageChange: handleOwnerChange, resetImage: resetOwner } = useImageUpload();
  const setUserauth = useUserStore((state) => state.setUserauth);
  const [errMsg, setErrMsg] = useState('');
  const [lat] = useQueryState('lat');
  const [lang] = useQueryState('lang');
  const [data, setData] = useState<AddCompany>({
    name: '',
    email: '',
    owner: '',
    address: '',
    owner_img: ownerImgUrl,
    lat: lat,
    lng: lang,
    location: '',
    commercial_img: commercialImgUrl,
    min: '',
    max: '',
    sub_categories: [],
  });
  const router = useRouter();
  const submitForm = async (formData: FormData) => {
    setErrMsg('');
    formData.append('lat', lat?.toString() || '0');
    formData.append('lng', lang?.toString() || '0');
    formData.append('sub_categories', JSON.stringify(data.sub_categories));
    if (!commercialImgUrl || !ownerImgUrl) {
      setErrMsg('الرجاء رفع صورة السجل التجاري وصورة هوية المالك');
      return;
    }
    console.log(Object.fromEntries(formData));
    const res = await companySignUp(formData);
    console.log(res);

    if (!res.status) {
      setErrMsg(res.message);
    }
    if (res.status) {
      setUserauth({
        otp: res.data?.user?.otp,
        phone: res.data?.user?.phone,
      });
      router.push('/otp');
    }
  };

  return (
    <>
      <form action={submitForm} className="my-8 grid gap-5 overflow-auto rounded-2xl border-2 bg-white p-6 lg:grid-cols-2 lg:gap-10 lg:p-12">
        <input type="hidden" name="device_key" value={'device_key'} />
        <input type="hidden" name="location" value={'location'} />
        <div>
          <p className="py-4 text-xl font-semibold">الأسم الكامل</p>
          <Input required name="name" className="rounded-2xl border-2 px-5 py-9 text-xl" placeholder="أدخل اسمك كاملاً" />
        </div>
        <div>
          <p className="py-4 text-xl font-semibold">البريد الإلكتروني </p>
          <Input required name="email" className="rounded-2xl border-2 px-5 py-9 text-xl" placeholder="أدخل بريدك الإلكتروني" />
        </div>
        <div>
          <p className="py-4 text-xl font-semibold">اسم مالك الشركة</p>
          <Input required name="owner" className="rounded-2xl border-2 px-5 py-9 text-xl" placeholder="اسم مالك الشركة" />
        </div>
        <div>
          <p className="py-4 text-xl font-semibold">رقم الجوال</p>
          <Input required name="phone" className="rounded-2xl border-2 px-5 py-9 text-xl" placeholder="رقم الجوال" maxLength={9} />
        </div>
        <div className='col-span-2'>
          <DropdownMenu dataFilter={data} setDataFilter={setData} />
        </div>
        <div className="col-span-2 grid w-full gap-1.5">
          <p className="py-7 font-semibold lg:text-xl">صورة السجل التجاري</p>
          <label htmlFor="upload-commercial" className="text-medium relative cursor-pointer rounded-2xl border-2 px-5 py-6">
            صورة السجل التجاري
            <MdAttachFile className="absolute bottom-5 end-4 rotate-45 text-3xl" />
            {commercialImgUrl && <img src={commercialImgUrl} alt="Commercial Image" className="mt-2 max-h-64 w-full object-contain" />}
            {commercialImgUrl && <MdOutlineDelete onClick={resetCommercial} className="cursor-pointer" color="red" size={40} />}
          </label>
          <input type="file" id="upload-commercial" className="hidden" accept="image/*" name="commercial_img" onChange={handleCommercialChange} />
          {commercialError && <p className="text-red-500">{commercialError}</p>}
        </div>
        <div className="col-span-2 mt-6 grid w-full gap-1.5">
          <p className="py-4 font-semibold lg:text-xl">صورة هوية المالك</p>
          <label htmlFor="upload-owner" className="text-medium relative cursor-pointer rounded-2xl border-2 px-5 py-6">
            صورة هوية المالك
            <MdAttachFile className="absolute bottom-5 end-4 rotate-45 text-3xl" />
            {ownerImgUrl && <img src={ownerImgUrl} alt="Owner Image" className="mt-2 max-h-64 w-full object-contain" />}
            {ownerImgUrl && <MdOutlineDelete onClick={resetOwner} className="cursor-pointer" color="red" size={40} />}
          </label>
          <input type="file" id="upload-owner" className="hidden" accept="image/*" name="owner_img" onChange={handleOwnerChange} />
          {ownerError && <p className="text-red-500">{ownerError}</p>}
        </div>
        <Popup
          style="w-[90%] h-[95vh] overflow-y-auto"
          title="يرجى تحديد الموقع على الخريطة"
          trigger={
            <div className="grid w-full gap-1.5">
              <p className="py-4 font-semibold lg:text-xl">الموقع</p>
              <div className="text-medium relative cursor-pointer rounded-2xl border-2 px-5 py-6">
                {lang && lat ? <p>{`${lang}, ${lat}`}</p> : <p>موقع الشركة</p>}
                <IoLocationOutline className="absolute bottom-5 end-4 text-3xl" />
              </div>
            </div>
          }
        >
          <GoogleMap />
        </Popup>
        <div>
          <p className="py-4 text-xl font-semibold">{'الخدمات'}</p>
          <Select>
            <SelectTrigger dir={useDirection()} className={cn('rounded-2xl border-2 px-5 py-9 text-xl')}>
              <SelectValue
                className="text-xl text-gray-200"
                placeholder={
                  data.sub_categories.length > 0
                    ? data.sub_categories
                        ?.map((sub) => {
                          const selectedOption = subCategories.find((option) => option.id == sub.id);
                          return selectedOption ? selectedOption.name : '';
                        })
                        .join(', ')
                    : 'اختر الخدمات'
                }
              />
            </SelectTrigger>
            <SelectContent className="flex flex-col gap-10" dir={useDirection()}>
              {subCategories?.map((option, index) => (
                <div dir={useDirection()} key={index.toString()} className="my-4 flex items-center justify-between gap-4 p-2 text-xl">
                  <label
                    htmlFor={index.toString()}
                    className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option?.name}
                  </label>
                  <Checkbox
                    className="h-4 w-4"
                    id={index.toString()}
                    onCheckedChange={() => {
                      const isSelected = data.sub_categories.some((sub) => sub.id == option.id);
                      setData({
                        ...data,
                        sub_categories: isSelected
                          ? data.sub_categories.filter((sub) => sub.id !== option.id)
                          : ([...data.sub_categories, { id: option.id }] as any),
                      });
                    }}
                    checked={data.sub_categories.some((sub: any) => sub.id == option.id.toString())}
                  />
                </div>
              ))}
            </SelectContent>
          </Select>
        </div>{' '}
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
        <div className="col-span-2">
          <FormError error={errMsg} />
        </div>
        <div className="col-span-2 mt-8 flex items-start justify-start gap-4">
          <LoadingButton
            content="انشاء حساب"
            loader="انشاء حساب..."
            style=" w-1/2 mr-auto rounded-lg bg-darkBlue py-6 text-base text-white xl:py-9 xl:text-2xl"
          />
        </div>
      </form>
    </>
  );
}
