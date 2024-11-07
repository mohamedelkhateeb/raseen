import { faq } from '@/services/homeService';
import React from 'react';
import cover from '../../../../../public/cover2.svg';
import Image from 'next/image';
import { Accordion } from '@radix-ui/react-accordion';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

const Page = async () => {
  const result: { title: string; desc: string }[] = await faq();
  return (
    <div>
      <div className="relative h-56 bg-cover bg-center lg:h-64" style={{ backgroundImage: `url()` }}>
        <div className="absolute inset-0 flex items-center justify-center bg-[#403D3FCC] bg-opacity-50">
          <h1 className="text-white lg:text-3xl xl:text-4xl">
            الرئيسية • <span className="text-[#EA8D09]">الاسئلة الشائعة</span>
          </h1>
        </div>
        <Image src={cover} alt="Card image" className="h-full w-full object-cover" width={700} height={500} />
      </div>
      <div className='p-6 m-4'>
        <Accordion type="single" collapsible className="w-full">
          {result?.map((item, index) => (
            <AccordionItem key={index} value={index.toString()} className='my-4 rounded-lg border p-4 bg-card text-card-foreground'>
              <AccordionTrigger className={cn('font-semibold hover:no-underline')}>{item?.title}</AccordionTrigger>
              <AccordionContent className="flex flex-col">{item?.desc}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Page;
