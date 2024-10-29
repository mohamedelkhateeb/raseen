import OrderButton from '@/components/common/order-button';
import { Link } from '@/i18n/routing';
import React from 'react';

type OrderCardProps = {
  title: string;
  id: number;
  status: keyof typeof statusColorMap; // This tells TypeScript that status is a key in statusColorMap
  icon: string | React.ReactNode;
  label: string;
  showStatus?: boolean;
  children?: React.ReactNode;
  code?: number;
};

export const statusColorMap = {
  1: 'bg-[#EA8D09] hover:bg-yellow-600',
  2: 'bg-[#4757E5] hover:bg-blue-800',
  3: 'bg-[#1BA400] hover:bg-green-600',
} as const;

const OrderCard = ({ title, id, code, status, icon, label, showStatus, children }: OrderCardProps) => {
  return (
    <div className="flex justify-between rounded-2xl bg-[#FAFAFA] p-8 py-12 xl:mx-11">
      <Link href={`/orders/${id}`} className="">
        <div className="flex gap-3">
          {icon}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">{title}</h3>
            <div className="flex gap-3">
              <h1 className="text-lg font-bold">رقم الطلب</h1>
              <span className="text-lg text-gray-400">{code}</span>
            </div>
          </div>
        </div>
      </Link>
      {showStatus && <OrderButton status={statusColorMap[status]} label={label} />}
      {children}
    </div>
  );
};

export default OrderCard;
