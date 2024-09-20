// components/SearchBox.tsx
import React from "react";

const SearchBox: React.FC = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="ابحث هنا عن أي فئة"
        className="w-[418px] h-[60px] px-8 border rounded-full bg-[#FBFBFB] focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
};

export default SearchBox;
