import CompanyViewPage from '@/components/view/home/companies/company-view-page';
import { getCategories, getCompanies } from '@/services/companyService';
import { getSubCategories } from '@/services/homeService';
import { Category } from '@/types/models/home.model';
import { searchParamsCache } from '@/utils/searchparams';

export default async function CompanyPage({ searchParams }: { searchParams: Record<string, string> }) {
  searchParamsCache.parse(searchParams);
  const category_id = searchParamsCache.get('category');
  const sub_categories = searchParamsCache.get('subCategories');
  const city_id = searchParamsCache.get('city_id');
  const max_price = searchParamsCache.get('maxPrice');
  const max_avg_rates = searchParamsCache.get('maxRate');
  const min_price = searchParamsCache.get('minPrice');
  const min_avg_rates = searchParamsCache.get('minRate');
  const companies = await getCompanies(
    { category_id, city_id, max_price, max_avg_rates, min_price, min_avg_rates, sub_categories },
    searchParamsCache.get('search'),
  );
  const categories = await getCategories();
  const subCategory: Category[] = await getSubCategories(category_id);

  return <CompanyViewPage companies={companies?.data || []} categories={categories || []} subCategory={subCategory || []} />;
}
