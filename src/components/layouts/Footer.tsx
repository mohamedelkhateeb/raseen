'use client';
import RaseenLogo from '../svgs/raseen-logo';
import { PlayStore } from '../svgs/play-store';
import { AppStore } from '../svgs/app-store';
import { Link } from '@/i18n/routing';
import SocialMediaLinks from '../common/social-media-links';
import { useClientFetch } from '@/hooks/use-client-fetch';
const Footer = () => {
  const { Data } = useClientFetch(null, 'footer');
  return (
    <footer className="border-t bg-[#F8F8F8] p-6 text-center md:px-12 md:text-right">
      <div className="flex flex-col gap-20 lg:flex-row">
        <div className="flex flex-col items-center gap-5 sm:text-left">
          <RaseenLogo />
          <p className="mb-4 text-center font-medium text-black md:text-start">
            موقع يوفر لك كل ما تحتاجه لمساحتك من مقاولات .. تشطيب .. وحتى الديكور الداخلي
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
            <h3 className="mb-4 text-lg font-bold">روابط هامة</h3>
            <ul>
              <li className="mb-2">
                <Link href="/" className="hover:text-primary">
                  الرئيسية
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/companies" className="hover:text-primary">
                  الشركات
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/#articles" className="hover:text-primary">
                  المقالات
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-primary">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>
          {/* About Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">عن رصين</h3>
            <ul>
              <li className="mb-2">
                <Link href="#" className="hover:text-primary">
                  إعرفني
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-primary">
                  الأحكام والشروط
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-primary">
                  سياسة الخصوصية
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-primary">
                  الأسئلة الشائعة
                </Link>
              </li>
            </ul>
          </div>
          {/* Services Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">خدماتنا</h3>
            <ul>
              <li className="mb-2">
                <Link href="/companies?category=1" className="hover:text-primary">
                  المكاتب الهندسية
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/companies?category=2" className="hover:text-primary">
                  المقاولات والديكور
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
            جميع الحقوق محفوظة <span className="text-yellow-500"> لموقع رصين</span> © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
