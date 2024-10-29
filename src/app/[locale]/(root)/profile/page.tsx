import { options } from '@/app/api/auth/[...nextauth]/options';
import ProfileViewPage from '@/components/view/auth/user/profile-view-page';
import { redirect } from '@/i18n/routing';
import { getServerSession } from 'next-auth';
import React from 'react';

const ProfilePage = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect('/sign-in');
  }
  return <ProfileViewPage />;
};

export default ProfilePage;
