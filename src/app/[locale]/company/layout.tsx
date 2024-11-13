import { options } from '@/app/api/auth/[...nextauth]/options';
import { CompanyMobileSidebar } from '@/components/layouts/company-mobile-sidebar';
import CompanySidebar from '@/components/layouts/company-sidebar';
import { getServerSession } from 'next-auth';
import { IoNotificationsOutline } from 'react-icons/io5';

export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(options);
  return (
    <div className="grid h-[100vh] w-full grid-flow-col grid-cols-4 grid-rows-9 gap-4 p-10">
      <div className="col-span-1 row-span-9 hidden h-full lg:block">
        <CompanySidebar />
      </div>
      <div className="col-span-4 flex max-h-16 w-full items-center justify-end gap-4">
        <div className="block lg:hidden ml-auto">
          <CompanyMobileSidebar />
        </div>
        <IoNotificationsOutline size={70} className="rounded-full border p-6" color="gray" />
        <div className="min-w-1/4 flex items-center gap-4 rounded-3xl border p-4">
          <img src={session?.user.img} alt="compnay logo" className="h-16 w-16 rounded-full" />
          <div>
            <h1>{session?.user.name}</h1>
            <h1>{session?.user.email}</h1>
          </div>
        </div>
      </div>
      <div className="col-span-4 row-span-8 max-h-[100vh] overflow-auto">{children}</div>
    </div>
  );
}
