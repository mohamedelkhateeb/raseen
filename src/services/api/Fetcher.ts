import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { getLocale } from 'next-intl/server';

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

const Fetcher = async <T>(endpoint: string, opt: FetchOptions = {}) => {
  try {
    const session = await getServerSession(options);
    const TOKEN = session?.token;
    const locale = await getLocale();
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Accept-Language': locale,
    };
    if (TOKEN) {
      headers['Authorization'] = `Bearer ${TOKEN}`;
    }
    const url = `${API_BASE_URL}api/${endpoint}`;
    const response = await fetch(url, {
      next: { revalidate: 0 },
      ...opt,
      headers,
    });
    console.log(url);
    const data = await response?.json().catch(() => {
      return {
        message: 'Failed Request',
        statusCode: response.status,
        statusText: response.statusText,
        data: null,
        success: response.ok,
        url: url,
      };
    });
    return data;
  } catch (error) {
    console.error(error);
    // throw error;
  }
};

export default Fetcher;
