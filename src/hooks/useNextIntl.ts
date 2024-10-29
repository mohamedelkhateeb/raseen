import { useTranslations } from 'next-intl';

export const useNextIntl = (path: string, content: string) => {
  const t = useTranslations(path);
  return null;
};
