import Content from '@/components/intro-section-dropdown-nav/Content'
import Head from 'next/head'
import Navbar from '@/components/intro-section-dropdown-nav/Navbar'
import React from 'react'

function IntroSectionPage() {
  return (
    <>
      <Head>
        <title>Intro Section with Dropdown Nav</title>
        <meta name='description' content='Challange from Frontend Mentor to create Intro section with dropdown nav' />
        <link rel='icon' href='/assets/intro-section-dropdown-nav/images/favicon-32x32.png' />
      </Head>
      <div className='w-full min-h-screen h-auto bg-isdn-almost-white text-isdn-almost-black font-epilogue font-medium md:pb-20'>
        <Navbar/>
        <Content />
      </div>
    </>
  )
}

export default IntroSectionPage