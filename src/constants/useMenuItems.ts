import { useTranslations } from 'next-intl';

export const useMenuItems = () => {
  const t = useTranslations('HomePage');

  const menuItems = {
    services: [
      {
        title: t('NavigationMenu.services.sub.maps'),
        href: '/',
      },
      {
        title: t('NavigationMenu.services.sub.desgins'),
        href: 'desgins',
      },
      {
        title: t('NavigationMenu.services.sub.externalFacadeDesigns'),
        href: '/',
      },
      {
        title: t('NavigationMenu.services.sub.completeDesign'),
        href: '/',
      },
      {
        title: t('NavigationMenu.services.sub.plans'),
        href: '/',
      },
      {
        title: t('NavigationMenu.services.sub.amountCount'),
        href: '/',
      },
    ],
    contracts: [
      {
        title: t('NavigationMenu.services.sub.maps'),
        href: '/',
      },
      {
        title: t('NavigationMenu.services.sub.desgins'),
        href: 'desgins',
      },
      {
        title: t('NavigationMenu.services.sub.externalFacadeDesigns'),
        href: '/',
      },
      {
        title: t('NavigationMenu.services.sub.completeDesign'),
        href: '/',
      },
      {
        title: t('NavigationMenu.services.sub.plans'),
        href: '/',
      },
      {
        title: t('NavigationMenu.services.sub.amountCount'),
        href: '/',
      },
    ],
  };
  return menuItems;
};
