'use client';

import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import { finishOrder } from '@/services/orderService';
import React from 'react';
import toast from 'react-hot-toast';
import { useTranslations } from 'next-intl';

const FinishOrder = ({ offerId }: { offerId?: number }) => {
  const t = useTranslations('FinishOrder');
  const handleAccept = async (formData: FormData) => {
    const res = await finishOrder(formData);
    if (res?.status) {
      toast.success(t('successMessage'));
    } else {
      toast.error(t('errorMessage'));
    }
  };

  return (
    <form action={handleAccept} className="flex justify-between gap-5">
      <input type="hidden" name="order_id" value={offerId} />
      <LoadingButton
        content={t('confirmButton')}
        loader={t('loadingMessage')}
        style="mr-auto w-full rounded-xl bg-darkBlue px-8 text-base text-white sm:py-9 sm:text-xl rounded-full"
      />
    </form>
  );
};

export default FinishOrder;
