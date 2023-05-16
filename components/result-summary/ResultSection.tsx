import React from 'react'

function ResultSection() {
  return (
    <section className='w-full h-[420px] md:w-1/2 md:h-full bg-gradient-to-b from-rs-light-slate-blue to-rs-cobalt-blue rounded-b-[30px] md:rounded-tr-[30px] flex flex-col items-center justify-center md:justify-around md:py-10 md:px-16'>
      <p className='text-rs-light-lavender text-lg md:text-2xl font-bold'>Your Result</p>
      <div className='w-44 h-44 md:w-52 md:h-52 rounded-full bg-gradient-to-b from-rs-cobalt-blue to-transparent my-8 md:my-8 flex flex-col items-center justify-center'>
        <p className='text-white font-bold text-6xl md:text-7xl'>76</p>
        <p className='text-rs-light-lavender text-opacity-60 text-base'>of 100</p>
      </div>
      <p className='text-white text-3xl md:text-4xl font-bold mb-2 md:mb-4'>Great</p>
      <p className='text-rs-light-lavender text-center w-9/12 md:w-11/12'>You scored higher than 65% of the people who have taken these tests.</p>
    </section> 
  )
}

export default ResultSection