import { direction } from '@/utils/helpers';
import Banners from './sections/banners';
import { getHomeContent } from '@/services/homeService';
import Categories from './sections/categories';
import Partners from './sections/partners';
import Rates from './sections/rates';
import Articals from './sections/articals';
import DecorationServices from './sections/decoration-services';

export default async function HomeView() {
  const data = await getHomeContent();
  return (
    <div dir={await direction()} className="flex flex-col justify-center gap-10">
      <Banners banners={data?.banners || []} />
      <Categories categories={data?.categories || []} />
      <DecorationServices />
      <Partners partners={data?.partners || []} />
      <Rates rates={data?.rates || []} />
      <Articals articals={data?.articals || []} />
    </div>
  );
}
