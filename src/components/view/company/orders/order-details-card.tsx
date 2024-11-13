import React from 'react';
import { PictureDialog } from '../../home/companies/picture-dialog';
import { Textarea } from '@/components/ui/textarea';
import { BsBuildingCheck } from 'react-icons/bs';

const CopmanyOrderDetailsCard = ({
  subCategory,
  city,
  desc,
  images,
  category,
}: {
  subCategory: any[];
  city: string;
  desc: string;
  images: any[];
  category: string;
}) => {
  return (
    <div className="flex flex-col gap-8 rounded-2xl bg-[#FAFAFA] p-8 py-12">
      <h1 className="text-2xl font-bold">تفاصيل الطلب</h1>
      <div className="flex items-center gap-4 text-lg">
        <BsBuildingCheck className="mx-5 text-[30px] lg:text-[50px]" color="#004267" />
        <h1 className="text-lg font-bold">{category}</h1>
      </div>
      <div className="flex gap-3">
        <span className="text-lg text-gray-400">الخدمة المختارة:</span>
        {subCategory?.map((subItem: any) => subItem?.name).join(' - ')}
      </div>
      <div className="flex gap-3">
        <span className="text-lg text-gray-400">المدينة:</span>
        <h1 className="text-lg font-bold">{city}</h1>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-lg text-gray-400">وصف الطلب:</span>
        <Textarea disabled className="h-52 max-h-64 cursor-none" value={desc || ''} />
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

export default CopmanyOrderDetailsCard;
