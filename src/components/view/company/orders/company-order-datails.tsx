import { Breadcrumbs } from '@/components/common/breadcrumd';
import React from 'react';
import { TbSmartHome } from 'react-icons/tb';
import CopmanyOrderDetailsCard from './order-details-card';
import { CompanyOrder } from '@/types/models/company.model';
import Image from 'next/image';

const CopmanyOrderDetailsViewPage = ({ order }: { order: CompanyOrder }) => {
  const items = [
    { title: <TbSmartHome size={30} color="#EA8D09" />, link: '/' },
    { title: 'الرئيسية', link: '/company' },
    { title: 'تفاصيل الطلب', link: '' },
  ];
  return (
    <div className="flex flex-col gap-8">
      <Breadcrumbs items={items} />
      <div className="max-h flex flex-col gap-8 overflow-auto">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">معلومات العميل</h1>
          <div className="flex items-center gap-4 bg-[#FAFAFA] p-4">
            <Image src={order?.user.img} alt="Card image" className="h-20 w-32 rounded-full border-2 object-cover" width={100} height={100} />
            <h1 className="text-lg font-semibold">{order?.user?.name}</h1>
            <div className="flex gap-3">
              <h1 className="text-lg font-bold">رقم الطلب</h1>
              <span className="text-lg text-gray-400">{order?.code}</span>
            </div>
          </div>
        </div>
        <CopmanyOrderDetailsCard
          subCategory={order?.sub_categories}
          city={order?.city?.name}
          desc={order?.note}
          images={order?.images}
          category={order?.category?.name}
        />
      </div>
    </div>
  );
};

export default CopmanyOrderDetailsViewPage;
