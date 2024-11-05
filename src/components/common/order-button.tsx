import React from 'react';

interface ButtonProps {
  status: string;
  label: string;
}

const OrderButton: React.FC<ButtonProps> = ({ status, label }) => (
  <button className={`max-h-14 min-w-52 cursor-default rounded-2xl px-4 py-4 text-white transition duration-300 ${status}`}>{label}</button>
);

export default OrderButton;
