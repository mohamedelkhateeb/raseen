import React from 'react';

interface Order {
  title: string;
  value: string;
}

interface SubscriptionCardProps {
  type: string;
  name: string;
  start_subscription: string;
  end_subscription: string;
  id: number;
  price: string;
  orders: Order[];
}

export const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ type, name, start_subscription, end_subscription, price, orders }) => {
  return (
    <>
      <h1 className="my-5 text-xl font-semibold">اشتراكك الحالي</h1>
      <div className="mt-4 max-w-lg rounded-xl border bg-white p-6 shadow-md">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-800">{name}</h3>
          <span className="font-semibold text-blue-600">
            {price} ريال / {type === 'month' ? 'شهري' : 'سنوي'}
          </span>
        </div>
        <ul className="mb-4 space-y-4">
          {orders.map((order, index) => (
            <li key={index} className="flex items-center justify-between">
              <span className="text-gray-600">{order.title}</span>
              <span className="text-gray-500">{order.value}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between border-t pt-4 text-sm text-gray-500">
          <div className="flex flex-col items-center">
            <span>بداية الاشتراك</span>
            <span>{start_subscription}</span>
          </div>
          <div className="flex flex-col items-center">
            <span>نهاية الاشتراك</span>
            <span>{end_subscription}</span>
          </div>
        </div>
      </div>
    </>
  );
};
