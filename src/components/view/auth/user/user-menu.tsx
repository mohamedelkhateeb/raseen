'use client';
import { buttonVariants } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CiEdit } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa6';
import { LuLogOut } from 'react-icons/lu';
import { HiOutlineIdentification } from 'react-icons/hi2';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { BsBoxSeam } from 'react-icons/bs';
import { PopoverClose } from '@radix-ui/react-popover';
import { signOut, useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl'; // Import the useTranslations hook

export function UserMenu() {
  const { data: session } = useSession();
  const t = useTranslations('UserMenu'); // Use a namespace for translations

  return (
    <Popover>
      <PopoverTrigger asChild>
        <img src={session?.user?.img} alt="Profile" className="h-20 w-20 cursor-pointer rounded-full lg:h-20 lg:w-20" width={200} height={200} />
      </PopoverTrigger>
      <PopoverContent className="w-96 p-8 shadow-lg" side="bottom" sideOffset={20} align="end">
        <div className="flex items-center gap-4">
          <img src={session?.user?.img} alt="Profile" className="h-20 w-20 cursor-pointer rounded-full lg:h-20 lg:w-20" width={200} height={200} />
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
          prefetch={true}
          href={'/profile'}
          className={cn(
            buttonVariants({ variant: 'default', size: 'default' }),
            'mx-auto my-6 w-full gap-2 bg-darkBlue py-6 text-lg text-white outline-none focus:outline-none',
          )}
        >
          <PopoverClose className="flex w-full items-center gap-3 justify-center outline-none">
            <CiEdit size={25} />
            {t('editProfile')}
          </PopoverClose>
        </Link>
        <div className=" flex flex-col gap-4 text-lg font-semibold">
          <Link prefetch={true} href={'/orders'}>
            <PopoverClose className="flex items-center gap-4">
              <BsBoxSeam color="#004267" />
              {t('myOrders')}
            </PopoverClose>
          </Link>
          <Link prefetch={true} href={'/companies/favorite'}>
            <PopoverClose className="flex items-center gap-4">
              <FaHeart color="#004267" />
              {t('favoriteCompanies')}
            </PopoverClose>
          </Link>
          <div onClick={() => signOut({ callbackUrl: '/' })}>
            <PopoverClose className="flex items-center gap-4">
              <LuLogOut color="red" />
              {t('signOut')}
            </PopoverClose>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
