'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import { TbAlertOctagonFilled } from 'react-icons/tb';
import { PictureDialog } from '@/components/view/home/companies/picture-dialog';
import { Company } from '@/types/models/home.model';
import RatingStars from '@/components/common/rating-stars';
import Like from '@/components/common/like';
import Share from '@/components/common/share';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { redirect } from '@/i18n/routing';
const CompanyDetails = ({ company }: { company: Company }) => {
  const { data: session } = useSession();
  if (!company) {
    toast.error("Company doesn't exist, please try again later");
    redirect('/companies');
  }
  console.log(company);
  return (
    <main className="flex w-full">
      <div className="mt-20 px-3 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="my-6 flex w-full items-center justify-between lg:w-2/3">
            <h1 className="text-2xl font-semibold">{company?.name}</h1>
            <div className="mx-4 flex items-center gap-2">
              <RatingStars readOnly={true} initialValue={parseInt(company?.avg_rates)} style="w-8 h-8" />
              <span>{company?.avg_rates}</span>
              <span>({company?.rates_count})</span>
            </div>
          </div>
          <div>
            <Button
              variant="destructive"
              className="flex items-center gap-2 rounded-2xl border border-red-500 bg-white py-7 text-lg font-bold text-red-500 hover:bg-red-500 hover:text-white"
            >
              الإبلاغ عن مشكلة
              <TbAlertOctagonFilled />
            </Button>
          </div>
        </div>
        <div className="mb-10 flex flex-col justify-between gap-7">
          <div className="w-full lg:w-2/3">
            <div className="flex gap-10">
              <img src={company?.img} alt="Image" className="w-[300rem] rounded-md" />
              <div className="hidden min-w-96 flex-col lg:flex">
                <h1 className="my-8 text-2xl font-bold text-darkBlue">اقسام اخرى</h1>
                <div className="flex flex-col gap-8 rounded-2xl border border-[#E0E0E0] bg-[#FAFAFA] px-6 py-8 font-semibold">
                  {company?.sub_categories?.map((c, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <h1>{c?.name}</h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="my-8 flex items-start justify-between">
              <p className="w-[80%] text-2xl leading-relaxed text-gray-600">{company?.desc}</p>
              {session && (
                <div className="flex gap-12">
                  <Like isLiked={company?.fav} companyId={company?.id} />
                  <Share companyId={company?.id} />
                </div>
              )}
            </div>
            <h1 className="my-8 text-2xl font-bold text-darkBlue">سابقة الأعمال</h1>
            <div className="grid w-full grid-cols-4 gap-4 lg:w-[90%]">
              <PictureDialog images={company.cvs} />
            </div>
            {/* <h1 className="my-8 text-2xl font-bold text-darkBlue">سابقة الأعمال</h1>
        <div className="grid w-full grid-cols-4 gap-4 lg:w-[90%]">
          <PictureDialog images={[ComWo, ComWo, ComWo, ComWo]} />
        </div> */}
            <h1 className="my-8 text-2xl font-bold text-darkBlue">الشهادات والتراخيص</h1>
            <div className="grid w-full grid-cols-4 gap-4 lg:w-[90%]">
              <PictureDialog images={company.certeficates} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CompanyDetails;
