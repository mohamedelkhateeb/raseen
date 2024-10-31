import React from 'react';
import { LuInstagram } from 'react-icons/lu';
import { RiSnapchatFill } from 'react-icons/ri';
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { useClientFetch } from '@/hooks/use-client-fetch';
import { useRouter } from 'next/navigation';
const SocialMediaLinks = () => {
  const router = useRouter();
  const { Data } = useClientFetch(null, 'footer');
  return (
    <>
      <LuInstagram
        onClick={() => router.push(Data?.data?.instagram || '/')}
        color="#004267"
        size={40}
        className="cursor-pointer rounded-full bg-[#E5ECF0] p-3 hover:bg-slate-300"
      />
      <RiSnapchatFill
        onClick={() => router.push(Data?.data?.snapchat || '/')}
        color="#004267"
        size={40}
        className="cursor-pointer rounded-full bg-[#E5ECF0] p-3 hover:bg-slate-300"
      />
      <FaXTwitter
        onClick={() => router.push(Data?.data?.twitter || '/')}
        color="#004267"
        size={40}
        className="cursor-pointer rounded-full bg-[#E5ECF0] p-3 hover:bg-slate-300"
      />
      <FaFacebookF
        onClick={() => router.push(Data?.data?.facebook || '/')}
        color="#004267"
        size={40}
        className="cursor-pointer rounded-full bg-[#E5ECF0] p-3 hover:bg-slate-300"
      />
    </>
  );
};

export default SocialMediaLinks;
