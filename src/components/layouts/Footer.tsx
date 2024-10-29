import SocialMediaIcons from '../svgs/social-media';
import RaseenLogo from '../svgs/raseen-logo';
import { PlayStore } from '../svgs/play-store';
import { AppStore } from '../svgs/app-store';
import { Link } from '@/i18n/routing';
import { LuInstagram } from 'react-icons/lu';
import { RiSnapchatFill } from 'react-icons/ri';
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-[#F8F8F8] p-6 text-center md:p-12 md:text-right">
      <div className="flex flex-col gap-20 lg:flex-row">
        <div className="flex flex-col items-center gap-5 sm:text-left">
          <RaseenLogo />
          <p className="mb-4 text-center font-medium text-black md:text-start">
            موقع يوفر لك كل ما تحتاجه لمساحتك من مقاولات .. تشطيب .. وحتى الديكور الداخلي
          </p>
          <div className="flex justify-center gap-4 sm:justify-start">
            <PlayStore />
            <AppStore />
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">روابط هامة</h3>
            <ul>
              <li className="mb-2">
                <Link href="#" className="hover:text-primary">
                  الرئيسية
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-primary">
                  الشركات
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-primary">
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
                <Link href="#" className="hover:text-primary">
                  المكاتب الهندسية
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-primary">
                  التشطيب والديكور
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
              <LuInstagram color="#004267" size={40} className="rounded-full bg-[#E5ECF0] p-3 hover:bg-slate-300" />
              <RiSnapchatFill color="#004267" size={40} className="rounded-full bg-[#E5ECF0] p-3 hover:bg-slate-300" />
              <FaXTwitter color="#004267" size={40} className="rounded-full bg-[#E5ECF0] p-3 hover:bg-slate-300" />
              <FaFacebookF color="#004267" size={40} className="rounded-full bg-[#E5ECF0] p-3 hover:bg-slate-300" />
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
