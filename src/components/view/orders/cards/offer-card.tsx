'use client';
import RatingStars from '@/components/common/rating-stars';
import { Button } from '@/components/ui/button';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { acceptOffer } from '@/services/orderService';
import Image from 'next/image';
import React from 'react';
import toast from 'react-hot-toast';

type OfferCardProps = {
  companyImage: string;
  companyName: string;
  stars: number | string;
  description: string;
  price: number | string;
  isAccepted?: boolean;
  offerId?: number;
  companyId?: number;
};

const OfferCard = ({ companyName, stars, description, price, companyImage, isAccepted, offerId, companyId }: OfferCardProps) => {
  const handleAccept = async (formData: FormData) => {
    //console.log(Object.fromEntries(formData));
    const res = await acceptOffer(formData);
    //console.log(res);
    if (res?.status) {
      toast.success('تم قبول العرض بنجاح');
    } else {
      toast.error('حدث خطأ، حاول مرة اخرى');
    }
  };
  return (
    <div dir="rtl" className="flex w-full flex-col gap-4 rounded-xl bg-[#f3f3f3d5] px-24 py-14">
      <Link prefetch={true} href={`/companies/${companyId}`} className="flex items-center gap-6">
        <div>
          <img src={companyImage} alt="company logo" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">{companyName}</h1>
          <h1 className="flex items-center gap-2">
            <RatingStars initialValue={stars} readOnly={true} style="w-6 h-6" />
            <p>{stars}</p>
          </h1>
        </div>
      </Link>
      <p className="text-lg font-semibold">
        السعر المقترح: <span className="text-xl font-bold text-[#004267]"> {price}</span>
      </p>
      <p className="mb-6 w-full text-lg font-medium lg:w-3/4">{description}</p>
      {!isAccepted && (
        <form action={handleAccept} className="flex justify-between gap-5">
          <input type="hidden" name="offer_id" value={offerId} />
          <LoadingButton
            content="قبول العرض"
            loader="قبول العرض..."
            style="mr-auto w-full rounded-xl bg-darkBlue px-8 text-base text-white sm:py-9 xl:text-2xl"
          />
        </form>
      )}
    </div>
  );
};

export default OfferCard;
