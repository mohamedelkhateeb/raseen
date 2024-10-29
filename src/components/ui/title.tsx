import React from 'react';

const Title = ({ content }: { content: string }) => {
  return (
    <div>
      <h1 className="flex items-center gap-6 text-xl font-medium leading-normal md:text-3xl xl:text-5xl my-8">
        <div className="h-1 w-7 bg-[#FF8216]"></div>
        <span >{content}</span>
        <div className="h-1 w-7 bg-[#FF8216]"></div>
      </h1>
    </div>
  );
};

export default Title;
