import React from 'react';
import Card from './card';
import { TbSmartHome } from 'react-icons/tb';
import { Breadcrumbs } from '@/components/common/breadcrumd';
import { getFavCompanies } from '@/services/companyService';
import { Company } from '@/types/models/home.model';

const items = [
  { title: <TbSmartHome size={30} color="#EA8D09" />, link: '/' },
  { title: 'الرئيسية', link: '/' },
  { title: 'الشركات المفضلة', link: '' },
];
const FavoriteCompaniesViewPage = async () => {
  const data: Company[] = await getFavCompanies();

  return (
    <div className="w-full p-4">
      <Breadcrumbs items={items} />
      <div className={`my-10 grid gap-10 lg:grid-cols-2 xl:grid-cols-3`}>
        {data?.map((company, index) => (
          <Card
            id={company?.id}
            key={index}
            listStyle={'grid'}
            title={company?.name}
            description={company?.desc}
            imageUrl={company?.img}
            isLiked={company?.fav}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoriteCompaniesViewPage;
