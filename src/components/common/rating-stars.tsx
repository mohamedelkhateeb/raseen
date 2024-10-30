'use client';
import React, { useState } from 'react';

interface RatingStarsProps {
  initialValue?: any;
  readOnly?: boolean;
  onRatingChange?: (value: any) => void;
  style?: string;
}

const RatingStars: React.FC<RatingStarsProps> = ({ initialValue = 0, readOnly = false, onRatingChange, style = 'w-8 h-8' }) => {
  const [currentVal, setCurrentVal] = useState<any>(initialValue);

  const handleRatingChange = (value: any) => {
    if (!readOnly) {
      setCurrentVal(value);
      if (onRatingChange) {
        onRatingChange(value);
      }
    }
  };
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5]?.map((value, index) => (
        <label key={index} className={` ${readOnly ? 'cursor-auto' : 'cursor-pointer transition hover:scale-125'}`}>
          <span className="sr-only">{`${value} stars`}</span>
          <input
            type="radio"
            name="rate"
            value={value}
            className="sr-only"
            checked={currentVal === value}
            onChange={() => handleRatingChange(value)}
            disabled={readOnly}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`${style} ${currentVal >= value ? 'text-amber-500' : 'text-neutral-600 dark:text-neutral-300'}`}
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      ))}
    </div>
  );
};

export default RatingStars;
