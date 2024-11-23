import CompanyProfile from '@/components/view/company/profile/profile-company-form';
import { getProfile } from '@/services/authService';
import React from 'react';

const Page = async () => {
  const profile = await getProfile();
  return <CompanyProfile profile={profile} />;
};

export default Page;
