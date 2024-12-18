import { Breadcrumbs } from '@/components/common/breadcrumd';
import React from 'react';
import OrderForm from './order-form';
import { TbSmartHome } from 'react-icons/tb';
import { getCategories } from '@/services/companyService';
import { getSubCategories } from '@/services/homeService';
import { searchParamsCache } from '@/utils/searchparams';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

const OrderViewPage = async () => {
  const t = await getTranslations();
  const items = [
    { title: <TbSmartHome size={30} color="#EA8D09" />, link: '/' },
    { title: t('home'), link: '/' },
    { title: t('createOrder'), link: '/orders/new' },
  ];

  const CatNum = searchParamsCache.get('category');
  const [categories, subCategories] = await Promise.all([getCategories(), getSubCategories(CatNum)]);

  return (
    <div className="flex flex-col gap-4 px-10">
      <Breadcrumbs items={items} />
      <div className="gap mt-5 flex flex-col gap-8">
        <h1 className="text-3xl font-bold">{t('createOrder')}</h1>
        <h2 className="text-2xl font-semibold text-darkBlue">{t('enterDetails')}</h2>{' '}
      </div>
      <OrderForm categories={categories} subCategories={subCategories} />
    </div>
  );
};

export default OrderViewPage;
