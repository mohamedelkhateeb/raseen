'use client';

import React, { useRef } from 'react';
import OfferCard from './cards/offer-card';
import Autoplay from 'embla-carousel-autoplay';
import { TOffer } from '@/types/models/order.model';
import { useTranslations } from 'next-intl';

const Offers = ({ offers, isAccepted }: { offers: TOffer[]; isAccepted: boolean }) => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const t = useTranslations(); 

  return (
    <div className="flex flex-col gap-4 rounded-2xl px-10 py-12">
      <h1 className="my-4 text-2xl font-bold">{t('header')}</h1>
      {offers?.length === 0 && <h1>{t('noOffers')}</h1>}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {offers?.map((offer, index) => (
          <OfferCard
            key={index}
            companyImage={offer?.company?.img}
            companyName={offer?.company?.name}
            stars={offer?.company?.avg_rates}
            description={offer?.note}
            price={offer?.price}
            isAccepted={isAccepted}
            offerId={offer?.id}
            companyId={offer?.company?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Offers;
