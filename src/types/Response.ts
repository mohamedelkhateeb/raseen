export interface Response<T> {
  data: T;
  message: string;
  status: boolean;
}

export interface Data {
  is_active: boolean;
  is_available: boolean;
  user: User;
  token: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  device_key: string;
  otp: any;
  img: string;
  user_type: string;
}

export interface Pagination {
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Array<{ url: string | null; label: string; active: boolean }>;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}
