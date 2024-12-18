import React from 'react';
import { Breadcrumbs } from '@/components/common/breadcrumd';
import { TbSmartHome } from 'react-icons/tb';
import OrderCard, { statusColorMap } from './cards/order-card';
import OrderDetailsCard from './order-details-card';
import Offers from './offers';
import OfferCard from './cards/offer-card';
import RateForm from './rate-form';
import FinishOrder from './finish-order';
import Rate from './cards/rate';
import { BsBuildingCheck } from 'react-icons/bs';
import { TOrder } from '@/types/models/order.model';
import { useTranslations } from 'next-intl';

const OrderDetailsViewPage = ({ order }: { order: TOrder }) => {
  const t = useTranslations(); // Localization namespace for translations.

  const breadcrumbs = [
    { title: <TbSmartHome size={30} color="#EA8D09" />, link: '/' },
    { title: t('myOrders'), link: '/orders' }, // Translation key for "طلباتي"
    { title: t('orderDetailsWord'), link: '' }, // Translation key for "تفاصيل الطلب"
  ];

  const isOrderCompleted = order?.status?.id === 3 || order?.status?.id === 2;

  return (
    <div className="flex flex-col gap-8 px-10">
      <Breadcrumbs items={breadcrumbs} />

      {order?.rates?.id && (
        <Rate
          msg={order.rates.msg}
          rate={order.rates.rate}
          name={order.rates.user_rate?.name}
          icon={<img src={order.rates.user_rate?.img} alt={order.rates.user_rate?.name || t('user')} className="mx-5 h-32 w-32 rounded-full" />}
        />
      )}

      <OrderCard
        label={order?.status?.name}
        id={order?.id}
        code={order?.code}
        title={order?.category?.name}
        status={order?.status?.id as keyof typeof statusColorMap}
        icon={<BsBuildingCheck className="mx-5 text-[30px] lg:text-[50px]" color="#004267" />}
        showStatus={false}
      >
        {!order?.rates?.id && order?.status?.id === 3 && (
          <RateForm companyId={order.offer_accepted?.company?.id} img={order.offer_accepted?.company?.img} order_id={order?.id?.toString()} />
        )}
        {order?.status?.id === 2 && <FinishOrder offerId={order?.id} />}
      </OrderCard>

      <OrderDetailsCard
        subCategory={order?.sub_categories}
        city={order?.city?.name}
        desc={order?.note}
        images={order?.images}
        status={order?.status?.id as keyof typeof statusColorMap}
        label={order?.status?.name}
      />

      <div className="flex flex-col gap-8">
        {order?.offer_accepted && (
          <>
            <h1 className="text-xl font-bold">{t('acceptedCompany')}</h1> {/* Translation key */}
            <OfferCard
              isAccepted={isOrderCompleted}
              companyImage={order.offer_accepted.company?.img}
              companyName={order.offer_accepted.company?.name}
              stars={order.offer_accepted.company?.avg_rates}
              description={order.offer_accepted.note}
              price={order.offer_accepted.price}
            />
          </>
        )}
      </div>

      <Offers offers={order?.offers || order?.offers_rejected} isAccepted={isOrderCompleted} />
    </div>
  );
};

export default OrderDetailsViewPage;
