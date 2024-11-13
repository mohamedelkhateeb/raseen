import StaticsViewPage from '@/components/view/company/statics/statics-view-page';
import { searchParamsCache } from '@/utils/searchparams';
import React from 'react';

const Page = ({ searchParams }: { searchParams: Record<string, string> }) => {
  searchParamsCache.parse(searchParams);
  return <StaticsViewPage />;
};

export default Page;
