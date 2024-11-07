import { Breadcrumbs } from '@/components/common/breadcrumd';
import React from 'react';
import { TbSmartHome } from 'react-icons/tb';
import { getProfile } from '@/services/authService';
import SignUpCompanyForm from './signup-company-form';
import { getSubCategories } from '@/services/homeService';

const SignUpCompanyView = async () => {
  const items = [
    { title: <TbSmartHome size={30} color="#EA8D09" />, link: '/' },
    { title: 'الرئيسية', link: '/' },
    { title: 'انشاء حساب كشركة', link: '/' },
  ];
  const subCategories = await getSubCategories("0");
  return (
    <div className="flex flex-col gap-4 px-10">
      <Breadcrumbs items={items} />
      <SignUpCompanyForm subCategories={subCategories} />
    </div>
  );
};

export default SignUpCompanyView;
