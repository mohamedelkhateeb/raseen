'use server';
import { getLocale } from 'next-intl/server';
import ReqHeaders from '@/utils/config';

export const getHomeContent = async () => {
  const locale = await getLocale();
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/home-page`, {
      cache: 'no-store',
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
  const locale = await getLocale();
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/sub-categoreis${catNum == '0' ? '' : `/${catNum}`}`, {
      cache: 'no-store',
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
export const getTerms = async () => {
  const locale = await getLocale();
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/terms`, {
      cache: 'no-store',
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

export const contactUs = async (data: FormData) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/contact-us`, {
      method: 'POST',
      cache: 'no-cache',
      body: data,
      headers: await ReqHeaders({}),
    });
    console.log({ response });

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
