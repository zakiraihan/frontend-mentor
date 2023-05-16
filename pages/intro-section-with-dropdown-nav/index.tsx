import Content from '@/components/intro-section-dropdown-nav/Content'
import Navbar from '@/components/intro-section-dropdown-nav/Navbar'
import React from 'react'

function IntroSectionPage() {
  return (
    <div className='w-full min-h-screen h-auto bg-isdn-almost-white text-isdn-almost-black font-epilogue font-medium md:pb-20'>
      <Navbar/>
      <Content />
    </div>
  )
}

export default IntroSectionPage