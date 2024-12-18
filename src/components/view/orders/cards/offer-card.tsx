'use client';
import RatingStars from '@/components/common/rating-stars';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import { Link } from '@/i18n/routing';
import { acceptOffer } from '@/services/orderService';
import React from 'react';
import toast from 'react-hot-toast';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('OfferCard');

  const handleAccept = async (formData: FormData) => {
    const res = await acceptOffer(formData);
    if (res?.status) {
      toast.success(t('offerAccepted'));
    } else {
      toast.error(t('errorOccurred'));
    }
  };

  return (
    <div dir="rtl" className="flex max-h-[300px] w-full flex-col gap-4 overflow-auto rounded-xl bg-[#f3f3f3d5] px-24 py-14">
      <Link prefetch={true} href={`/companies/${companyId}`} className="flex items-center gap-6">
        <div>
          <img src={companyImage} alt="company logo" className="h-full max-h-36 w-full max-w-44 object-cover" />
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
        {t('proposedPrice')}: <span className="text-xl font-bold text-[#004267]">{price}</span>
      </p>
      <p className="mb-6 w-full text-lg font-medium lg:w-3/4">{description}</p>
      {!isAccepted && (
        <form action={handleAccept} className="flex justify-between gap-5">
          <input type="hidden" name="offer_id" value={offerId} />
          <LoadingButton
            content={t('acceptOffer')}
            loader={t('acceptingOffer')}
            style="mr-auto w-full rounded-xl bg-darkBlue px-8 text-base text-white sm:py-9 xl:text-2xl"
          />
        </form>
      )}
    </div>
  );
};

export default OfferCard;
