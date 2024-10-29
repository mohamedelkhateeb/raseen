import { options } from '@/app/api/auth/[...nextauth]/options';
import OrderViewPage from '@/components/view/orders/order-view-form-page';
import { redirect } from '@/i18n/routing';
import { searchParamsCache } from '@/utils/searchparams';
import { getServerSession } from 'next-auth';
import React from 'react';

const OrderPage = async ({ searchParams }: { searchParams: Record<string, string> }) => {
  const session = await getServerSession(options);
  if (!session) {
    redirect('/sign-in');
  }
  searchParamsCache.parse(searchParams);
  return <OrderViewPage />;
};

export default OrderPage;
