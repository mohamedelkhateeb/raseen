'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import GenericDropdownMenu from '@/components/common/dropdown-menu';
import { Textarea } from '@/components/ui/textarea';
import { MdAttachFile } from 'react-icons/md';
import Image from 'next/image';
import CardImg from '../../../../public/10802151_4529819 1.svg';
import Popup from '@/components/common/popup';
import { useState } from 'react';
import DropdownMenu from '../companies/dropdown';
import { Category } from '@/types/models/home.model';
import { useDirection } from '@/utils/helpers';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { parseAsInteger, useQueryState } from 'nuqs';
import MultiImageUpload from './multi-image-upload';
import { Order } from '@/types/models/order.model';
import { set } from 'zod';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import { createOrder } from '@/services/orderService';
import toast from 'react-hot-toast';

export default function OrderForm({ categories, subCategories }: { categories: Category[]; subCategories: Category[] }) {
  const [category, setCategory] = useQueryState('category', parseAsInteger.withOptions({ shallow: false }).withDefault(1));
  const [data, setData] = useState<Order>({
    max: '',
    min: '',
    notes: '',
    city_id: '',
    sub_categories: [],
    category_id: category.toString() || '1',
    images: [],
  });
  const [isPopupOpen, setIsPopupOpen] = useState({ open: false, id: 0 });

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('category_id', data.category_id);
    formData.append('min', data.min);
    formData.append('max', data.max);
    formData.append('note', data.notes);
    formData.append('city_id', data.city_id);
    formData.append('sub_categories', JSON.stringify(data.sub_categories));
    data.images.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    });
    const res = await createOrder(formData);

    if (res?.status) {
      setIsPopupOpen({ open: true, id: 1 });
    } else {
      toast.error(res?.message);
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
              setData({ ...data, category_id: value });
              setCategory(parseInt(value));
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
              <SelectValue className="text-xl text-gray-200" placeholder={' القسم الفرعي'} />
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
                    onCheckedChange={() => setData({ ...data, sub_categories: [...data.sub_categories, { id: option.id.toString() }] })}
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
              href="/orders/1"
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
