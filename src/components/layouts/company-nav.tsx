import Image from 'next/image';
import React from 'react';
import RaseenLogo from '../../../public/rseen 2.svg';

const CompanyNav = () => {
  return (
    <div className="h-20 w-20">
      <Image src={RaseenLogo} alt="Card image" className="h-full w-full object-cover" />
    </div>
  );
};

export default CompanyNav;
