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
import { useMenuItems } from '@/constants/useMenuItems';
import { NavItem, NavItems } from '@/types/app';

// Helper function to generate menu sections
const renderMenuItems = (items: NavItem[]) => (
  <ul className="flex h-[300px] w-[200px] flex-col border-t-4 border-[#004267] p-2 pt-6">
    {items.map((item, i) => (
      <Link className="px-4 py-2 text-gray-400 hover:text-black" key={i} title={item.title} href={item.href}>
        {item.title}
      </Link>
    ))}
  </ul>
);

export default function NavigationMenuBar() {
  const t = useTranslations('HomePage');
  const itemStyle = 'text-lg font-semibold transition-all hover:text-[#EA8D09] p-0';
  const direction = useDirection();
  const menuItems: NavItems = useMenuItems();

  const renderMenuSection = (label: string, items: NavItem[]) => (
    <NavigationMenu dir={direction}>
      <NavigationMenuList className="flex">
        <NavigationMenuItem>
          <NavigationMenuTrigger className={itemStyle}>{t(`NavigationMenu.${label}`)}</NavigationMenuTrigger>
          <NavigationMenuContent className="left-0 top-0 overflow-auto">{renderMenuItems(items)}</NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );

  return (
    <div className="flex flex-wrap gap-3 xl:gap-5">
      <NavigationMenu dir={direction} className="ml-3">
        <NavigationMenuList className="flex gap-3 xl:gap-5">
          <NavigationMenuItem>
            <Link href="/" className={itemStyle}>
              {t('NavigationMenu.home')}
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" className={itemStyle}>
              {t('NavigationMenu.about')}
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {renderMenuSection('services.value', menuItems.services)}
      {renderMenuSection('contracting', menuItems.contracts)}
    </div>
  );
}
