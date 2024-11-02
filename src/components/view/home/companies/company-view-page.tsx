'use client';
import React, { useState } from 'react';
import image from '../../../../../public/image.svg';
import { BiSearch } from 'react-icons/bi';
import { IoIosList } from 'react-icons/io';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import Card from '@/components/view/home/companies/card';
import CategoryFilter from '@/components/view/home/companies/filters';
import Image from 'next/image';
import { Category, Company } from '@/types/models/home.model';
import { parseAsString, useQueryState } from 'nuqs';
import PageContainer from '@/components/layouts/page-container';
const CompanyViewPage = ({ companies, categories, subCategory }: { companies: Company[]; categories: Category[]; subCategory: Category[] }) => {
  const [listStyle, setListStyle] = useState('grid');
  const [search, setSearch] = useQueryState('search', parseAsString.withOptions({ shallow: false }));
  
  return (
    <>
      <div className="relative h-56 bg-cover bg-center lg:h-64" style={{ backgroundImage: `url(${image})` }}>
        <div className="absolute inset-0 flex items-center justify-center bg-[#403D3FCC] bg-opacity-50">
          <h1 className="text-2xl text-white lg:text-4xl">
            الرئيسية • خدمات رصين • <span className="text-[#EA8D09]">الشركات</span>
          </h1>
        </div>
        <Image src={image} alt="Card image" className="h-full w-full object-cover" width={700} height={500} />
      </div>
      <div className="container mx-auto flex justify-between px-4 py-5"></div>
      <div className="mx-4 mb-8 mr-8 flex justify-around">
        <div className="relative">
          <BiSearch color="#6D6D6D" size={20} className="absolute right-4 top-1/2 -translate-y-1/2" />
          <input
            value={search || ''}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="ابحث هنا عن أي فئة"
            className="h-[60px] w-96 rounded-full border bg-[#FBFBFB] px-8 pr-14 text-xl focus:outline-none focus:ring-2 focus:ring-primary lg:w-[418px] lg:pr-12"
          />
        </div>{' '}
        <button className="ml-4 mr-auto">
          {listStyle === 'grid' ? (
            <IoIosList color="#5E5E5E" size={45} onClick={() => setListStyle('list')} />
          ) : (
            <HiOutlineSquares2X2 size={45} onClick={() => setListStyle('grid')} color="#5E5E5E" />
          )}
        </button>
      </div>
      <div className="my-10 flex w-full flex-col px-2 lg:flex-row lg:px-10">
        <CategoryFilter subCategories={subCategory} categories={categories} />
        <div className="w-full">
          <PageContainer scrollable>
            <div className={`grid w-full gap-4 p-4 ${listStyle == 'grid' ? 'lg:grid-cols-2' : 'lg:grid-cols-1'}`}>
              {companies?.length > 0 ? (
                companies?.map((company) => (
                  <Card
                    key={company.id}
                    title={company.name}
                    description={company.desc}
                    imageUrl={company.img}
                    listStyle={listStyle}
                    isLiked={company.fav}
                    id={company.id}
                  />
                ))
              ) : (
                <>
                  <h1 className="mx-auto text-3xl">لا يوجد نتائج</h1>
                  <h1 className="mx-auto text-3xl">لا يوجد نتائج</h1>
                </>
              )}
            </div>
          </PageContainer>
        </div>
      </div>
    </>
  );
};

export default CompanyViewPage;
