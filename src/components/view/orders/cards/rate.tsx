import RatingStars from '@/components/common/rating-stars';
import React from 'react';

const Rate = ({ icon, name, rate, msg }: { icon: React.ReactNode; name: string; rate: number; msg: string }) => {
  return (
    <div className="rounded-2xl bg-[#FAFAFA] p-8 py-12 xl:mx-11">
      <div className="flex items-center">
        {icon}
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-2xl font-bold">{name}</h1>
          <RatingStars readOnly={true} initialValue={rate} style="w-8 h-8" />
        </div>
      </div>
      <h1 className="my-8 mr-24 text-lg font-medium">{msg}</h1>
    </div>
  );
};

export default Rate;
