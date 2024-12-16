import React from 'react';
import cover from '../../../../../public/cover2.svg';
import { getArticleDetails } from '@/services/homeService';
import Image from 'next/image';
import { LuLayoutDashboard } from 'react-icons/lu';
import { direction } from '@/utils/helpers';
import { redirect } from '@/i18n/routing';

const page = async ({ searchParams }: { searchParams: Record<string, string> }) => {
  if (!searchParams?.id) return redirect('/');
  const a = await getArticleDetails(+searchParams?.id || 1);
  return (
    <div className="">
      <div className="relative h-56 bg-cover bg-center lg:h-64" style={{ backgroundImage: `url()` }}>
        <div className="absolute inset-0 flex items-center justify-center bg-[#403D3FCC] bg-opacity-50">
          <h1 className="text-white lg:text-3xl xl:text-4xl">
            الرئيسية • <span className="text-[#EA8D09]">تفاصيل المقال</span>
          </h1>
        </div>
        <Image src={cover} alt="Card image" className="h-full w-full object-cover px-5" width={700} height={500} />
      </div>
      <div className="m-10 flex justify-center rounded-lg bg-card text-card-foreground shadow-sm">
        <img src={a.img} alt="Image" className="h-[50%] w-[50%] rounded-md object-cover" />
        <div className="flex flex-col">
          <div className="mt-8 flex w-full justify-start px-4 lg:mt-8">
            <p className="flex items-center gap-2 rounded-lg bg-[#EA8D09] p-2 py-2 text-[10px] text-white lg:text-sm">
              {a?.category?.name}
              <LuLayoutDashboard />
            </p>
          </div>
          <h1 className="text-md mt-3 px-4 text-right font-bold leading-normal lg:text-xl">{a.title}</h1>
          <div
            className="terms-page px-10 pt-4 text-xs leading-7 lg:text-[14px]"
            dir={await direction()}
            dangerouslySetInnerHTML={{ __html: a?.desc }}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
