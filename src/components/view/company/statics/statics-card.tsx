import React from 'react';

type StaticsCardProps = {
  title: string;
  icon: React.ReactNode;
  count: number;
};

const StaticsCard = ({ title, icon, count }: StaticsCardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl border p-6">
      <div className="flex">
        <span className="h-full w-1 rounded bg-[#004267]"></span>
        <h1 className="rounded pr-6 text-xl font-semibold">{title}</h1>
      </div>
      <div className="flex items-center justify-between text-xl">
        <h1 className="text-2xl font-bold">{count}</h1>
        {icon}
      </div>
    </div>
  );
};

export default StaticsCard;
