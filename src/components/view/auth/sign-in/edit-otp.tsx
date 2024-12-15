'use client';
import useUserStore from '@/lib/store/userStore';
import React from 'react';

const EditOtp = () => {
  const authData = useUserStore((state) => state.settings.auth);

  return (
    <span dir="ltr" className="font-bold">
      {authData?.phone}
    </span>
  );
};

export default EditOtp;
