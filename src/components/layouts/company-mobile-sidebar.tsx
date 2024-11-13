'use client';
import React from 'react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { AlignRight, User, X } from 'lucide-react';
import Image from 'next/image';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { Link, usePathname } from '@/i18n/routing';
import { signOut } from 'next-auth/react';
import { BsBoxArrowLeft } from 'react-icons/bs';
import { useDirection } from '@/utils/helpers';
import RaseenLogo from '../../../public/rseen 2.svg';
const SidebarItems = [
  {
    href: '/company',
    label: 'الرئيسية',
    icon: <HiOutlineSquares2X2 size={20} />,
  },
  {
    href: '/company/offers',
    label: 'عروضي',
    icon: <HiOutlineSquares2X2 size={20} />,
  },
  {
    href: '/company/statics',
    label: 'احصائياتي',
    icon: <HiOutlineSquares2X2 size={20} />,
  },
  {
    href: '/company/settings',
    label: 'الاعدادت',
    icon: <HiOutlineSquares2X2 size={20} />,
  },
  {
    href: '/company/notifications',
    label: 'الإشعارات',
    icon: <HiOutlineSquares2X2 size={20} />,
  },
];
export const CompanyMobileSidebar = () => {
  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTrigger>
        <AlignRight size={30} color="#76777B" strokeWidth={1.5} />
      </SheetTrigger>
      <SheetContent aria-describedby={undefined} dir={useDirection()} side="right" className="w-[300px] bg-[#004267] overflow-y-auto p-5">
        <SheetTitle className="flex w-full"></SheetTitle>
        <div dir={useDirection()} className="flex w-full h-full flex-col items-start gap-6">
          {/* <div className="h-20 w-20">
            <Image src={RaseenLogo} alt="Card image" className="h-full w-full object-cover" />
          </div> */}
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
