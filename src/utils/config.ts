'use server';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { getLocale } from 'next-intl/server';
const ReqHeaders = async (keys?: any) => {
  const session = await getServerSession(options);
  const locale = await getLocale();
  if (session) {
    return {
      Authorization: `Bearer ${session.token}`,
      'Accept-Language': locale,
      ...keys,
    };
  }
};

export default ReqHeaders;
