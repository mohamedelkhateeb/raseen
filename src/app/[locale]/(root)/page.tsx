import { options } from '@/app/api/auth/[...nextauth]/options';
import HomeView from '@/components/view/home/home-view-page';
import { redirect } from '@/i18n/routing';
import { searchParamsCache } from '@/utils/searchparams';
import React from 'react';

const Home = async ({ searchParams }: { searchParams: Record<string, string> }) => {
  searchParamsCache.parse(searchParams);
  return <HomeView />;
};

export default Home;
