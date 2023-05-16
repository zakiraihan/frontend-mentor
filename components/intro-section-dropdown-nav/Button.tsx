import React from 'react'

function Button({ type, text, className, onClick }: ButtonProps) {
  let bgColor = 'bg-isdn-almost-black hover:bg-isdn-almost-white hover:border-2 hover:border-isdn-medium-gray';
  let textColor = 'text-isdn-almost-white font-bold hover:text-isdn-almost-black';

  if (type === 'border') {
    textColor = 'text-isdn-medium-gray hover:text-isdn-almost-black';
    bgColor = 'bg-isdn-almost-white border-2 border-isdn-medium-gray hover:border-isdn-almost-black';
  }

  return (
    <div
      onClick={onClick} 
      className={`${textColor} ${bgColor} px-5 py-2 rounded-xl cursor-pointer select-none flex items-center justify-center ${className}`}
    >
      { text }
    </div>
  )
}

export default Button

interface ButtonProps {
  type: 'fill' | 'border';
  text: string;
  className?: string;
  onClick?: () => any;
}