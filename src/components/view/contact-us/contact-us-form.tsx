'use client';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import toast from 'react-hot-toast';
import { contactUs } from '@/services/homeService';
import { useRouter } from '@/i18n/routing';
import { useDirection } from '@/utils/helpers';

export default function ContactUsForm() {
  const router = useRouter();
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
      router.push('/');
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
