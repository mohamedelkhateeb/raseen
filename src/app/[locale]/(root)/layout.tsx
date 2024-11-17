import { options } from '@/app/api/auth/[...nextauth]/options';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import { redirect } from '@/i18n/routing';
import { getServerSession } from 'next-auth';

export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
  const session: any = await getServerSession(options);
  if (session && session?.user?.user_type == 'companies') {
    redirect('/company');
  }
  return (
    <div className="">
      <Header />
      <main className="w-full flex-1 overflow-hidden">{children}</main>
      <Footer />
    </div>
  );
}
