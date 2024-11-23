import PlansViewPage from '@/components/view/company/plans/plans-view-page';
import { getPlans } from '@/services/companyService';
import React from 'react';

const Page = async () => {
  const plans = await getPlans();
  return <PlansViewPage plans={plans} />;
};

export default Page;
