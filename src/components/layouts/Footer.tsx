'use client';
import RaseenLogo from '../svgs/raseen-logo';
import { PlayStore } from '../svgs/play-store';
import { AppStore } from '../svgs/app-store';
import { Link } from '@/i18n/routing';
import SocialMediaLinks from '../common/social-media-links';
import { useClientFetch } from '@/hooks/use-client-fetch';
import { useTranslations } from 'next-intl'; // Assuming you are using next-intl

const Footer = () => {
  const { Data } = useClientFetch(null, 'footer');
  const t = useTranslations('footer'); 

  return (
    <footer className="border-t bg-[#F8F8F8] p-6  md:px-12">
      <div className="flex flex-col gap-20 lg:flex-row">
        <div className="flex flex-col items-center gap-5 sm:text-left">
          <RaseenLogo />
          <p className="mb-4 text-center font-medium text-black md:text-start">
            {t('description')}
          </p>
          <div className="flex justify-center gap-4 sm:justify-start">
            <button onClick={() => window.open(Data?.data?.android, '_blank')}>
              <PlayStore />
            </button>
            <button onClick={() => window.open(Data?.data?.ios, '_blank')}>
              <AppStore />
            </button>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">{t('importantLinks')}</h3>
            <ul>
              <li className="mb-2">
                <Link prefetch={true} href="/" className="hover:text-primary">
                  {t('home')}
                </Link>
              </li>
              <li className="mb-2">
                <Link prefetch={true} href="/companies" className="hover:text-primary">
                  {t('companies')}
                </Link>
              </li>
              <li className="mb-2">
                <Link prefetch={true} href="/articles" className="hover:text-primary">
                  {t('articles')}
                </Link>
              </li>
              <li className="mb-2">
                <Link prefetch={true} href="/contact-us" className="hover:text-primary">
                  {t('contactUs')}
                </Link>
              </li>
            </ul>
          </div>
          {/* About Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">{t('aboutRaseen')}</h3>
            <ul>
              <li className="mb-2">
                <Link prefetch={true} href="/about-us" className="hover:text-primary">
                  {t('aboutRaseen')}
                </Link>
              </li>
              <li className="mb-2">
                <Link prefetch={true} href="/terms" className="hover:text-primary">
                  {t('termsAndConditions')}
                </Link>
              </li>
              <li className="mb-2">
                <Link prefetch={true} href="/privacy" className="hover:text-primary">
                  {t('privacyPolicy')}
                </Link>
              </li>
              <li className="mb-2">
                <Link prefetch={true} href="/faq" className="hover:text-primary">
                  {t('faq')}
                </Link>
              </li>
            </ul>
          </div>
          {/* Services Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">{t('ourServices')}</h3>
            <ul>
              <li className="mb-2">
                <Link prefetch={true} href="/companies?category=1" className="hover:text-primary">
                  {t('engineeringOffices')}
                </Link>
              </li>
              <li className="mb-2">
                <Link prefetch={true} href="/companies?category=2" className="hover:text-primary">
                  {t('constructionAndDecoration')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright and Social Icons */}
      <div className="mt-8 border-t pt-4">
        <div className="mx-auto flex flex-col items-center justify-between text-sm text-gray-500 md:flex-row">
          <div className="mb-6 flex gap-4 md:mb-0">
            <div className="mt-7 flex w-full items-center gap-4">
              <SocialMediaLinks />
            </div>
          </div>
          <p className="mb-4 md:mb-0">
            {t('copyrightText')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
