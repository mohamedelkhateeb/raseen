import { options } from '@/app/api/auth/[...nextauth]/options';
import FavoriteCompaniesViewPage from '@/components/view/home/companies/favorite-companies-view-page';
import { redirect } from '@/i18n/routing';
import { getServerSession } from 'next-auth';
import React from 'react';

const Page = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect('/sign-in');
  }
  return <FavoriteCompaniesViewPage />;
};

export default Page;
