'use client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { IoMdNotifications } from 'react-icons/io';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { readAllNotification } from '@/services/companyService';

const Notifications = () => {
  const { data: session } = useSession();
  if (!session) return;
  const [Data, setData] = useState<{ created_at: string; desc: string; id: number; read: boolean; title: string }[] | null>(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/notifications`, {
          method: 'GET',
          cache: 'no-cache',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session?.token}` },
        });
        const result = await res.json();
        setData(result?.data);
      } catch (error) {
        //console.log(error);
      }
    };
    getData();
  }, []);

  const handleSubmit = async (data: FormData) => {
    const res = await readAllNotification();
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <form action={handleSubmit} className="relative mx-5 cursor-pointer">
          <button type="submit">
            <IoMdNotifications size={40} />
          </button>
          <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
            {Data?.length}
          </span>
        </form>
      </PopoverTrigger>
      <PopoverContent side="bottom" sideOffset={20} align="end" className="max-h-[50vh] w-fit overflow-auto bg-slate-50">
        {Data?.map((notification, index) => (
          <div key={index.toString()} className="flex items-center justify-between gap-8 border-b">
            <div key={notification.id} className="mb-4 border-gray-200 p-4">
              <h3 className="text-md font-semibold">{notification.title}</h3>
              <p className="text-sm text-gray-600">{notification.desc}</p>
            </div>
            <h1>{notification.created_at}</h1>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default Notifications;
