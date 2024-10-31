import OrderDetailsViewPage from '@/components/view/orders/order-details-view-page';
import { redirect } from '@/i18n/routing';
import { getOrder } from '@/services/orderService';
import React from 'react';

const OrderDetailsPage = async ({ params }: { params: { orderId: string } }) => {
  const result = await getOrder(params.orderId);
  if (!result.status) {
    return redirect('/');
  }
  return <OrderDetailsViewPage order={result?.data}  />;
};

export default OrderDetailsPage;
