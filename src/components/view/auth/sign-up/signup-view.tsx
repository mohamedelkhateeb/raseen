import { Metadata } from 'next';
import SigninLogo from '../../../../../public/rseen 2.svg';
import Image from 'next/image';
import SignUpForm from './signup-form';
import { getCities } from '@/services/authService';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
};
export async function SignUpView() {
  const cities = await getCities();
  return (
    <div className="mx-auto flex w-[430px] flex-col justify-center space-y-6 rounded border px-6 py-10 shadow-2xl lg:w-[646px] lg:border-0 lg:p-0 lg:shadow-none">
      <div className="flex flex-col space-y-3 text-center">
        <Image src={SigninLogo} alt="Sign in cover" className="mx-auto my-6 lg:hidden" />
        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">مرحباً بك مجددا</h1>
        <p className="text-sm font-semibold text-gray-600 lg:text-xl">أكمل بياناتك بالأسفل لإنشاء حساب</p>
      </div>
      <SignUpForm cities={cities || []} />
    </div>
  );
}
