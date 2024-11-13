import { getCompanyOffers } from '@/services/companyService';
import React from 'react';
import CompanyOfferCard from './company-offer-card';
import { CompanyOffers } from '@/types/models/company.model';

const CompanyOffersView = async () => {
  const result = await getCompanyOffers();
  //console.log({ result });

  return (
    <div className="flex flex-col">
      <h1 className="mb-4 text-2xl font-bold">العروض المقدمة</h1>
      <div className="grid grid-cols-1 gap-4 overflow-auto lg:grid-cols-2">
        {result?.map((item: CompanyOffers) => <CompanyOfferCard key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default CompanyOffersView;
