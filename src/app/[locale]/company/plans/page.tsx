import PlansViewPage from '@/components/view/company/plans/plans-view-page';
import { getProfile } from '@/services/authService';
import { getCompanyPackage, getPlans } from '@/services/companyService';
import React from 'react';

const Page = async () => {
  const plans = await getPlans();
  const profile = await getProfile();
  const pack = await getCompanyPackage();

  console.log(profile);
  console.log(pack);

  return <PlansViewPage plans={plans} plan={pack} profile={profile} />;
};

export default Page;
