'use client';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import { Input } from '@/components/ui/input';
import { useRouter } from '@/i18n/routing';
import React, { useState } from 'react';
import FormError from '@/components/common/form-error';
import MultiImageUpload from '@/components/common/MultiImageUpload';
import { updateCompany } from '@/services/authService';
import toast from 'react-hot-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useDirection } from '@/utils/helpers';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import { Category, SubCategory } from '@/types/models/home.model';
import { parseAsString, useQueryState } from 'nuqs';

type AddCompany = {
  name: string;
  email: string;
  sub_categories: any[];
  category_id: string;
  min_price: string;
  price: string;
  name_ar: string;
  name_en: string;
};

export default function CompanyProfile({
  subCategories,
  categories,
  profile,
}: {
  subCategories: SubCategory[];
  categories: Category[];
  profile: any;
}) {
  const [cvs, setCvs] = useState<any[]>(profile.user?.cvs.map((cv: any) => ({ file: cv.img, preview: cv.img })));
  const [certificates, setCertificates] = useState<any[]>(profile.user?.certeficates?.map((cv: any) => ({ file: cv.img, preview: cv.img })));
  const [errMsg, setErrMsg] = useState('');
  const [cate, setCategory] = useQueryState('category', parseAsString.withOptions({ shallow: false }));
  const [data, setData] = useState<AddCompany>({
    name: profile.user?.name || '',
    name_ar: profile.user?.name_ar || '',
    name_en: profile.user?.name_en || '',
    sub_categories: profile.user?.sub_categories || [],
    email: profile?.user?.email || '',
    category_id: profile.user.category.id || '',
    min_price: profile.user?.min_price || '',
    price: profile.user?.price || '',
  });
  const router = useRouter();
  const submitForm = async (formData: FormData) => {
    setErrMsg('');
    formData.append('category_id', data?.category_id);
    formData.append('sub_categories', JSON.stringify(data?.sub_categories));
    cvs.forEach((cv, index) => {
      formData.append(`cvs[${index}][img]`, cv.file);
    });
    certificates.forEach((c, index) => {
      formData.append(`certeficates[${index}][img]`, c.file);
    });
    console.log(Object.fromEntries(formData));
    const res = await updateCompany(formData);
    console.log(res);
    if (!res?.status) {
      setErrMsg(res?.message);
    }
    if (res?.status) {
      toast.success('تم التعديل بنجاح');
      router.push('/');
    }
  };

  console.log(profile);
  return (
    <>
      <form action={submitForm} className="my-8 grid gap-5 overflow-auto rounded-2xl border-2 bg-white p-6 lg:grid-cols-2 lg:gap-10 lg:p-12">
        <input type="hidden" name="device_key" defaultValue={'device_key'} />
        <div className="col-span-2 lg:col-span-1">
          <p className="py-4 text-xl font-semibold">
            الأسم الكامل <span className="text-gray-400">{`(العربية)`}</span>{' '}
          </p>
          <Input
            defaultValue={data.name_ar}
            required
            name="name_ar"
            className="rounded-2xl border-2 px-5 py-9 text-xl"
            placeholder="أدخل اسمك باللغة العربية"
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <p className="py-4 text-xl font-semibold">
            الأسم الكامل <span className="text-gray-400">{`(الانجليزية)`}</span>{' '}
          </p>
          <Input
            defaultValue={data.name_en}
            required
            name="name_en"
            className="rounded-2xl border-2 px-5 py-9 text-xl"
            placeholder="أدخل اسمك باللغة الانجليزية"
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <p className="py-4 text-xl font-semibold">البريد الإلكتروني </p>
          <Input
            defaultValue={data.email}
            required
            name="email"
            className="rounded-2xl border-2 px-5 py-9 text-xl"
            placeholder="أدخل بريدك الإلكتروني"
          />
        </div>
        <div className="col-span-2 grid w-full gap-1.5">
          <p>تحديد الميزانية</p>
          <div className="col-span-2 flex items-center gap-5 lg:gap-10">
            <div className="relative w-full">
              <Input
                name="min_price"
                defaultValue={data.min_price.replace(/(\d{3})(?=\d)/g, '$1,')}
                type="text"
                className="rounded-2xl border-2 px-5 py-9 text-xl"
                placeholder="اكتب السعر"
                onChange={(e) => setData({ ...data, min_price: e.target.value })}
                maxLength={8}
              />
              <span className="absolute bottom-7 end-4 lg:bottom-6">ر.س</span>
            </div>
            <p>بين</p>
            <div className="relative w-full">
              <Input
                name="price"
                maxLength={11}
                defaultValue={data.price.replace(/(\d{3})(?=\d)/g, '$1,')}
                type="text"
                className="rounded-2xl border-2 px-5 py-9 text-xl"
                placeholder="اكتب السعر"
                onChange={(e) => setData({ ...data, price: e.target.value })}
              />
              <span className="absolute bottom-7 end-4 lg:bottom-6">ر.س</span>
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <p className="py-4 text-xl font-semibold">{'القسم الرئيسي'}</p>
          <Select
            value={data?.category_id.toString()}
            name="category_id"
            required
            onValueChange={(value) => {
              setCategory(value);
              setData({ ...data, sub_categories: [] });
              setData({ ...data, category_id: value });
            }}
          >
            <SelectTrigger dir={useDirection()} className={cn('rounded-2xl border-2 px-5 py-9 text-xl')}>
              <SelectValue className="text-xl text-gray-200" placeholder={' القسم الرئيسي'} />
            </SelectTrigger>
            <SelectContent className="flex flex-col gap-10" dir={useDirection()}>
              {categories?.map((option, index) => (
                <SelectItem key={index} className="text-xl" value={option.id.toString()}>
                  {option.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <p className="py-4 text-xl font-semibold">{'القسم الفرعي'}</p>
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
                    : 'القسم الفرعي'
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
