import { getCompanyOrders } from '@/services/companyService';
import React from 'react';
import CompanyOrderCard from '../orders/order-card';
import { CompanyOrders } from '@/types/models/company.model';
import { Paginations } from '@/components/common/pagination';
import { searchParamsCache } from '@/utils/searchparams';

const CompanyOrdersView = async () => {
  const page = searchParamsCache.get('page');
  const result = await getCompanyOrders(page || 1);
  console.log(result);
  
  return (
    <div className="flex flex-col">
      <h1 className="mb-4 text-2xl font-bold">الطلبات القادمة</h1>
      <div className="grid grid-cols-1 gap-4 overflow-auto lg:grid-cols-2">
        {result?.data?.map((item: CompanyOrders) => <CompanyOrderCard key={item.id} item={item} />)}
        {result?.data?.length == 0 && <h1 className="text-2xl font-bold">لا يوجد طلبات حاليا</h1>}
      </div>
      {result?.data?.length > 0 && <Paginations pagination={result?.pagination} />}
    </div>
  );
};

export default CompanyOrdersView;
