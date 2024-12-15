import CompanyProfile from '@/components/view/company/profile/profile-company-form';
import { getProfile } from '@/services/authService';
import { getCategories } from '@/services/companyService';
import { getSubCategories } from '@/services/homeService';
import {  searchParamsCache } from '@/utils/searchparams';
import React from 'react';

const Page = async ({ searchParams }: { searchParams: Record<string, string> }) => {
  searchParamsCache.parse(searchParams);
  const profile = await getProfile();
  const category = searchParamsCache.get('category');
  const subCategories = await getSubCategories(category);
  const categories = await getCategories();
  return <CompanyProfile profile={profile} subCategories={subCategories} categories={categories} />;
};

export default Page;
