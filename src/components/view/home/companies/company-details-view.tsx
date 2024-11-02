import React from 'react';
import Image from 'next/image';
import cover from '../../../../../public/cover2.svg';
import { Company } from '@/types/models/home.model';
import CompanyDetails from './company-details';
const CompanyPage = ({ company }: { company: Company }) => {
  return (
    <>
      <div className="relative h-56 bg-cover bg-center lg:h-64" style={{ backgroundImage: `url()` }}>
        <div className="absolute inset-0 flex items-center justify-center bg-[#403D3FCC] bg-opacity-50">
          <h1 className="text-white lg:text-3xl xl:text-4xl">
            الرئيسية • خدمات رصين • الشركات • <span className="text-[#EA8D09]">{company?.name}</span>
          </h1>
        </div>
        <Image src={cover} alt="Card image" className="h-full w-full object-cover" width={700} height={500} />
      </div>
      <CompanyDetails company={company} />
    </>
  );
};

export default CompanyPage;
