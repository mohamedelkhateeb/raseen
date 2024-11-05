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
import { Order } from '@/types/models/order.model';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import { createOrder } from '@/services/orderService';
import toast from 'react-hot-toast';
import { contactUs } from '@/services/homeService';

export default function ContactUsForm() {
  const [category, setCategory] = useQueryState('category', parseAsString.withOptions({ shallow: false }).withDefault('0'));
  const [data, setData] = useState<{ name: string; email: string; msg: string; resson: string; type: string }>({
    name: '',
    email: '',
    msg: '',
    resson: '',
    type: 'user',
  });
  const handleSubmit = async (formData: FormData) => {
    formData.append('type', data.type);
    console.log(Object.fromEntries(formData));
    const res = await contactUs(formData);
    console.log(res);
    if (res?.status) {
      toast.success('تم ارسال شكواك بنجاح');
    } else {
      toast.error(res?.message || 'حدث خطأ، حاول مرة اخرى');
    }
  };

  return (
    <>
      <form action={handleSubmit} className="my-8 grid gap-5 overflow-auto rounded-2xl border-2 bg-white p-6 lg:grid-cols-2 lg:gap-10 lg:p-12">
        <div className="flex w-full flex-col gap-3">
          <p className="text-xl font-semibold">الاسم كامل</p>
          <Input type="text" required name="name" className="rounded-2xl border-2 px-5 py-9 text-xl" placeholder="اكتب اسمك بالكامل" />
        </div>
        <div className="flex w-full flex-col gap-3">
          <p className="text-xl font-semibold">الايميل</p>
          <Input type="text" required name="email" className="rounded-2xl border-2 px-5 py-9 text-xl" placeholder="اكتب بريدك الالكتروني" />
        </div>
        <div className="col-span-2">
          <p className="py-4 text-xl font-semibold"> سبب التواصل</p>
          <Select required name="resson" onValueChange={(value) => setData({ ...data, resson: value })}>
            <SelectTrigger dir={useDirection()} className={cn('rounded-2xl border-2 px-5 py-9 text-xl')}>
              <SelectValue className="text-xl text-gray-200" placeholder="اختر سبب التواصل" />
            </SelectTrigger>
            <SelectContent className="flex flex-col gap-10" dir={useDirection()}>
              {[
                { label: 'شكوى', value: 'complaint' },
                { label: 'اقتراح', value: 'suggestion' },
              ]?.map((option, index) => (
                <SelectItem key={index} className="text-xl" value={option?.value}>
                  {option?.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-2 grid w-full gap-1.5">
          <p className="py-4 text-xl font-semibold">نص الاقتراح / الشكوى</p>
          <Textarea className="h-[200px] rounded-2xl border-2 p-6 text-2xl" placeholder="أكتب هنا....." id="message" name="msg" required />
        </div>
        <div className="col-span-2 mt-8 flex flex-col gap-4">
          <LoadingButton content="ارسال" loader="ارسال..." style="mr-auto rounded-2xl bg-darkBlue px-8 py-9 text-2xl text-white lg:w-1/4" />
        </div>
      </form>
    </>
  );
}
