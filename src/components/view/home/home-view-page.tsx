import { direction } from '@/utils/helpers';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import ImageCard5 from '../../../../public/card.svg';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link } from '@/i18n/routing';
import Banners from './sections/banners';
import { getHomeContent } from '@/services/homeService';
import Categories from './sections/categories';
import Partners from './sections/partners';
import Rates from './sections/rates';
import Articals from './sections/articals';

export default async function HomeView() {
  const t = await getTranslations('HomePage');
  const data = await getHomeContent();
  return (
    <div dir={await direction()} className='flex flex-col justify-center gap-10'>
      <Banners banners={data?.banners || []} />
      <Categories categories={data?.categories || []} />
      <section className="flex h-fit flex-col items-center justify-center gap-14 bg-[#004267] py-12">
        <h1 className="text-2xl font-bold leading-normal text-white md:text-3xl xl:leading-normal">تصميم ديكورك المتكامل بسهولة</h1>
        <div className="grid grid-cols-1 gap-12 px-10 xl:grid-cols-3">
          {Array.from({ length: 3 })?.map((_, index) => (
            <div className="flex flex-col items-center gap-6 rounded-3xl border py-10 lg:p-2">
              <Image className="h-[100px] w-[170px] lg:h-[284px] lg:w-[300px]" src={ImageCard5} alt="" />
              <h1 className="text-xl font-bold leading-normal text-white md:text-2xl xl:leading-normal">تشطيب .. مقاولات .. ديكور</h1>
              <p className="mx-5 p-2 text-center text-xl font-medium text-white md:text-xl xl:text-2xl">
                كل ما تحتاجه لمنزلك احصل عليه مع رصين بأعلى جودة وخدمات متميزة
              </p>
              <div className="flex items-center">
                <Link href="/services" className={'flex items-center justify-end gap-4 py-0 text-xl font-bold text-white lg:pb-6 lg:text-2xl'}>
                  تصفح الخدمات <IoIosArrowRoundBack size={35} color="white" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Partners partners={data?.partners || []} />
      <Rates rates={data?.rates || []} />
      <Articals articals={data?.articals || []} />
    </div>
  );
}
