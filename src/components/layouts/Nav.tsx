'use client';
import React from 'react';
import NavigationMenuBar from './navigation-menu';
import RaseenLogo from '@/components/svgs/raseen-logo';
import { Button, buttonVariants } from '../ui/button';
import { MobileSidebar } from './mobile-sidebar';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { Plus } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { UserMenu } from '../view/auth/user/user-menu';
import { IoMdNotifications } from 'react-icons/io';
import { useSession } from 'next-auth/react';
const NavBar = ({ subOne, subTwo }: any) => {
  const t = useTranslations('HomePage');
  const { data: session } = useSession();
  return (
    <header className="bg-white p-2 pb-4 lg:px-16">
      <div className="flex items-center justify-between gap-8 rounded-full px-4 md:px-11 lg:bg-[#FAFAFA] lg:py-6">
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar subOne={subOne} subTwo={subTwo} />
        </div>
        <Link href={'/'} className="flex w-[60px] items-center justify-center mr-7 lg:w-[100px]">
          <RaseenLogo />
        </Link>
        <div className={cn('hidden rounded-full bg-white px-7 py-7 lg:block')}>
          <NavigationMenuBar subOne={subOne} subTwo={subTwo} />
        </div>
        <div className="flex items-center">
          <Link
            href={'/orders/new'}
            className={cn(
              buttonVariants({ variant: 'default', size: 'default' }),
              'hidden rounded-full bg-darkBlue px-8 py-8 text-base text-white lg:flex',
            )}
          >
            <Plus className="ml-2" size={20} />
            {t('getOffer')}
          </Link>
          <IoMdNotifications size={40} className="mx-10" />
          {session && <UserMenu />}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
