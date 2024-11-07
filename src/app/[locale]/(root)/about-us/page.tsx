import { aboutUs, getTerms } from '@/services/homeService';
import React from 'react';
import cover from '../../../../../public/cover2.svg';
import Image from 'next/image';

const Page = async () => {
  const result = await aboutUs();
  return (
    <div>
      <div className="relative h-56 bg-cover bg-center lg:h-64" style={{ backgroundImage: `url()` }}>
        <div className="absolute inset-0 flex items-center justify-center bg-[#403D3FCC] bg-opacity-50">
          <h1 className="text-white lg:text-3xl xl:text-4xl">
            الرئيسية • <span className="text-[#EA8D09]">إعرفني</span>
          </h1>
        </div>
        <Image src={cover} alt="Card image" className="h-full w-full object-cover" width={700} height={500} />
      </div>
      <div className="terms-page p-10" dangerouslySetInnerHTML={{ __html: result }} />;
    </div>
  );
};

export default Page;
