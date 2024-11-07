import SigninCover from '../../../../public/sigin-pic.svg';
import SigninLogo from '../../../../public/rseen 2.svg';
import Image from 'next/image';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { Link, redirect } from '@/i18n/routing';

export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(options);
  if (session) {
    redirect('/');
  }
  return (
    <div className="relative h-screen flex-col items-center justify-center lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link href={'/'} className="absolute right-6 top-6 z-10 hidden lg:block">
        <Image src={SigninLogo} alt="Sign in cover" className="" />
      </Link>
      <main className="flex h-full items-center p-4 lg:p-8">{children}</main>
      <div className="ml-10 mr-auto hidden max-h-[90vh] lg:flex">
        <Image
          src={SigninCover}
          alt="Sign in cover"
          className="object-contain"
          layout="responsive"
          placeholder="blur"
          priority={true}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
