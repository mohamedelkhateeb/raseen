'use client';
import SocialMediaIcons from '../svgs/social-media';
import { Tree } from '../svgs/tree';
import { SelectLang } from '../common/choose-lang';
import { User } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useSession } from 'next-auth/react';

const Slogen = () => {
  const t = useTranslations('HomePage');
  const { data: session } = useSession();
  return (
    <div>
      <section className="top-bar y-5 flex w-full items-center justify-around gap-4 bg-[#004267] px-8 py-4 md:h-[60px] md:flex-row md:justify-between lg:px-[84px]">
        <div className="hidden h-[20px] w-[152px] items-center justify-center gap-[15px] md:flex">
          <SocialMediaIcons />
        </div>
        <div className="flex h-[20px] items-center gap-2">
          <p className="text-[#FFFFFF] sm:text-sm">{t('slogen')}</p>
          <Tree />
        </div>
        <div className="hidden items-center justify-center gap-6 md:flex">
          {!session && (
            <Link href="/sign-in" className="flex items-center justify-center gap-2">
              <User size={20} color="#FFFFFF" />
              <span className="min-w-24 text-[#FFFFFF] md:text-sm">{t('signin')}</span>
            </Link>
          )}
          <SelectLang style=" gap-4 border-none bg-transparent text-white outline-none" />
        </div>
      </section>
    </div>
  );
};

export default Slogen;
