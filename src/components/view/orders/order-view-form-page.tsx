import { Breadcrumbs } from '@/components/common/breadcrumd';
import React from 'react';
import OrderForm from './order-form';
import { TbSmartHome } from 'react-icons/tb';
import { getCategories } from '@/services/companyService';
import { getSubCategories } from '@/services/homeService';
import { searchParamsCache } from '@/utils/searchparams';

const OrderViewPage = async () => {
  const items = [
    { title: <TbSmartHome size={30} color="#EA8D09" />, link: '/' },
    { title: 'الرئيسية', link: '/' },
    { title: 'إنشاء طلب', link: '/orders/new' },
  ];

  const CatNum = searchParamsCache.get('category');
  const categories = await getCategories();
  const subCategories = await getSubCategories(CatNum);
  return (
    <div className="flex flex-col gap-4 px-10">
      <Breadcrumbs items={items} />
      <div className="gap mt-5 flex flex-col gap-8">
        <h1 className="text-3xl font-bold">إنشاء طلب</h1>
        <h2 className="text-2xl font-semibold text-darkBlue">برجاء إدخال البيانات التالية لإنشاء الطلب الخاص بك</h2>
      </div>
      <OrderForm categories={categories} subCategories={subCategories} />
    </div>
  );
};

export default OrderViewPage;
