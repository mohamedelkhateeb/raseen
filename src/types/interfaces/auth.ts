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
