'use client';
import { shareCompany } from '@/services/companyService';
import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { LuShare2 } from 'react-icons/lu';

const Share = ({ isShared = false, companyId }: { isShared?: boolean; companyId: number }) => {
  const [Shared, setShared] = useState(isShared);

  const handleClick = async (formData: FormData) => {
    const res = await shareCompany(formData);
    if (res.status) {
      toast.success('تم المشاركة بنجاح', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
    } else {
      toast(`حدث خطأ، حاول مرة اخرى`);
    }
  };

  return (
    <form action={handleClick}>
      <input type="hidden" name="company_id" value={companyId} />
      <button type="submit">
        <LuShare2 onClick={() => setShared(!Shared)} className="cursor-pointer" size={30} color={'#6D6D6D'} />
      </button>
    </form>
  );
};

export default Share;
