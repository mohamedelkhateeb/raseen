'use client';
import * as React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { useTranslations } from 'next-intl';
import { useDirection } from '@/utils/helpers';
import { Link } from '@/i18n/routing';

// Helper function to generate menu sections
const renderMenuItems = (items: any[], categoryId: string) => (
  <ul className="flex min-h-fit w-[200px] flex-col border-t-4 border-[#004267] p-2 pt-6">
    {items?.map((item, i) => (
      <Link
        prefetch={true}
        href={`/companies?category=${categoryId}&subCategories=${item?.id}`}
        className="px-4 py-2 text-gray-400 hover:text-black"
        key={i}
      >
        {item.name}
      </Link>
    ))}
  </ul>
);

export default function NavigationMenuBar({ subOne, subTwo, subThree }: any) {
  const t = useTranslations('HomePage');
  const itemStyle = 'text-lg font-semibold transition-all hover:text-[#EA8D09] p-0';
  const direction = useDirection();
  const renderMenuSection = (label: string, items: any[], categoryId: string) => (
    <NavigationMenu dir={direction}>
      <NavigationMenuList className="flex">
        <NavigationMenuItem>
          <NavigationMenuTrigger className={itemStyle}>{t(`NavigationMenu.${label}`)}</NavigationMenuTrigger>
          <NavigationMenuContent className="left-0 top-0 overflow-auto">{renderMenuItems(items, categoryId)}</NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );

  return (
    <div className="flex flex-wrap gap-3 xl:gap-5">
      <NavigationMenu dir={direction} className="ml-3">
        <NavigationMenuList className="flex gap-3 xl:gap-5">
          <NavigationMenuItem>
            <Link prefetch={true} href="/" className={itemStyle}>
              {t('NavigationMenu.home')}
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link prefetch={true} href="/about-us" className={itemStyle}>
              {t('NavigationMenu.about')}
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {renderMenuSection('services.value', subOne, '1')}
      {renderMenuSection('contracting', subTwo, '2')}
      {renderMenuSection('allServices', subThree, '3')}
    </div>
  );
}
