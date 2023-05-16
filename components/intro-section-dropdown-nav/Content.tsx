import Button from './Button'
import Image from 'next/image'
import React from 'react'

function Content() {
  return (
    <div className='pt-20 md:pt-32 flex flex-col md:flex-row-reverse'>
      <section className='w-full md:w-6/12 flex justify-center'>
        <Image 
          alt="content"
          src={"/assets/intro-section-dropdown-nav/images/image-hero-mobile.png"}
          width={0}
          height={0}
          sizes={'100%'}
          className='w-full h-auto md:hidden'
        />
        <Image 
          alt="content"
          src={"/assets/intro-section-dropdown-nav/images/image-hero-desktop.png"}
          width={0}
          height={0}
          sizes={'100%'}
          className='w-full h-auto hidden md:inline pl-36 pr-32'
        />
      </section>
      <section className='w-full md:w-6/12 flex flex-col items-center md:items-start pt-12 px-3 md:pl-40 md:pt-32'>
        <p className='text-isdn-almost-black font-bold text-4xl md:text-7xl md:pr-16'>Make remote work</p>
        
        <p className='text-isdn-medium-gray text-center md:text-left my-7 md:pr-32'>
          Get your team in sync, no matter your location, Streamline processes, create team rituals, and watch productivity soar.
        </p>
        
        <Button type='fill' text='Learn more' className='py-3' />

        <div className='w-full flex items-center space-x-10 mt-10 md:mt-24'>
          <div className='w-1/4'>
            <Image 
              alt="content"
              src={"/assets/intro-section-dropdown-nav/images/client-databiz.svg"}
              width={0}
              height={0}
              sizes={'100%'}
              className='w-full h-auto '
            />
          </div>
          <div className='w-1/4'>
            <Image 
              alt="content"
              src={"/assets/intro-section-dropdown-nav/images/client-audiophile.svg"}
              width={0}
              height={0}
              sizes={'100%'}
              className='w-full h-auto '
            />
          </div>
          <div className='w-1/4'>
            <Image 
              alt="content"
              src={"/assets/intro-section-dropdown-nav/images/client-meet.svg"}
              width={0}
              height={0}
              sizes={'100%'}
              className='w-full h-auto '
            />
          </div>
          <div className='w-1/4'>
            <Image 
              alt="content"
              src={"/assets/intro-section-dropdown-nav/images/client-maker.svg"}
              width={0}
              height={0}
              sizes={'100%'}
              className='w-full h-auto '
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Content