'use server';
import ReqHeaders from '@/utils/config';
import apiService from './api/apiService';
import Fetcher from './api/Fetcher';
import { revalidateTag } from 'next/cache';

export const getCompanies = async (filter: any, pageNumber: number, search?: string | null) => {
  console.log({ filter });

  const selectedIds: string[] = filter?.sub_categories ? filter?.sub_categories.split(',') : [];
  const formData = new FormData();
  if (search) formData.append('search', search);
  filter?.category_id > 0 && formData.append('category_id', filter?.category_id);
  formData.append('sub_categories', JSON.stringify(selectedIds?.map((id) => ({ id }))));
  formData.append('city_id', filter?.city_id);
  filter?.min_price && formData.append('min_price', filter?.min_price);
  filter?.min_avg_rates && formData.append('max_price', filter?.min_avg_rates);
  filter?.max_price && formData.append('min_avg_rates', filter?.max_price);
  filter?.max_avg_rates && formData.append('max_avg_rates', filter?.max_avg_rates);

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/${search ? `search?${pageNumber}` : `filter?page=${pageNumber}`}`, {
      method: 'POST',
      cache: 'no-cache',
      body: formData,
      headers: await ReqHeaders({}),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
export const getFavCompanies = async () => {
  try {
    const response = await Fetcher(`user-favourites`, {
      next: { tags: ['favourites'] },
    });
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};
export const getCompany = async (id: string) => {
  try {
    const response = await Fetcher(`company-details/${id}`);
    //console.log({ response });

    return response?.data;
  } catch (error) {
    console.error(error);
  }
};
export const getCategories = async () => {
  try {
    const response = await Fetcher(`categories`);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};
export const filterCompanies = async (data: any) => {
  const response = await apiService.post('', 'filter', data);
  return response;
};
export const likeCompany = async (data: any) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/fav-company`, {
      method: 'POST',
      cache: 'no-cache',
      body: data,
      headers: await ReqHeaders({}),
    });
    //console.log(response);
    revalidateTag('favourites');
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
export const shareCompany = async (data: any) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/share`, {
      method: 'POST',
      cache: 'no-cache',
      body: data,
      headers: await ReqHeaders({}),
    });
    //console.log(response);
    revalidateTag('favourites');
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
export const rateCompany = async (data: FormData) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/rate`, {
      method: 'POST',
      cache: 'no-cache',
      body: data,
      headers: await ReqHeaders({}),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
export const getCompanyOrders = async () => {
  const result = await Fetcher('company-orders');
  return result?.data;
};
export const getCompanyOffers = async () => {
  const result = await Fetcher('get-offers');
  return result?.data;
};
export const getCompanyStatics = async (filter: string) => {
  const data = new FormData();
  data.append('filter', filter);
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/company-statics`, {
      method: 'POST',
      cache: 'no-cache',
      headers: await ReqHeaders({}),
      body: data,
    });
    return await result.json().catch(() => ({
      data: null,
      status: false,
      message: 'getting Company Statics failed',
      statusCode: result?.status,
      statusText: result?.statusText,
    }));
  } catch (error) {
    console.error(error);
  }
};
export const callPhone = async (data: FormData) => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/call-phone`, {
    method: 'POST',
    cache: 'no-cache',
    headers: await ReqHeaders({}),
    body: data,
  });
  return await result.json().catch(() => ({
    data: null,
    status: false,
    message: 'Call failed',
    statusCode: result?.status,
    statusText: result?.statusText,
  }));
};

export const sendOffer = async (data: FormData) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/send-offer`, {
      method: 'POST',
      cache: 'no-cache',
      body: data,
      headers: await ReqHeaders({}),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const getPlans = async () => {
  const res = await Fetcher('plans');
  return res?.data;
};
