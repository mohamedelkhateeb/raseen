'use client';
import { likeCompany } from '@/services/companyService';
import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { CiHeart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';

const Like = ({ isLiked = false, companyId }: { isLiked?: boolean; companyId: number }) => {
  const [liked, setLiked] = useState(isLiked);

  const handleClick = async (formData: FormData) => {
    const res = await likeCompany(formData);
    if (res.status) {
      toast.success(`${res?.message == 'like' ? 'تم الاضافة للمفضلة' : 'تم الحذف من المفضلة'}`, {
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
      {liked ? (
        <button type="submit">
          <FaHeart size={30} color={'#FF0E0E'} onClick={() => setLiked(!liked)} className="cursor-pointer" />
        </button>
      ) : (
        <button type="submit">
          <CiHeart onClick={() => setLiked(!liked)} className="cursor-pointer" size={30} color={'#6D6D6D'} />
        </button>
      )}
    </form>
  );
};

export default Like;
