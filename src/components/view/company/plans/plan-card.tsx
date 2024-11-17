import { getPlans } from '@/services/companyService';
import React from 'react';

const PlanCard = async () => {
  const plans = await getPlans();
  return <div></div>;
};

export default PlanCard;
