'use client';
import { useEffect, useState } from 'react';

export const useClientFetch = (session: any | null, endpoint: string) => {
  const [Data, setData] = useState<any>(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/${endpoint}`, {
          method: 'GET',
          cache: 'no-cache',
          headers: { 'Content-Type': 'application/json' },
        });
        const result = await res.json();
        setData(result);
      } catch (error) {
        //console.log(error);
      }
    };
    getData();
  }, []);
  return { Data };
};
