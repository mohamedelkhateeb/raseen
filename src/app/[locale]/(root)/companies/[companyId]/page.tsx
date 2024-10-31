import CompanyDetailsView from '@/components/view/home/companies/company-details-view';
import { getCompany } from '@/services/companyService';
const CompanyPage = async ({ params }: { params: Record<string, string> }) => {
  const company = await getCompany(params.companyId);
  return <CompanyDetailsView company={company} />;
};

export default CompanyPage;
