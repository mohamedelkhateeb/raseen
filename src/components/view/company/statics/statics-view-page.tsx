import { getCompanyStatics } from '@/services/companyService';
import StaticsCard from './statics-card';
import { StaticsFilter } from './statics-filter';
import { searchParams, searchParamsCache } from '@/utils/searchparams';

export default async function StaticsViewPage() {
  const date = searchParamsCache.get('staticsFilter');
  const statics = await getCompanyStatics(date);
  //console.log({ statics });
  const statsArray = [
    { title: 'عدد العروض المقدمة', icon: '📦', value: statics?.data?.orders },
    { title: 'عدد الطلبات المقبولة', icon: '✅', value: statics?.data?.offers_accept },
    { title: 'عدد الطلبات المرفوضة', icon: '❌', value: statics?.data?.offers_rejected },
    { title: 'عدد محادثات الواتساب', icon: '💬', value: statics?.data?.call_whatsapp },
    { title: 'عدد الطلبات المستقبلة', icon: '⏳', value: statics?.data?.offers_waiting },
    { title: 'عدد المكالمات المستقبلة', icon: '📞', value: statics?.data?.call_phones },
    { title: 'عدد مشاهدات الملف الشخصي', icon: '👀', value: statics?.data?.viewers_count },
  ];

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="mt-7 flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">الاحصائيات</h1>
        <StaticsFilter />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {statsArray.map((item, index) => (
          <StaticsCard key={index} title={item.title} icon={item.icon} count={item.value} />
        ))}
      </div>
    </div>
  );
}
