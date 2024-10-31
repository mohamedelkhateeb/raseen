'use client';
import { Input } from '@/components/ui/input';
import { useImageUpload } from '@/hooks/useImageUpload';
import { IoLockClosedOutline } from 'react-icons/io5';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { updateProfile } from '@/services/authService';
import DropdownMenu from '../../companies/dropdown';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
export default function ProfileForm({ profile }: any) {
  const { imageUrl, handleImageChange, resetImage } = useImageUpload();
  const [data, setData] = useState<any>({
    name: profile?.name || '',
    email: profile?.email || '',
    phone: profile?.phone || '',
    img: profile?.img || '',
    city_id: profile?.city || '',
  });

  const handleSubmit = async (formData: FormData) => {
    const res = await updateProfile(formData);
    if (res?.status) {
      toast.success('تم التعديل بنجاح');
    } else {
      toast.error(res?.message);
    }
  };

  return (
    <>
      <form action={handleSubmit} className="my-8 grid grid-cols-2 gap-10 overflow-auto rounded-2xl border-2 bg-white p-12">
        <div className="col-span-2 flex items-center gap-5">
          <img src={imageUrl ? imageUrl : profile?.img} alt="Card" className="h-48 w-48 rounded-full" width={200} height={200} />
          <label
            htmlFor="upload"
            className="cursor-pointer rounded-2xl border border-darkBlue px-8 py-5 text-2xl font-bold text-darkBlue hover:bg-darkBlue hover:text-white"
          >
            تعديل الصورة الشخصية
          </label>
          {imageUrl && <MdOutlineDelete onClick={resetImage} className="cursor-pointer" color="red" size={40} />}
          <input id="upload" type="file" name="img" className="hidden" accept="image/*" onChange={handleImageChange} />
        </div>
        <div>
          <p className="py-4 text-xl font-semibold">الأسم الكامل</p>
          <Input defaultValue={data?.name} name="name" className="rounded-2xl border-2 px-5 py-9 text-xl" placeholder="أدخل اسمك كاملاً" />
        </div>
        <div>
          <p className="py-4 text-xl font-semibold">البريد الإلكتروني</p>
          <Input
            defaultValue={data?.email}
            type="email"
            name="email"
            className="rounded-2xl border-2 px-5 py-9 text-xl"
            placeholder="البريد الألكتروني"
          />
        </div>
        <div className="relative">
          <p className="py-4 text-xl font-semibold">رقم الجوال</p>
          <input type="hidden" value={data?.phone} name="phone" />
          <Input disabled defaultValue={data?.phone} className="rounded-2xl border-2 px-5 py-9 text-xl" placeholder="رقم الجوال" />
          <IoLockClosedOutline className="absolute bottom-5 left-4 text-3xl" color="#004267" />
        </div>
        <DropdownMenu dataFilter={profile} setDataFilter={setData} />
        <div className="col-span-2 mt-8 flex flex-col gap-4">
          <LoadingButton content="حفظ التغييرات" style="mr-auto w-1/4 rounded-2xl bg-darkBlue px-8 text-base text-white xl:py-9 xl:text-2xl" />
        </div>
      </form>
    </>
  );
}
