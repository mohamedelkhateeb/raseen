import CompanyOffersView from '@/components/view/company/offers/company-offers-view';
import { searchParamsCache } from '@/utils/searchparams';

export default async function Page({ searchParams }: { searchParams: Record<string, string> }) {
  searchParamsCache.parse(searchParams);
  return <CompanyOffersView />;
}
