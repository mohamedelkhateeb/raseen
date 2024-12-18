'use client';
import { Input } from '@/components/ui/input';
import { useImageUpload } from '@/hooks/useImageUpload';
import { IoLockClosedOutline } from 'react-icons/io5';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { updateProfile } from '@/services/authService';
import DropdownMenu from '../../home/companies/dropdown';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import { useTranslations } from 'next-intl'; // Import the useTranslations hook
import { useDirection } from '@/utils/helpers';

export default function ProfileForm({ profile }: any) {
  const t = useTranslations('Profile'); // Use a namespace for translations

  const { imageUrl, handleImageChange, resetImage } = useImageUpload();
  const [data, setData] = useState<any>({
    name: profile?.name || '',
    email: profile?.email || '',
    phone: profile?.phone || '',
    owner: profile?.owner || '',
    img: null,
    city_id: profile?.city || '',
  });

  const handleSubmit = async (formData: FormData) => {
    if (!imageUrl) {
      formData.delete('img');
    }
    const res = await updateProfile(formData);
    if (res?.status) {
      toast.success(t('updateSuccess'));
    } else {
      toast.error(res?.message);
    }
  };

  return (
    <>
      <form action={handleSubmit} className="my-8 grid grid-cols-2 gap-10 overflow-auto rounded-2xl border-2 bg-white p-12">
        <div className="col-span-2  flex items-center flex-wrap justify-center md:justify-start gap-5">
          <img src={imageUrl ? imageUrl : profile?.img} alt="Card" className="h-48 w-48 rounded-full" width={200} height={200} />
          <label
            htmlFor="upload"
            className="cursor-pointer rounded-2xl border border-darkBlue px-8 py-5 text-2xl font-bold text-darkBlue hover:bg-darkBlue hover:text-white"
          >
            {t('changeProfilePicture')}
          </label>
          {imageUrl && <MdOutlineDelete onClick={resetImage} className="cursor-pointer" color="red" size={40} />}
          <input id="upload" type="file" name="img" className="hidden" accept="image/*" onChange={handleImageChange} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <p className="py-4 text-xl font-semibold">{t('fullName')}</p>
          <Input defaultValue={data?.name} name="name" className="rounded-2xl border-2 px-5 py-9 text-xl" placeholder={t('enterFullName')} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <p className="py-4 text-xl font-semibold">{t('email')}</p>
          <Input
            defaultValue={data?.email}
            type="email"
            name="email"
            className="rounded-2xl border-2 px-5 py-9 text-xl"
            placeholder={t('emailPlaceholder')}
          />
        </div>
        <div className="relative col-span-2 lg:col-span-1">
          <p className="py-4 text-xl font-semibold">{t('phone')}</p>
          <input type="hidden" value={data?.phone} name="phone" />
          <Input disabled defaultValue={data?.phone} className="rounded-2xl border-2 px-5 py-9 text-xl" placeholder={t('phonePlaceholder')} />
          <IoLockClosedOutline className={`absolute bottom-5 ${useDirection() === 'rtl' ? 'left-5' : 'right-5'} text-3xl`} color="#004267" />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <DropdownMenu dataFilter={profile} setDataFilter={setData} />
        </div>
        <div className="col-span-2 mt-8 flex flex-col gap-4">
          <LoadingButton content={t('saveChanges')} style="mr-auto w-full md:w-1/3 rounded-2xl bg-darkBlue  px-8 text-xl text-white py-9 text-2xl" />
        </div>
      </form>
    </>
  );
}
