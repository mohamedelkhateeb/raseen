'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import Popup from '@/components/common/popup';
import Image from 'next/image';
import RatingStars from '@/components/common/rating-stars';
import { Textarea } from '@/components/ui/textarea';
import com from '../../../../public/comoff.svg';
import { cn } from '@/lib/utils';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import { DialogClose } from '@/components/ui/dialog';
import { rateCompany } from '@/services/companyService';
import toast from 'react-hot-toast';
const RateForm = ({ companyId }: { companyId?: number }) => {
  const handleRatingChange = async (formData: FormData) => {
    console.log(Object.fromEntries(formData));
    const res = await rateCompany(formData);
    if (res?.status) {
      toast.success('تم ارسال التقييم بنجاح');
    } else {
      toast.error('حدث خطأ، حاول مرة اخرى');
    }
  };
  return (
    <Popup
      defaultOpen={false}
      style="p-7 w-[400px] lg:w-[800px] max-h-[96vh] overflow-y-auto"
      title=""
      trigger={
        <Button size="lg" variant="default" className="rounded-full bg-darkBlue px-10 py-8 text-xl">
          تقييم الشركة
        </Button>
      }
      triggerStyle="w-full border-none p-1"
      description=""
    >
      <form action={handleRatingChange} className="flex flex-col items-center gap-6 py-7">
        <Image src={com} alt="company" />
        <h1 className="text-2xl font-semibold">شركة المتميز للديكور</h1>
        <p className="text-2xl text-gray-600">ما مستوى رضاك عن التعامل مع الشركة؟</p>
        <RatingStars style="w-12 h-12" />
        <div className="col-span-2 grid w-full gap-1.5">
          <p className="py-4 text-xl font-semibold">إضافة تعليق (اختياري)</p>
          <Textarea
            className="h-[200px] rounded-2xl border-2 p-6 text-2xl"
            placeholder="يرجى مشاركة تفاصيل تجربتك مع الشركة هنا...."
            id="message"
            name="msg"
          />
          <input type="hidden" name="company_id" value={companyId} />
        </div>
        <div className="flex w-full justify-between gap-5">
          <LoadingButton
            content="تم التقييم"
            loader="تقييم..."
            style="w-full rounded-xl bg-darkBlue px-8 py-12 text-xl text-white sm:py-9 xl:text-2xl"
          />
          <DialogClose
            className={cn(
              'mr-auto w-full rounded-xl border-2 border-darkBlue bg-transparent px-8 text-xl text-darkBlue hover:bg-darkBlue hover:text-white xl:text-2xl',
            )}
          >
            إلغاء{' '}
          </DialogClose>
        </div>
      </form>
    </Popup>
  );
};

export default RateForm;
