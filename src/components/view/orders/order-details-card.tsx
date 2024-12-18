import React from 'react';
import { PictureDialog } from '../home/companies/picture-dialog';
import { statusColorMap } from './cards/order-card';
import OrderButton from '@/components/common/order-button';
import { Textarea } from '@/components/ui/textarea';
import { useTranslations } from 'next-intl';

const OrderDetailsCard = ({
  subCategory,
  city,
  desc,
  images,
  status,
  label,
}: {
  subCategory: any[];
  city: string;
  desc: string;
  images: any[];
  status: keyof typeof statusColorMap;
  label: string;
}) => {
  const t = useTranslations('OrderDetails'); 

  return (
    <div className="flex flex-col gap-8 rounded-2xl bg-[#FAFAFA] p-8 py-12 xl:mx-11">
      <div className="flex justify-between text-lg">
        <h1>{t('orderDetails')}</h1>
        <OrderButton status={statusColorMap[status]} label={label} />
      </div>
      <div className="flex gap-3">
        <span className="text-lg text-gray-400">{t('selectedService')}:</span>
        {subCategory?.map((sub, index) => (
          <h1 key={index} className="text-lg font-bold">
            {sub.name},
          </h1>
        ))}
      </div>
      <div className="flex gap-3">
        <span className="text-lg text-gray-400">{t('city')}:</span>
        <h1 className="text-lg font-bold">{city}</h1>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-lg text-gray-400">{t('orderDescription')}:</span>
        <Textarea disabled className="h-52 max-h-64 cursor-none" value={desc || ''} />
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-lg text-gray-400">{t('attachedImages')}:</span>
        <div className="grid w-full grid-cols-4 gap-4 lg:w-[90%]">
          <PictureDialog images={images?.map((image) => ({ img: image.img }))} />
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsCard;
