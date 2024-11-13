'use client';
import OrderButton from '@/components/common/order-button';
import { buttonVariants } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { CompanyOffers } from '@/types/models/company.model';
import Image from 'next/image';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import { PiPhoneCallLight } from 'react-icons/pi';
import OfferActions from './offer-actions';

export const statusColorMap = {
  4: 'bg-[#EA8D09] hover:bg-yellow-600 max-h-14 min-w-40 ',
  5: 'bg-[#1BA400] hover:bg-blue-800 max-h-14 min-w-40 ',
  6: 'bg-[#DB2524] hover:bg-green-600 max-h-14 min-w-40 ',
} as const;

const CompanyOfferCard = ({ item }: { item: CompanyOffers }) => {
  //console.log(item.status);

  return (
    <div dir="rtl" className="flex w-full flex-col gap-4 rounded-xl border px-10 py-4">
      <div className="flex items-center gap-10">
        <Image src={item?.order?.user?.img} alt="Card image" className="h-20 w-36 object-cover" width={100} height={100} />
        <h1 className="text-xl">{item?.order?.user?.name}</h1>
        <div className="mr-auto">
          <OrderButton status={statusColorMap[item?.status?.id as keyof typeof statusColorMap]} label={item?.status?.name} />
        </div>
      </div>
      <div>
        السعر المقدم:{' '}
        <span className="text-lg font-semibold text-[#004267]">
          من {item?.order.min_price} ريال - {item?.order?.max_price} ريال
        </span>
      </div>
      <div>
        الخدمات المطلوبة:{'  '}
        <span className="text-md font-semibold text-[#004267]">
          {item?.order?.sub_categories
            ?.map((subItem: any) => subItem?.name)
            .slice(0, 2)
            .join(' - ')}
          {item?.order?.sub_categories?.length > 2 && <span className="text-gray-500"> ...+{item?.order?.sub_categories.length - 2} آخرين</span>}
        </span>{' '}
      </div>
      <div className="flex items-center gap-4">
        <Link
          prefetch={true}
          href={`/company/${item?.id}`}
          className={cn(
            buttonVariants({
              variant: 'outline',
            }),
            'w-full rounded-lg border border-darkBlue bg-transparent py-8 text-base text-darkBlue hover:bg-darkBlue hover:text-white lg:text-xl xl:text-2xl',
          )}
        >
          تفاصيل الطلب
        </Link>
        {item.status?.id == 5 && <OfferActions offerId={item?.id} />}
      </div>
    </div>
  );
};

export default CompanyOfferCard;
