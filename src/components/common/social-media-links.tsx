import React from 'react';
import { LuInstagram } from 'react-icons/lu';
import { RiSnapchatFill } from 'react-icons/ri';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { useClientFetch } from '@/hooks/use-client-fetch';
import { IoLogoTiktok } from 'react-icons/io5';
const SocialMediaLinks = () => {
  const { Data } = useClientFetch(null, 'footer');  
  return (
    <>
      <LuInstagram
        onClick={() => window.open(Data?.data?.instagram, '_blank')}
        color="#004267"
        size={40}
        className="cursor-pointer rounded-full bg-[#E5ECF0] p-3 hover:bg-slate-300"
      />
      <RiSnapchatFill
        onClick={() => window.open(Data?.data?.snapchat, '_blank')}
        color="#004267"
        size={40}
        className="cursor-pointer rounded-full bg-[#E5ECF0] p-3 hover:bg-slate-300"
      />
      <FaXTwitter
        onClick={() => window.open(Data?.data?.twitter, '_blank')}
        color="#004267"
        size={40}
        className="cursor-pointer rounded-full bg-[#E5ECF0] p-3 hover:bg-slate-300"
      />
      <FaFacebookF
        onClick={() => window.open(Data?.data?.facebook, '_blank')}
        color="#004267"
        size={40}
        className="cursor-pointer rounded-full bg-[#E5ECF0] p-3 hover:bg-slate-300"
      />
      <IoLogoTiktok
        onClick={() => window.open(Data?.data?.tiktok, '_blank')}
        color="#004267"
        size={40}
        className="cursor-pointer rounded-full bg-[#E5ECF0] p-3 hover:bg-slate-300"
      />
      <FaLinkedinIn 
        onClick={() => window.open(Data?.data?.linkedin, '_blank')}
        color="#004267"
        size={40}
        className="cursor-pointer rounded-full bg-[#E5ECF0] p-3 hover:bg-slate-300"
      />
    </>
  );
};

export default SocialMediaLinks;
