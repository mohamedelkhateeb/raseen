import OrderDetailsViewPage from '@/components/view/orders/order-details-view-page';
import { getOrder } from '@/services/orderService';
import React from 'react';

const OrderDetailsPage = async ({ params }: { params: { orderId: string } }) => {
  const data = await getOrder(params.orderId);

  return <OrderDetailsViewPage order={data} />;
};

export default OrderDetailsPage;
