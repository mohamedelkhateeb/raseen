'use client';
import React from 'react';
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { AlignRight, User, X } from 'lucide-react';
import { LuInstagram } from 'react-icons/lu';
import { useDirection } from '@/utils/helpers';
import { Separator } from '../ui/separator';
import GenericAccordion from '../common/according';
import { useTranslations } from 'next-intl';
import { useMenuItems } from '@/constants/useMenuItems';
import RaseenLogo from '../svgs/raseen-logo';
import { Link } from '@/i18n/routing';
import { Button, buttonVariants } from '../ui/button';
import { RiSnapchatFill } from 'react-icons/ri';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { SelectLang } from '../common/choose-lang';
import { cn } from '@/lib/utils';
import { useSession } from 'next-auth/react';
import SocialMediaLinks from '../common/social-media-links';

export function MobileSidebar({ subOne, subTwo }: any) {
  const t = useTranslations('HomePage');
  const accordionItems = [
    {
      value: '1',
      trigger: t('NavigationMenu.services.value'),
      content: subOne,
    },
    {
      value: '2',
      trigger: t('NavigationMenu.contracting'),
      content: subTwo,
    },
  ];

  const { data: session } = useSession();
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <AlignRight size={30} color="#76777B" strokeWidth={1.5} />
        </SheetTrigger>
        <SheetContent aria-describedby={undefined} dir={useDirection()} side="right" className="w-[320px] overflow-y-auto p-5">
          <SheetTitle className="flex w-full">
            <div className="mb-6 flex w-[80px] justify-between">
              <RaseenLogo />
              {/* <X size={32} strokeWidth={2} /> */}
            </div>
            {/* <SheetClose className="flex items-center justify-between gap-4 px-6 lg:gap-8" /> */}
          </SheetTitle>
          <div className="mb-6 flex flex-col justify-center gap-4 lg:gap-8">
            <Link prefetch={true} className="font-semibold" href="/">
              {t('NavigationMenu.home')}
            </Link>
            <Separator />
            <Link prefetch={true} className="font-semibold" href="/about-us">
              {t('NavigationMenu.about')}
            </Link>
            <Separator />
            <GenericAccordion items={accordionItems} />
          </div>
          {!session && (
            <div className="mt-5 flex justify-center">
              <Link
                prefetch={true}
                href="/sign-in"
                className={cn(
                  buttonVariants({ variant: 'default', size: 'default' }),
                  'w-full rounded-full bg-[#004267] px-6 py-7 font-[600] text-white',
                )}
              >
                <User className="ml-2" size={20} />
                {t('signin')}
              </Link>
            </div>
          )}
          <div className="mt-12">
            <p className="text-sm font-bold">{t('followUs')}</p>
            <div className="mt-7 flex w-full items-center gap-4">
              <SocialMediaLinks />
            </div>
            <div className="mt-12">
              <Separator className="mt-10" />
              <SelectLang style="text-black w-44 border-none mt-10" />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
