'use server';
import ReqHeaders from '@/utils/config';
import Fetcher from './api/Fetcher';
import { revalidateTag } from 'next/cache';

export const createOrder = async (data: FormData) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/create-order`, {
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

export const acceptOffer = async (data: FormData) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/accept-offer`, {
      method: 'POST',
      cache: 'no-cache',
      body: data,
      headers: await ReqHeaders({}),
    });
    revalidateTag('order');
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
export const finishOrder = async (data: FormData) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/finish-order`, {
      method: 'POST',
      cache: 'no-cache',
      body: data,
      headers: await ReqHeaders({}),
    });
    revalidateTag('order');
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const getOrders = async () => {
  try {
    const response = await Fetcher(`user-orders`);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};

export const getOrder = async (id: string) => {
  try {
    const response = await Fetcher(`order-details/${id}`, {
      next: { tags: ['order'] },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const getCompanyOrder = async (id: string) => {
  try {
    const response = await Fetcher(`get-order-details/${id}`, {
      next: { tags: ['order'] },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const getRelatedService = async () => {
  try {
    const response = await Fetcher(`order-subcategories`, {
      next: { tags: ['order'] },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
