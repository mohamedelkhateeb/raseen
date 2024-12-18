import { Breadcrumbs } from '@/components/common/breadcrumd';
import React from 'react';
import { TbSmartHome } from 'react-icons/tb';
import ProfileForm from './profile-form';
import { getProfile } from '@/services/authService';
import { getTranslations } from 'next-intl/server';

const ProfileViewPage = async () => {
  const t = await getTranslations();

  const items = [
    { title: <TbSmartHome size={30} color="#EA8D09" />, link: '/' },
    { title: t('home'), link: '/' },
    { title: t('editProfile'), link: '/profile' },
  ];
  const profile = await getProfile();
  console.log(profile);

  return (
    <div className="flex flex-col gap-4 px-10">
      <Breadcrumbs items={items} />
      <ProfileForm profile={profile?.user} />
    </div>
  );
};

export default ProfileViewPage;
