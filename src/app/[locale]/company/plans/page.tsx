import PlansViewPage from '@/components/view/company/plans/plans-view-page';
import { getProfile } from '@/services/authService';
import { getCompanyPackage, getPlans } from '@/services/companyService';
import React from 'react';

const Page = async () => {
  const [plans, profile, pack] = await Promise.all([getPlans(), getProfile(), getCompanyPackage()]);
  console.log(plans);
  console.log(pack);

  return <PlansViewPage plans={plans} plan={pack} profile={profile} />;
};

export default Page;
