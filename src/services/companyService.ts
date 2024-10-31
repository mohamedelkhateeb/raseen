'use server';
import ReqHeaders from '@/utils/config';
import apiService from './api/apiService';
import Fetcher from './api/Fetcher';
import { revalidateTag } from 'next/cache';

export const getCompanies = async (filter: any, search?: string | null) => {
  const selectedIds: string[] = filter?.sub_categories ? filter?.sub_categories.split(',') : [];  
  const formData = new FormData();
  if (search) formData.append('search', search);
  formData.append('category_id', filter?.category_id || 1);
  formData.append('sub_categories', JSON.stringify(selectedIds.map((id) => ({ id }))));
  formData.append('city_id', filter?.city_id || 1);
  formData.append('min_price', filter?.min_price || 0);
  formData.append('min_avg_rates', filter?.max_price || 0);
  formData.append('max_price', filter?.min_avg_rates || 0);
  formData.append('max_avg_rates', filter?.max_avg_rates || 0);
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/${search ? 'search' : 'filter'}`, {
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
    console.log(response);
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
    console.log(response);
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
