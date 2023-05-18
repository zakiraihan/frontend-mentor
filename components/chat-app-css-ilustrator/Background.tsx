import React from 'react'

function Background({ className }: BackgroundProps) {
  return (
    <div className='absolute w-full md:w-4/12 h-screen bg-gradient-to-b from-caci-grad-100 to-caci-grad-900 rounded-b-full -top-[20%] md:-top-[12.5%] -left-1/2 md:-left-[5%]'/>
  )
}

export default Background

interface BackgroundProps {
  className?: string;
}