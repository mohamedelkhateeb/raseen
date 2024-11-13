'use client';
import RatingStars from '@/components/common/rating-stars';
import { Button, buttonVariants } from '@/components/ui/button';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { acceptOffer } from '@/services/orderService';
import Image from 'next/image';
import React from 'react';
import toast from 'react-hot-toast';
import SendOffer from '../offers/send-offer';

type CompanyOrderCardProps = {
  item: any;
};

const CompanyOrderCard = ({ item }: CompanyOrderCardProps) => {
  return (
    <div dir="rtl" className="flex w-full flex-col gap-4 rounded-xl border px-10 py-4">
      <div className="flex items-center gap-10">
        <Image src={item?.user.img} alt="Card image" className="h-20 w-36 object-cover" width={100} height={100} />
        <h1 className="text-xl">{item?.user?.name}</h1>
      </div>
      <div>
        السعر المقدم:{' '}
        <span className="text-lg font-semibold text-[#004267]">
          من {item?.min_price} ريال - {item?.max_price} ريال
        </span>
      </div>
      <div>
        الخدمات المطلوبة:{'  '}
        <span className="text-md font-semibold text-[#004267]">
          {item?.sub_categories
            ?.map((subItem: any) => subItem?.name)
            .slice(0, 2)
            .join(' - ')}
          {item?.sub_categories?.length > 2 && <span className="text-gray-500"> ...+{item?.sub_categories.length - 2} آخرين</span>}
        </span>{' '}
      </div>
      <div className="flex items-center gap-4">
        <SendOffer order_id={item?.id} />
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
      </div>
    </div>
  );
};

export default CompanyOrderCard;
