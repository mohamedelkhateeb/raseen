import { options } from '@/app/api/auth/[...nextauth]/options';
import OrderListingViewPage from '@/components/view/orders/order-listing-view-page';
import { redirect } from '@/i18n/routing';
import { getOrders, getRelatedService } from '@/services/orderService';
import { getServerSession } from 'next-auth';

export default async function OrdersPage() {
  const session = await getServerSession(options);
  if (!session) {
    redirect('/sign-in');
  }
  const [orders, relatedServices] = await Promise.all([getOrders(), getRelatedService()]);
  return <OrderListingViewPage pagination={orders?.pagination} orders={orders?.data} relatedServices={relatedServices?.data || []} />;
}
