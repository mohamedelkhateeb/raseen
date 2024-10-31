'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import CardImg from '../../../../public/10802151_4529819 1.svg';
import Popup from '@/components/common/popup';
import { useState } from 'react';
import DropdownMenu from '../home/companies/dropdown';
import { Category } from '@/types/models/home.model';
import { useDirection } from '@/utils/helpers';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { parseAsString, useQueryState } from 'nuqs';
import MultiImageUpload from './multi-image-upload';
import { Order } from '@/types/models/order.model';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import { createOrder } from '@/services/orderService';
import toast from 'react-hot-toast';

export default function OrderForm({ categories, subCategories }: { categories: Category[]; subCategories: Category[] }) {
  const [category, setCategory] = useQueryState('category', parseAsString.withOptions({ shallow: false }).withDefault('0'));
  const [data, setData] = useState<Order & { imagesToUpload: any[] }>({
    max: '',
    min: '',
    notes: '',
    city_id: '',
    sub_categories: [],
    category_id: category.toString() || '1',
    images: [],
    imagesToUpload: [],
  });
  const [isPopupOpen, setIsPopupOpen] = useState({ open: false, id: 0 });

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('category_id', category);
    formData.append('min', data.min);
    formData.append('max', data.max);
    formData.append('note', data.notes);
    formData.append('city_id', data.city_id);
    formData.append('sub_categories', JSON.stringify(data.sub_categories));
    data.imagesToUpload.forEach((image, index) => {
      formData.append(`images[${index}][img]`, image);
    });
    console.log(Object.fromEntries(formData));
    const res = await createOrder(formData);
    console.log(res);
    if (res?.status) {
      setIsPopupOpen({ open: true, id: res?.data?.id });
    } else {
      toast.error(res?.message || 'حدث خطأ، حاول مرة اخرى');
    }
  };

  return (
    <>
      <form action={handleSubmit} className="my-8 grid gap-5 overflow-auto rounded-2xl border-2 bg-white p-6 lg:grid-cols-2 lg:gap-10 lg:p-12">
        <div>
          <p className="py-4 text-xl font-semibold">{'القسم الرئيسي'}</p>
          <Select
            required
            onValueChange={(value) => {
              setCategory(value);
              setData({ ...data, sub_categories: [] });
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
        <div>
          <p className="py-4 text-xl font-semibold">{'القسم الفرعي'}</p>
          <Select>
            <SelectTrigger dir={useDirection()} className={cn('rounded-2xl border-2 px-5 py-9 text-xl')}>
              <SelectValue
                className="text-xl text-gray-200"
                placeholder={
                  data.sub_categories.length > 0
                    ? data.sub_categories
                        ?.map((sub) => {
                          const selectedOption = subCategories.find((option) => option.id.toString() === sub.id);
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
                    {option.name}
                  </label>
                  <Checkbox
                    className="h-4 w-4"
                    id={index.toString()}
                    onCheckedChange={() => {
                      const isSelected = data.sub_categories.some((sub) => sub.id === option.id.toString());
                      setData({
                        ...data,
                        sub_categories: isSelected
                          ? data.sub_categories.filter((sub) => sub.id !== option.id.toString())
                          : [...data.sub_categories, { id: option.id.toString() }],
                      });
                    }}
                    checked={data.sub_categories.some((sub: any) => sub.id == option.id.toString())}
                  />
                </div>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <DropdownMenu dataFilter={data} setDataFilter={setData} triggerStyle="rounded-2xl border-2 px-5 py-9 text-xl" />
        </div>
        <MultiImageUpload data={data} setData={setData} />
        <div className="col-span-2 grid w-full gap-1.5">
          <p className="py-4 text-xl font-semibold">تفاصيل الطلب (اختياري)</p>
          <Textarea
            className="h-[200px] rounded-2xl border-2 p-6 text-2xl"
            placeholder="كتابة وصف للطلب ان وجد"
            id="message"
            onChange={(e) => setData({ ...data, notes: e.target.value })}
          />
        </div>
        <p className="text-xl font-semibold">تحديد الميزانية (اختياري)</p>
        <div className="col-span-2 flex items-center gap-5 lg:gap-10">
          <div className="relative w-full">
            <Input
              type="number"
              className="rounded-2xl border-2 px-5 py-9 text-xl"
              placeholder="اكتب السعر"
              onChange={(e) => setData({ ...data, min: e.target.value })}
            />
            <span className="absolute bottom-7 end-4 lg:bottom-6">ر.س</span>
          </div>
          <p>بين</p>
          <div className="relative w-full">
            <Input
              type="number"
              className="rounded-2xl border-2 px-5 py-9 text-xl"
              placeholder="اكتب السعر"
              onChange={(e) => setData({ ...data, max: e.target.value })}
            />
            <span className="absolute bottom-7 end-4 lg:bottom-6">ر.س</span>
          </div>{' '}
        </div>
        <div className="col-span-2 mt-8 flex flex-col gap-4">
          <LoadingButton content="ارسال" loader="ارسال..." style="mr-auto rounded-2xl bg-darkBlue px-8 py-9 text-2xl text-white lg:w-1/4" />
        </div>
      </form>
      {isPopupOpen.open && (
        <Popup defaultOpen={true} style="p-5 w-[80%] lg:w-[30%]" title="" trigger="" triggerStyle="w-full border-none p-1" description="">
          <div className="flex flex-col items-center gap-3">
            <Image src={CardImg} alt="Error" />
            <h1 className="text-2xl font-bold">تم نشر طلبك بنجاح</h1>
            <p className="text-sm text-gray-600">ستتلقى عروض الشركات في تفاصيل طلبك</p>
            <Link
              href={`/orders/${isPopupOpen?.id}`}
              className={cn(buttonVariants({ variant: 'default', size: 'default' }), 'my-5 w-full bg-darkBlue px-8 py-7 text-base text-white')}
            >
              الذهاب الى تفاصيل الطلب
            </Link>
          </div>
        </Popup>
      )}
    </>
  );
}
