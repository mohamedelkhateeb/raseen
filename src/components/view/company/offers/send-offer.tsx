import { Button, buttonVariants } from '@/components/ui/button';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useRouter } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { sendOffer } from '@/services/companyService';
import { formatInputPrice } from '@/utils/numsFormatter';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const SendOffer = ({ order_id }: { order_id: number }) => {
  const router = useRouter();
  const [data, setData] = useState({ price: '', note: '' });
  const handleSubmit = async (formData: FormData) => {
    formData.append('order_id', order_id?.toString());
    const res = await sendOffer(formData);
    if (res?.status) {
      toast.success('تم ارسال العرض بنجاح');
      router.push('/company/offers');
    } else {
      toast.error(res?.message || 'حدث خطأ، حاول مرة اخرى');
    }
  };

  return (
    <Dialog>
      <DialogTrigger className={cn(buttonVariants({ variant: 'default' }), 'w-full bg-darkBlue py-8 lg:text-xl xl:text-2xl')}>
        تقديم عرض
      </DialogTrigger>
      <DialogContent className="w-3/4 border-none p-12 lg:w-1/2">
        <DialogDescription className="hidden"></DialogDescription>
        <DialogTitle className="text-center text-2xl font-bold"> العرض المقدم للطلب رقم {order_id} - أرسل العرض</DialogTitle>
        <form action={handleSubmit}>
          <div className="relative w-full">
            <p className="py-4 text-xl font-semibold">السعر المقترح</p>
            <Input
              required
              value={formatInputPrice(data?.price)}
              type="number"
              className="rounded-2xl border-2 px-5 py-9 text-xl"
              placeholder="اكتب السعر"
              onChange={(e) => setData({ ...data, price: e.target.value })}
              name="price"
            />
            <span className="absolute bottom-7 end-4 lg:bottom-6">ر.س</span>
          </div>
          <div className="col-span-2 grid w-full gap-1.5">
            <p className="py-4 text-xl font-semibold">كتابة تفاصيل العرض (اختياري)</p>
            <Textarea name="note" className="h-[200px] rounded-2xl border-2 p-6 text-2xl" placeholder="كتابة وصف للطلب ان وجد" id="message" />
          </div>
          <div className="col-span-2 mt-8 flex flex-col gap-4">
            <LoadingButton content="ارسال" loader="ارسال..." style="mr-auto rounded-2xl bg-darkBlue px-8 py-9 text-2xl text-white lg:w-1/4" />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SendOffer;
