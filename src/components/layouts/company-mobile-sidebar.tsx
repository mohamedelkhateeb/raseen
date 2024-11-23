'use client';
import React from 'react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { AlignRight } from 'lucide-react';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { Link, usePathname } from '@/i18n/routing';
import { signOut } from 'next-auth/react';
import { BsBoxArrowLeft } from 'react-icons/bs';
import { useDirection } from '@/utils/helpers';
import { FaRegFileArchive } from 'react-icons/fa';
import { TbFileAnalytics } from 'react-icons/tb';
import { MdOutlineSubtitles } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa6';
const SidebarItems = [
  {
    href: '/company',
    label: 'الرئيسية',
    icon: <HiOutlineSquares2X2 size={20} />,
  },
  {
    href: '/company/offers',
    label: 'عروضي',
    icon: <FaRegFileArchive size={20} />,
  },
  {
    href: '/company/statics',
    label: 'احصائياتي',
    icon: <TbFileAnalytics size={20} />,
  },
  {
    href: '/company/settings',
    label: 'الاعدادت',
    icon: <MdOutlineSubtitles size={20} />,
  },
  {
    href: '/company/notifications',
    label: 'الإشعارات',
    icon: <FaRegUser size={20} />,
  },
];
export const CompanyMobileSidebar = () => {
  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTrigger>
        <AlignRight size={30} color="#76777B" strokeWidth={1.5} />
      </SheetTrigger>
      <SheetContent aria-describedby={undefined} dir={useDirection()} side="right" className="w-[300px] overflow-y-auto bg-[#004267] p-5">
        <SheetTitle className="flex w-full"></SheetTitle>
        <div dir={useDirection()} className="flex h-full w-full flex-col items-start gap-6">
          <div className="flex h-full w-3/4 flex-col items-center gap-6 rounded-3xl bg-[#004267] py-8">
            {SidebarItems.map((item, index) => (
              <div
                key={index.toString()}
                className={`flex w-3/4 items-center gap-2 rounded-xl px-4 py-3 text-white ${pathName == item.href ? 'bg-[#EA8D09]' : ''}`}
              >
                {item.icon}
                <Link prefetch={true} href={`${item.href}`} className="text-white">
                  {item.label}
                </Link>
              </div>
            ))}
            <div className={`mt-auto flex w-3/4 items-center gap-2 rounded-xl px-4 py-3 text-white`}>
              <BsBoxArrowLeft color="red" size={30} />
              <button onClick={() => signOut({ callbackUrl: '/' })} className="text-white">
                تسجيل خروج
              </button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
