import { Breadcrumbs } from '@/components/common/breadcrumd';
import React from 'react';
import { TbSmartHome } from 'react-icons/tb';
import OrderCard, { statusColorMap } from './cards/order-card';
import OrderDetailsCard from './order-details-card';
import Offers from './offers';
import OfferCard from './cards/offer-card';
import RateForm from './rate-form';
import { TOrder } from '@/types/models/order.model';
import FinishOrder from './finish-order';
import { BsBuildingCheck } from 'react-icons/bs';
import Rate from './cards/rate';

const OrderDetailsViewPage = ({ order }: { order: TOrder }) => {
  const items = [
    { title: <TbSmartHome size={30} color="#EA8D09" />, link: '/' },
    { title: 'طلباتي', link: '/orders' },
    { title: 'تفاصيل الطلب', link: '' },
  ];
  return (
    <div className="flex flex-col gap-8 px-10">
      <Breadcrumbs items={items} />
      {order?.rates?.id && (
        <Rate
          msg={order?.rates?.msg}
          rate={order?.rates?.rate}
          name={order?.rates?.user_rate?.name}
          icon={<img src={order?.rates?.user_rate?.img} className="mx-5 h-32 w-32 rounded-full text-[30px] lg:text-[50px]" />}
        />
      )}
      <OrderCard
        label={order?.status.name}
        id={order?.id}
        code={order?.code}
        title={order?.category?.name}
        status={order.status.id as keyof typeof statusColorMap}
        icon={<BsBuildingCheck className="mx-5 text-[30px] lg:text-[50px]" color="#004267" />}
        showStatus={false}
      >
        {!order?.rates?.id && order?.status.id == 3 && (
          <RateForm companyId={order?.offer_accepted?.company?.id} img={order?.offer_accepted?.company?.img} />
        )}
        {order?.status.id == 2 && <FinishOrder offerId={order?.id} />}
      </OrderCard>
      <OrderDetailsCard
        subCategory={order?.sub_categories}
        city={order.city?.name}
        desc={order?.note}
        images={order?.images}
        status={order.status.id as keyof typeof statusColorMap}
        label={order?.status.name}
      />
      <div className="flex flex-col gap-8">
        {order?.offer_accepted && (
          <>
            <h1 className="text-xl font-bold">الشركة المقبولة</h1>
            <OfferCard
              isAccepted={order?.status.id == 3 || order?.status.id == 2 ? true : false}
              companyImage={order?.offer_accepted?.company?.img}
              companyName={order?.offer_accepted?.company?.name}
              stars={order?.offer_accepted?.company?.avg_rates}
              description={order?.offer_accepted?.note}
              price={order?.offer_accepted?.price}
            />
          </>
        )}
      </div>
      <Offers
        offers={order?.offers ? order?.offers : order?.offers_rejected}
        isAccepted={order?.status?.id == 3 || order?.status?.id == 2 ? true : false}
      />
    </div>
  );
};

export default OrderDetailsViewPage;
