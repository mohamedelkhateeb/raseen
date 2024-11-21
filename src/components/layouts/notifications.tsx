import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { IoMdNotifications } from 'react-icons/io';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
const notifications = [
  {
    id: 1,
    title: 'لوريم ايبسوم هو نموذج',
    description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم؟',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    title: 'لوريم ايبسوم هو نموذج',
    description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم؟',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    title: 'لوريم ايبسوم هو نموذج',
    description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم؟',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    title: 'لوريم ايبسوم هو نموذج',
    description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم؟',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    title: 'لوريم ايبسوم هو نموذج',
    description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم؟',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    title: 'لوريم ايبسوم هو نموذج',
    description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم؟',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    title: 'لوريم ايبسوم هو نموذج',
    description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم؟',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    title: 'لوريم ايبسوم هو نموذج',
    description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم؟',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    title: 'لوريم ايبسوم هو نموذج',
    description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم؟',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    title: 'لوريم ايبسوم هو نموذج',
    description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم؟',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    title: 'لوريم ايبسوم هو نموذج',
    description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم؟',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    title: 'لوريم ايبسوم هو نموذج',
    description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم؟',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    title: 'لوريم ايبسوم هو نموذج',
    description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم؟',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    title: 'لوريم ايبسوم هو نموذج',
    description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم؟',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    title: 'لوريم ايبسوم هو نموذج',
    description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم؟',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    title: 'لوريم ايبسوم هو نموذج',
    description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم؟',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    title: 'لوريم ايبسوم هو نموذج',
    description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم؟',
    createdAt: new Date().toLocaleDateString(),
  },
];
const Notifications = () => {
  const { data: session } = useSession();
  if (!session) return;
  const [Data, setData] = useState<any>(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/notifications`, {
          method: 'GET',
          cache: 'no-cache',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session?.token}` },
        });
        const result = await res.json();
        setData(result);
      } catch (error) {
        //console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="relative mx-5 cursor-pointer">
          <IoMdNotifications size={40} />
          <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
            {Data?.length}
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent side="bottom" sideOffset={20} align="end" className="max-h-[50vh] w-fit overflow-auto bg-slate-50">
        {notifications.map((notification, index) => (
          <div key={index.toString()} className="flex items-center justify-between gap-8 border-b">
            <div key={notification.id} className="mb-4 border-gray-200 p-4">
              <h3 className="text-md font-semibold">{notification.title}</h3>
              <p className="text-sm text-gray-600">{notification.description}</p>
            </div>
            <h1>{notification.createdAt}</h1>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default Notifications;
