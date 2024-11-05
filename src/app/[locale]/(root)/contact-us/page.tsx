import { options } from '@/app/api/auth/[...nextauth]/options';
import ContactUsViewPage from '@/components/view/contact-us/ContactUsViewPage';
import { redirect } from '@/i18n/routing';
import { searchParamsCache } from '@/utils/searchparams';
import { getServerSession } from 'next-auth';
import React from 'react';

const OrderPage = async ({ searchParams }: { searchParams: Record<string, string> }) => {
  searchParamsCache.parse(searchParams);
  return <ContactUsViewPage />;
};

export default OrderPage;
