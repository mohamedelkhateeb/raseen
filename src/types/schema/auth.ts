import { object, z } from 'zod';

export const signInSchema = object({
  phone: z.string({ required_error: 'رقم الجوال مطلوب' }).length(9, 'رقم الجوال يجب ان يكون 9 ارقام'),
  device_key: z.string({ required_error: 'Device key is required' }).nullish().default('device key'),
});

export const signUpSchema = object({
  phone: z.string({ required_error: 'رقم الجوال مطلوب' }).length(9, 'رقم الجوال يجب ان يكون 9 ارقام'),
  device_key: z.string({ required_error: 'Device key is required' }).nullish().default('device key'),
  name: z.string({ required_error: 'الاسم مطلوب' }).min(3, 'الاسم يجب ان يكون على الاقل 3 حروف'),
  email: z.string({ required_error: 'البريد الالكتروني مطلوب' }).email('البريد الالكتروني غير صحيح'),
  city_id: z.coerce.number({ required_error: 'المدينة مطلوبة' }).min(1, 'المدينة مطلوبة'),
});

export const checkOtpSchema = object({
  phone: z.string({ required_error: 'رقم الجوال مطلوب' }).length(9, 'رقم الجوال يجب ان يكون 9 ارقام'),
  otp: z.number({ required_error: 'يجب ادخال الرقم المكون من 4 ارقام' }).min(1, 'يجب ادخال الرقم المكون من 4 ارقام'),
  confirmedOTP: z.number({ required_error: 'يجب ادخال الرقم المكون من 4 ارقام' }).min(1, 'يجب ادخال الرقم المكون من 4 ارقام'),
}).refine((data) => data.otp === data.confirmedOTP, {
  message: 'الرقم غير صحيح',
  path: ['confirmedOTP'],
});
