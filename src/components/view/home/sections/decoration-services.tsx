'use client';
import React from 'react';
import Image from 'next/image';
import ImageCard5 from '../../../../../public/card.svg';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useTranslations } from 'next-intl'; // Assuming you are using next-intl
import { Link } from '@/i18n/routing'; // Assuming this is the routing setup

const DecorationServices = () => {
  const t = useTranslations('decorationServices'); // Fetch translations for the 'decorationServices' namespace

  return (
    <section className="flex h-fit flex-col items-center justify-center gap-14 bg-[#004267] py-12">
      <h1 className="text-2xl font-bold leading-normal text-white md:text-3xl xl:leading-normal">{t('title')}</h1>
      <div className="grid grid-cols-1 gap-12 px-10 xl:grid-cols-3">
        {Array.from({ length: 3 })?.map((_, index) => (
          <div className="flex flex-col items-center gap-6 rounded-3xl border py-10 lg:p-2" key={index}>
            <Image className="h-[100px] w-[170px] lg:h-[284px] lg:w-[300px]" src={ImageCard5} alt="Decoration Services" />
            <h1 className="text-xl font-bold leading-normal text-white md:text-2xl xl:leading-normal">{t('cardTitle')}</h1>
            <p className="mx-5 p-2 text-center text-xl font-medium text-white md:text-xl xl:text-2xl">{t('description')}</p>
            <div className="flex items-center">
              <Link
                prefetch={true}
                href="/companies"
                className="flex items-center justify-end gap-4 py-0 text-xl font-bold text-white lg:pb-6 lg:text-2xl"
              >
                {t('buttonText')} <IoIosArrowRoundBack size={35} color="white" className="rotate-180" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DecorationServices;
