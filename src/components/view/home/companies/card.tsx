'use client';
import Like from '@/components/common/like';
import { Link } from '@/i18n/routing';
import { useDirection } from '@/utils/helpers';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  listStyle?: string;
  isLiked?: boolean;
  id: number;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, listStyle, isLiked, id }) => {
  useDirection();
  return (
    <div
      dir={useDirection()}
      className={`w-full overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl ${
        listStyle === 'grid' ? 'flex flex-col' : 'flex h-[130px] w-full flex-row'
      }`}
    >
      <Link href={`/companies/${id}`}>
        <img src={imageUrl} alt={title} className={`${listStyle === 'grid' ? 'h-56 w-full' : 'h-full w-full'} object-cover`} />
      </Link>
      <div className={`${listStyle === 'grid' ? 'p-4' : 'w-full p-4'}`}>
        <div className="flex items-center justify-between">
          <h2 className="mb-2 text-2xl ml-auto font-medium">{title}</h2>
          <Like isLiked={isLiked} companyId={id} />
        </div>
        <p className="max-w-[450px] text-right text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default Card;
