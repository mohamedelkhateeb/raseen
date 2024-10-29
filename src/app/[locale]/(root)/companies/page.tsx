import { options } from '@/app/api/auth/[...nextauth]/options';
import CompanyViewPage from '@/components/view/companies/company-view-page';
import { redirect } from '@/i18n/routing';
import { getCategories, getCompanies } from '@/services/companyService';
import { getSubCategories } from '@/services/homeService';
import { Category } from '@/types/models/home.model';
import { searchParamsCache } from '@/utils/searchparams';
import { getServerSession } from 'next-auth';

export default async function CompanyPage({ searchParams }: { searchParams: Record<string, string> }) {
  const session = await getServerSession(options);
  if (!session) {
    redirect('/sign-in');
  }
  searchParamsCache.parse(searchParams);
  const filter = searchParamsCache.get('filter');
  const companies = await getCompanies(filter, searchParamsCache.get('search'));
  const categories = await getCategories();
  const subCategory: Category[] = await getSubCategories(filter?.category_id);

  return <CompanyViewPage companies={companies?.data || []} categories={categories || []} subCategory={subCategory || []} />;
}
