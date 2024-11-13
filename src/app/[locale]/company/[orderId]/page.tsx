import CopmanyOrderDetailsViewPage from '@/components/view/company/orders/company-order-datails';
import { redirect } from '@/i18n/routing';
import { getCompanyOrder } from '@/services/orderService';
import React from 'react';

const OrderDetailsPage = async ({ params }: { params: { orderId: string } }) => {
  const result = await getCompanyOrder(params.orderId);
  //console.log({ result });

  if (!result?.status) {
    return redirect('/');
  }
  return <CopmanyOrderDetailsViewPage order={result?.data} />;
};

export default OrderDetailsPage;
