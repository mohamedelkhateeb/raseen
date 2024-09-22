// components/SearchBox.tsx
import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBox: React.FC = () => {
  return (
    <div className="relative">
      <BiSearch color="#6D6D6D" size={20} className="absolute  top-1/2 -translate-y-1/2 right-4" />
      <input
        type="text"
        placeholder="ابحث هنا عن أي فئة"
        className="w-[418px] text-xl h-[60px] px-8 pr-12 border rounded-full bg-[#FBFBFB] focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
};

export default SearchBox;
