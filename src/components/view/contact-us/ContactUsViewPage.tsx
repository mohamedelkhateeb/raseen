import { Breadcrumbs } from '@/components/common/breadcrumd';
import React from 'react';
import { TbSmartHome } from 'react-icons/tb';
import ContactUsForm from './contact-us-form';
const items = [
  { title: <TbSmartHome size={30} color="#EA8D09" />, link: '/' },
  { title: 'الرئيسية', link: '/' },
  { title: 'تواصل معنا', link: '' },
];
const ContactUsViewPage = () => {
  return (
    <div>
      {' '}
      <div className="flex flex-col gap-4 px-10">
        <Breadcrumbs items={items} />
        <div className="gap mt-5 flex flex-col gap-8">
          <h1 className="text-3xl font-bold">تواصل معنا</h1>
          <h2 className="text-2xl font-semibold text-darkBlue">برجاء إدخال البيانات التالية </h2>
        </div>
        {/* <OrderForm categories={categories} subCategories={subCategories} /> */}
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactUsViewPage;
