'use client';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import { finishOrder } from '@/services/orderService';
import React from 'react';
import toast from 'react-hot-toast';

const FinishOrder = ({ offerId }: { offerId?: number }) => {
  const handleAccept = async (formData: FormData) => {
    console.log(Object.fromEntries(formData));
    const res = await finishOrder(formData);
    console.log(res);

    if (res?.status) {
      toast.success('تم تنفيذ الطلب بنجاح');
    } else {
      toast.error('حدث خطأ، حاول مرة اخرى');
    }
  };
  return (
    <form action={handleAccept} className="flex justify-between gap-5">
      <input type="hidden" name="order_id" value={offerId} />
      <LoadingButton
        content="تاكيد تنفيذ الطلب"
        loader="تنفيذ الطلب..."
        style="mr-auto w-full rounded-xl bg-darkBlue px-8 text-base text-white sm:py-9 sm:text-xl rounded-full"
      />
    </form>
  );
};

export default FinishOrder;
