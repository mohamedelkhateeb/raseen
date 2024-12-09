'use client';
import React from 'react';
import NavigationMenuBar from './navigation-menu';
import RaseenLogo from '@/components/svgs/raseen-logo';
import {  buttonVariants } from '../ui/button';
import { MobileSidebar } from './mobile-sidebar';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { Plus } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { UserMenu } from '../view/auth/user/user-menu';
import { useSession } from 'next-auth/react';
import Notifications from './notifications';
const NavBar = ({ subOne, subTwo ,subThree}: any) => {
  const t = useTranslations('HomePage');
  const { data: session } = useSession();
  return (
    <header className="bg-white p-2 pb-4 lg:px-16">
      <div className="flex items-center justify-between gap-8 rounded-full px-4 md:px-11 lg:bg-[#FAFAFA] lg:py-6">
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar subOne={subOne} subTwo={subTwo} subThree={subThree} />
        </div>
        <Link prefetch={true} href={'/'} className="mr-7 flex w-[60px] items-center justify-center lg:w-[100px]">
          <RaseenLogo />
        </Link>
        <div className={cn('hidden rounded-full bg-white px-7 py-7 lg:block')}>
          <NavigationMenuBar subOne={subOne} subTwo={subTwo} subThree={subThree} />
        </div>
        <div className="flex items-center">
          <Link
            prefetch={true}
            href={'/orders/new'}
            className={cn(
              buttonVariants({ variant: 'default', size: 'default' }),
              'hidden rounded-full bg-darkBlue px-8 py-8 text-base text-white lg:flex',
            )}
          >
            <Plus className="ml-2" size={20} />
            {t('getOffer')}
          </Link>
          {session && <Notifications />}
          {session && <UserMenu />}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
