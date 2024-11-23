import { getCompanyOffers } from '@/services/companyService';
import React from 'react';
import CompanyOfferCard from './company-offer-card';
import { CompanyOffers } from '@/types/models/company.model';
import { Paginations } from '@/components/common/pagination';
import { searchParamsCache } from '@/utils/searchparams';

const CompanyOffersView = async () => {
  const page = searchParamsCache.get('page');
  const result = await getCompanyOffers(page || 1);
  return (
    <div className="flex flex-col">
      <h1 className="mb-4 text-2xl font-bold">العروض المقدمة</h1>
      <div className="grid grid-cols-1 gap-4 overflow-auto lg:grid-cols-2">
        {result?.data?.map((item: CompanyOffers) => <CompanyOfferCard key={item.id} item={item} />)}
        {result?.data?.length === 0 && <h1 className="text-2xl font-bold">لا يوجد عروض حاليا</h1>}
      </div>
      {result?.data?.length > 0 && <Paginations pagination={result?.pagination} />}
    </div>
  );
};

export default CompanyOffersView;
