import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: any;
  imgWidth?: number;
  onButtonClick?: () => void;
}

const ResponsiveCard: React.FC<CardProps> = ({ title, description, buttonText, imageSrc, imgWidth }) => {
  const t = useTranslations('HomePage');
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:h-auto md:w-1/2">
        <Image src={imageSrc} alt="Card image" className="h-full w-full object-cover" width={imgWidth} />
      </div>
      <div className="flex flex-col justify-center p-6 md:w-1/2">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">{title}</h2>
        <p className="mb-6 text-gray-600">{description}</p>
        <Button className="rounded-full bg-[#004267] px-6 py-6 font-[600] text-white">
          <Plus className="ml-2" size={20} />
          {t('getOffer')}
        </Button>
      </div>
    </div>
  );
};

export default ResponsiveCard;
