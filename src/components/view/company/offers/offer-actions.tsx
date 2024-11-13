import { callPhone } from '@/services/companyService';
import React from 'react';
import toast from 'react-hot-toast';
import { FaWhatsapp } from 'react-icons/fa6';
import { PiPhoneCallLight } from 'react-icons/pi';

const OfferActions = ({ offerId }: { offerId: number }) => {
  const handeSubmit = async (type: string) => {
    const formData = new FormData();
    formData.append('type', type);
    formData.append('offer_id', offerId.toString());
    const result = await callPhone(formData);
    //console.log(result);
    if (result?.status) {
      toast.success('تم الاتصال بنجاح');
    } else {
      toast.error('حدث خطأ، حاول مرة اخرى');
    }
  };
  return (
    <button className="flex gap-4">
      <PiPhoneCallLight onClick={() => handeSubmit('phone')} color="white" className="cursor-pointer rounded-full bg-[#004267] p-4" size={60} />
      <FaWhatsapp
        onClick={() => handeSubmit('whatsapp')}
        color="#004267"
        className="cursor-pointer rounded-full border-2 border-[#004267] bg-transparent p-4"
        size={60}
      />
    </button>
  );
};

export default OfferActions;
