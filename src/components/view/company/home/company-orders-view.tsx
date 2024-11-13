import { getCompanyOrders } from '@/services/companyService';
import React from 'react';
import CompanyOrderCard from '../orders/order-card';
import { CompanyOrders } from '@/types/models/company.model';

const CompanyOrdersView = async () => {
  const result = await getCompanyOrders();
  return (
    <div className="flex flex-col">
      <h1 className="mb-4 text-2xl font-bold">الطلبات القادمة</h1>
      <div className="grid grid-cols-1 gap-4 overflow-auto lg:grid-cols-2">
        {result?.map((item: CompanyOrders) => <CompanyOrderCard key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default CompanyOrdersView;
