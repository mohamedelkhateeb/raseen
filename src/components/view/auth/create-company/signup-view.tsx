import { Breadcrumbs } from '@/components/common/breadcrumd';
import React from 'react';
import { TbSmartHome } from 'react-icons/tb';
import { getProfile } from '@/services/authService';
import SignUpCompanyForm from './signup-company-form';
import { getSubCategories } from '@/services/homeService';
import { searchParamsCache } from '@/utils/searchparams';
import { getCategories } from '@/services/companyService';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

const SignUpCompanyView = async () => {
  const t = await getTranslations('companySignup');
  const items = [
    { title: <TbSmartHome size={30} color="#EA8D09" />, link: '/' },
    { title: t('home'), link: '/' },
    { title: t('createCompanyAccount'), link: '/' },
  ];

  const category = searchParamsCache.get('category');
  const [subCategories, categories] = await Promise.all([getSubCategories(category), getCategories()]);
  return (
    <div className="flex flex-col gap-4 px-10">
      <Breadcrumbs items={items} />
      <SignUpCompanyForm subCategories={subCategories} categories={categories} />
    </div>
  );
};

export default SignUpCompanyView;
