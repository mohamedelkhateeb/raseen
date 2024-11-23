import CompanyOrdersView from '@/components/view/company/home/company-orders-view';
import { searchParamsCache } from '@/utils/searchparams';

export default async function Page({ searchParams }: { searchParams: Record<string, string> }) {
  searchParamsCache.parse(searchParams);

  return <CompanyOrdersView />;
}
