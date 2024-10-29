import React from 'react';


interface ButtonProps {
  status: string;
  label: string;
}

const OrderButton: React.FC<ButtonProps> = ({ status, label }) => (
  <button className={`rounded-2xl px-4 py-4 text-white transition duration-300 min-w-52 max-h-14 ${status}`}>{label}</button>
);

export default OrderButton;
