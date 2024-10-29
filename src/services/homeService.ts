import { getLocale } from 'next-intl/server';
import Fetcher from './api/Fetcher';

export const getHomeContent = async () => {
  const locale = await getLocale();
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/home-page`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': locale,
      },
    });
    const data = await response?.json().catch(() => {
      return {
        message: 'Failed Request',
        statusCode: response.status,
        statusText: response.statusText,
        data: null,
        success: response.ok,
      };
    });
    return data?.data;
  } catch (error) {
    console.error(error);
  }
};
export const getSubCategories = async (catNum: string) => {
  try {
    const response = await Fetcher(`sub-categoreis/${catNum == "0" ? '' : catNum}`);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};
