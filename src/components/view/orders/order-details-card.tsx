import React from 'react';
import { PictureDialog } from '../companies/picture-dialog';
import { statusColorMap } from './cards/order-card';
import OrderButton from '@/components/common/order-button';

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
  return (
    <div className="flex flex-col gap-8 rounded-2xl bg-[#FAFAFA] p-8 py-12 xl:mx-11">
      <div className="flex justify-between text-lg">
        <h1>تفاصيل الطلب</h1>
        <OrderButton status={statusColorMap[status]} label={label} />
      </div>
      <div className="flex gap-3">
        <span className="text-lg text-gray-400">الخدمة المختارة:</span>
        {subCategory?.map((sub) => <h1 className="text-lg font-bold">{sub.name},</h1>)}
      </div>
      <div className="flex gap-3">
        <span className="text-lg text-gray-400">المدينة:</span>
        <h1 className="text-lg font-bold">{city}</h1>
      </div>
      <div className="flex gap-3">
        <span className="text-lg text-gray-400">وصف الطلب:</span>
        <h1 className="text-lg font-bold">{desc}</h1>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-lg text-gray-400">الصور المرفقة:</span>
        <div className="grid w-full grid-cols-4 gap-4 lg:w-[90%]">
          <PictureDialog images={images?.map((image) => ({ img: image.img }))} />
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsCard;
