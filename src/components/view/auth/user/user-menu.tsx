import { buttonVariants } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Profile from '../../../../../public/profile.svg';
import { CiEdit } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa6';
import { LuLogOut } from 'react-icons/lu';
import { HiOutlineIdentification } from 'react-icons/hi2';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { BsBoxSeam } from 'react-icons/bs';
import { PopoverClose } from '@radix-ui/react-popover';
import { signOut, useSession } from 'next-auth/react';

export function UserMenu() {
  const { data: session } = useSession();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <img src={session?.user?.img || Profile} alt="Profile" className="lg:w-30 h-24 w-24 cursor-pointer rounded-full" width={200} height={200} />
      </PopoverTrigger>
      <PopoverContent className="w-96 p-8 shadow-lg" side="bottom" sideOffset={20} align="end">
        <div className="flex items-center gap-4">
          <img src={session?.user?.img || Profile} alt="Profile" className="lg:w-30 h-24 w-24 cursor-pointer rounded-full" width={200} height={200} />
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">{session?.user?.name}</h1>
            <p className="text-xs text-gray-700">{session?.user?.email}</p>
            <p className="flex items-center gap-2">
              <HiOutlineIdentification color="#004267" />
              {session?.user?.user_type}
            </p>
          </div>
        </div>
        <Link
          href={'/profile'}
          className={cn(
            buttonVariants({ variant: 'default', size: 'default' }),
            'mx-auto my-6 w-full gap-2 bg-darkBlue py-6 text-lg text-white outline-none focus:outline-none',
          )}
        >
          <PopoverClose className="flex w-full items-center justify-center outline-none">
            <CiEdit size={25} />
            تعديل
          </PopoverClose>
        </Link>
        <div className="mt-10 flex flex-col gap-4 text-lg font-semibold">
          <Link href={'/orders'}>
            <PopoverClose className="flex items-center gap-4">
              <BsBoxSeam color="#004267" />
              طلباتي
            </PopoverClose>
          </Link>
          <Link href={'/companies/favorite'}>
            <PopoverClose className="flex items-center gap-4">
              <FaHeart color="#004267" />
              الشركات المفضلة
            </PopoverClose>
          </Link>
          <div onClick={() => signOut({ callbackUrl: '/' })}>
            <PopoverClose className="flex items-center gap-4">
              <LuLogOut color="red" />
              تسجيل الخروج
            </PopoverClose>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
