import { useEffect, useState } from 'react';

export const useProfile = ({ session }: any) => {
  const [profile, setProfile] = useState<any>({});

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/user/get-profile`, {
          method: 'GET',
          cache: 'no-cache',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session?.token}` },
        });
        const result = await res.json();
        setProfile(result?.data);
      } catch (error) {
        //console.log(error);
      }
    };
    getProfile();
  }, []);
  return { profile };
};
