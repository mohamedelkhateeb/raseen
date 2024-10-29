import { useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export const useDirection = () => {
  const locale = useLocale();
  return locale == 'ar' ? 'rtl' : 'ltr';
};

export const direction = async () => {
  const t = await getTranslations();
  return t('lang') == 'ar' ? 'rtl' : 'ltr';
};

export const isTokenExpired = (expirationDate: string): boolean => {
  const expiration = new Date(expirationDate).getTime() - 60000;
  const now = new Date().toISOString();
  const currentTime = new Date(now).getTime();
  return currentTime >= expiration;
};
