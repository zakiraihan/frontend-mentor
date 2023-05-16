import React from 'react'

function Button({ text, className, onClick }: ButtonProps) {
  return (
    <div 
      onClick={onClick}
      className={`bg-rs-dark-grey-blue flex items-center justify-center py-4 rounded-full hover:bg-gradient-to-b hover:from-rs-light-slate-blue hover:to-rs-light-royal-blue font-bold cursor-pointer select-none ${className}`}
    >
      { text }
    </div>
  )
}

export default Button

interface ButtonProps {
  text: string;
  className?: string;
  onClick?:() => any;
}