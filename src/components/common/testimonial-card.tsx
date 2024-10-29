import Image from 'next/image';
import React from 'react';

type TestimonialProps = {
  image: string;
  name: string;
  content: string;
  width?: string;
};

const TestimonialCard: React.FC<TestimonialProps> = ({ image, name, content, width }) => {
  return (
    <div className={`about-card`}>
      <div className="-mt-16 flex justify-center">
        <Image className="h-20 w-20 rounded-full border-2 object-cover" src={image} alt={name} />
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-lg font-semibold text-darkBlue">{name}</h2>
        <p className="mt-2 text-sm text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
