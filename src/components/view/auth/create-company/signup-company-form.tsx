'use client';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import { Input } from '@/components/ui/input';
import { useRouter } from '@/i18n/routing';
import React, { useState } from 'react';
import { MdAttachFile, MdOutlineDelete } from 'react-icons/md';
import DropdownMenu from '../../home/companies/dropdown';
import { IoLocationOutline } from 'react-icons/io5';
import { parseAsString, useQueryState } from 'nuqs';
import Popup from '@/components/common/popup';
import GoogleMap from '../../maps/map';
import { useImageUpload } from '@/hooks/useImageUpload';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useDirection } from '@/utils/helpers';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import { Category, SubCategory } from '@/types/models/home.model';
import FormError from '@/components/common/form-error';
import MultiImageUpload, { UploadedImage } from '@/components/common/MultiImageUpload';
import { companySignUp } from '@/services/authService';
import { formatInputPrice, formatPrice } from '@/utils/numsFormatter';
import toast from 'react-hot-toast';
import { useTranslations } from 'next-intl';

type AddCompany = {
  name: string;
  email: string;
  img: string | null;
  category_id: string;
  owner: string;
  address: string;
  owner_img: string | null;
  lat: string | null;
  lng: string | null;
  location: string;
  commercial_img: string | null;
  min_price: string;
  price: string;
  sub_categories: SubCategory[];
};

export default function SignUpCompanyForm({ subCategories, categories }: { subCategories: SubCategory[]; categories: Category[] }) {
  const t = useTranslations('companySignup');
  const [cvs, setCvs] = useState<any[]>([]);
  const [certificates, setCertificates] = useState<any[]>([]);
  const [cate, setCategory] = useQueryState('category', parseAsString.withOptions({ shallow: false }));
  const {
    imageUrl: commercialImgUrl,
    error: commercialError,
    handleImageChange: handleCommercialChange,
    resetImage: resetCommercial,
  } = useImageUpload();
  const { imageUrl: ownerImgUrl, error: ownerError, handleImageChange: handleOwnerChange, resetImage: resetOwner } = useImageUpload();
  const { imageUrl: CompanyImgUrl, error: CompanyError, handleImageChange: handleCompanyChange, resetImage: resetCompany } = useImageUpload();
  const [errMsg, setErrMsg] = useState('');
  const [lat] = useQueryState('lat');
  const [lang] = useQueryState('lang');
  const [data, setData] = useState<AddCompany>({
    name: '',
    email: '',
    img: CompanyImgUrl,
    owner: '',
    address: '',
    owner_img: ownerImgUrl,
    lat: lat,
    lng: lang,
    location: '',
    commercial_img: commercialImgUrl,
    category_id: '',
    min_price: '',
    price: '',
    sub_categories: [],
  });
  const router = useRouter();
  const submitForm = async (formData: FormData) => {
    setErrMsg('');
    formData.append('lat', lat?.toString() || '0');
    formData.append('lng', lang?.toString() || '0');

    formData.append('sub_categories', JSON.stringify(data.sub_categories));
    cvs.forEach((cv, index) => {
      formData.append(`cvs[${index}][img]`, cv.file);
    });
    certificates.forEach((c, index) => {
      formData.append(`certeficates[${index}][img]`, c.file);
    });
    if (!commercialImgUrl || !ownerImgUrl) {
      setErrMsg(t('uploadError'));
      return;
    }
    const res = await companySignUp(formData);
    console.log(res);
    if (!res?.status) {
      setErrMsg(res?.message);
    }
    if (res?.status) {
      toast.success(t('successMessage'));
      router.push('/');
    }
  };
  return (
    <>
      <form action={submitForm} className="my-8 grid gap-5 overflow-auto rounded-2xl border-2 bg-white p-6 lg:grid-cols-2 lg:gap-10 lg:p-12">
        <input type="hidden" name="device_key" value={'device_key'} />
        <input type="hidden" name="location" value={'location'} />
        <div className="col-span-2 lg:col-span-1">
          <p className="py-4 text-xl font-semibold">{t('fullNameAr')}</p>
          <Input required name="name_ar" className="rounded-2xl border-2 px-5 py-9 text-xl" placeholder={t('enterNameAr')} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <p className="py-4 text-xl font-semibold">{t('fullNameEn')}</p>
          <Input required name="name_en" className="rounded-2xl border-2 px-5 py-9 text-xl" placeholder={t('enterNameEn')} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <p className="py-4 text-xl font-semibold">{t('email')}</p>
          <Input required name="email" className="rounded-2xl border-2 px-5 py-9 text-xl" placeholder={t('enterEmail')} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <p className="py-4 text-xl font-semibold">{t('ownerName')}</p>
          <Input required name="owner" className="rounded-2xl border-2 px-5 py-9 text-xl" placeholder={t('enterOwnerName')} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <p className="py-4 text-xl font-semibold">{t('phoneNumber')}</p>
          <Input required name="phone" className="rounded-2xl border-2 px-5 py-9 text-xl" placeholder={t('enterPhoneNumber')} maxLength={9} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <DropdownMenu dataFilter={data} setDataFilter={setData} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <p className="py-4 text-xl font-semibold">{t('mainCategory')}</p>
          <Select
            name="category_id"
            required
            onValueChange={(value) => {
              setCategory(value);
              setData({ ...data, sub_categories: [] });
              setData({ ...data, category_id: value });
            }}
          >
            <SelectTrigger dir={useDirection()} className={cn('rounded-2xl border-2 px-5 py-9 text-xl')}>
              <SelectValue className="text-xl text-gray-200" placeholder={t('mainCategory')} />
            </SelectTrigger>
            <SelectContent className="flex flex-col gap-10" dir={useDirection()}>
              {categories?.map((option, index) => (
                <SelectItem key={index} className="text-xl" value={option.id.toString()}>
                  {option.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <p className="py-4 text-xl font-semibold">{t('subCategory')}</p>
          <Select>
            <SelectTrigger disabled={data.category_id == ''} dir={useDirection()} className={cn('rounded-2xl border-2 px-5 py-9 text-xl')}>
              <SelectValue
                className="text-xl text-gray-200"
                placeholder={
                  data.sub_categories.length > 0
                    ? data.sub_categories
                        ?.map((sub) => {
                          const selectedOption = subCategories.find((option) => option.id == sub.id);
                          return selectedOption ? selectedOption.name : '';
                        })
                        .join(', ')
                    : t('subCategory')
                }
              />
            </SelectTrigger>
            <SelectContent className="flex flex-col gap-10" dir={useDirection()}>
              {subCategories?.map((option, index) => (
                <div dir={useDirection()} key={index.toString()} className="my-4 flex items-center justify-between gap-4 p-2 text-xl">
                  <label
                    htmlFor={index.toString()}
                    className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option?.name}
                  </label>
                  <Checkbox
                    className="h-4 w-4"
                    id={index.toString()}
                    onCheckedChange={() => {
                      const isSelected = data.sub_categories.some((sub) => sub.id == option.id);
                      setData({
                        ...data,
                        sub_categories: isSelected
                          ? data.sub_categories.filter((sub) => sub.id !== option.id)
                          : ([...data.sub_categories, { id: option.id }] as any),
                      });
                    }}
                    checked={data.sub_categories.some((sub: any) => sub.id == option.id.toString())}
                  />
                </div>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-2 grid w-full gap-1.5">
          <p className="py-7 font-semibold lg:text-xl">{t('commercialImage')}</p>
          <label htmlFor="upload-commercial" className="text-medium relative cursor-pointer rounded-2xl border-2 px-5 py-6">
            {t('uploadCommercialImage')}
            <MdAttachFile className="absolute bottom-5 end-4 rotate-45 text-3xl" />
            {commercialImgUrl && <img src={commercialImgUrl} alt="Commercial Image" className="mt-2 max-h-64 w-full object-contain" />}
            {commercialImgUrl && <MdOutlineDelete onClick={resetCommercial} className="cursor-pointer" color="red" size={40} />}
          </label>
          <input type="file" id="upload-commercial" className="hidden" accept="image/*" name="commercial_img" onChange={handleCommercialChange} />
          {commercialError && <p className="text-red-500">{commercialError}</p>}
        </div>
        <div className="col-span-2 mt-6 grid w-full gap-1.5">
          <p className="py-4 font-semibold lg:text-xl">{t('ownerImage')}</p>
          <label htmlFor="upload-owner" className="text-medium relative cursor-pointer rounded-2xl border-2 px-5 py-6">
            {t('uploadOwnerImage')}
            <MdAttachFile className="absolute bottom-5 end-4 rotate-45 text-3xl" />
            {ownerImgUrl && <img src={ownerImgUrl} alt="Owner Image" className="mt-2 max-h-64 w-full object-contain" />}
            {ownerImgUrl && <MdOutlineDelete onClick={resetOwner} className="cursor-pointer" color="red" size={40} />}
          </label>
          <input type="file" id="upload-owner" className="hidden" accept="image/*" name="owner_img" onChange={handleOwnerChange} />
          {ownerError && <p className="text-red-500">{ownerError}</p>}
        </div>
        <div className="col-span-2 mt-6 grid w-full gap-1.5">
          <p className="py-4 font-semibold lg:text-xl">{t('companyImage')}</p>
          <label htmlFor="upload-company-img" className="text-medium relative cursor-pointer rounded-2xl border-2 px-5 py-6">
            {t('uploadCompanyImage')}
            <MdAttachFile className="absolute bottom-5 end-4 rotate-45 text-3xl" />
            {CompanyImgUrl && <img src={CompanyImgUrl} alt="Owner Image" className="mt-2 max-h-64 w-full object-contain" />}
            {CompanyImgUrl && <MdOutlineDelete onClick={resetCompany} className="cursor-pointer" color="red" size={40} />}
          </label>
          <input type="file" id="upload-company-img" className="hidden" accept="image/*" name="img" onChange={handleCompanyChange} />
          {CompanyError && <p className="text-red-500">{CompanyError}</p>}
        </div>
        <div className="col-span-2">
          <MultiImageUpload images={cvs} setImages={setCvs} label={t('licensesImages')} placeholder={t('uploadLicensesImages')} maxImages={6} />
        </div>
        <div className="col-span-2">
          <MultiImageUpload
            images={certificates}
            setImages={setCertificates}
            label={t('previousWorkImages')}
            placeholder={t('uploadPreviousWorkImages')}
            maxImages={6}
          />
        </div>
        <div className="col-span-2">
          <Popup
            style="w-[90%] h-[95vh] overflow-y-auto"
            title={t('selectLocation')}
            trigger={
              <div className="grid w-full gap-1.5 lg:col-span-1">
                <p className="py-4 font-semibold lg:text-xl">{t('companyLocation')}</p>
                <div className="text-medium relative cursor-pointer rounded-2xl border-2 px-5 py-6">
                  {lang && lat ? <p>{`${lang}, ${lat}`}</p> : <p>{t('companyLocation')}</p>}
                  <IoLocationOutline className="absolute bottom-5 end-4 text-3xl" />
                </div>
              </div>
            }
          >
            <GoogleMap />
          </Popup>
        </div>
        <div className="col-span-2 grid w-full gap-1.5">
          <p>{t('budget')}</p>
          <div className="col-span-2 flex items-center gap-5 lg:gap-10">
            <div className="relative w-full">
              <Input
                name="min_price"
                value={formatInputPrice(data?.min_price)}
                type="text"
                className="rounded-2xl border-2 px-5 py-9 text-xl"
                placeholder={t('enterPrice')}
                onChange={(e) => setData({ ...data, min_price: e.target.value })}
                maxLength={8}
              />
              <span className="absolute bottom-7 end-4 lg:bottom-6">{t('currency')}</span>
            </div>
            <p>{t('to')}</p>
            <div className="relative w-full">
              <Input
                name="price"
                maxLength={11}
                value={formatInputPrice(data?.price)}
                type="text"
                className="rounded-2xl border-2 px-5 py-9 text-xl"
                placeholder={t('enterPrice')}
                onChange={(e) => setData({ ...data, price: e.target.value })}
              />
              <span className="absolute bottom-7 end-4 lg:bottom-6">{t('currency')}</span>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <FormError error={errMsg} />
        </div>
        <div className="col-span-2 mt-8 flex items-start justify-start gap-4">
          <LoadingButton
            content={t('submitButton')}
            loader={t('submitLoading')}
            style=" w-1/2 mr-auto rounded-lg bg-darkBlue py-6 text-base text-white xl:py-9 xl:text-2xl"
          />
        </div>
      </form>
    </>
  );
}
