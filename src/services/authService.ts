'use server';

import { Cities } from '@/types/app';
import ReqHeaders from '@/utils/config';
import { getLocale } from 'next-intl/server';
import Fetcher from './api/Fetcher';
import { revalidatePath, revalidateTag } from 'next/cache';

export const signIn = async (data: { phone: string; device_key?: string | null }) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/sign-in`, {
      method: 'POST',
      cache: 'no-cache',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
export const signUp = async (data: any) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/sign-up`, {
      method: 'POST',
      cache: 'no-cache',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
export const companySignUp = async (data: FormData) => {
  const locale = await getLocale();
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/company-sign-up`, {
      method: 'POST',
      cache: 'no-cache',
      body: data,
      headers: { 'Accept-Language': locale },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
export const checkOTP = async (data: { phone: string; otp: number }) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/check-otp`, {
      method: 'POST',
      cache: 'no-cache',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
export const getCities = async () => {
  const locale = await getLocale();
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/cities`, {
      method: 'GET',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json', 'Accept-Language': locale },
    });
    return (await response.json())?.data as Cities[];
  } catch (error) {
    console.error(error);
  }
};

export const updateProfile = async (data: FormData) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/user/update-profile`, {
      method: 'POST',
      cache: 'no-cache',
      body: data,
      headers: await ReqHeaders({}),
    });
    revalidatePath('profile');
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const getProfile = async () => {
  try {
    const response = await Fetcher(`user/get-profile`, {
      next: { tags: ['profile'] },
    });
    //console.log(response);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};
