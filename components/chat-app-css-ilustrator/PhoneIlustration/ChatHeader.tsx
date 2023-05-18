import Image from 'next/image'
import React from 'react'

function ChatHeader() {
  return (
    <div className='w-full bg-gradient-to-r from-caci-grad-900 to-caci-grad-100 rounded-b-md flex justify-between pt-9 pb-3 px-5 shadow-lg'>
      <div className='flex'>
        <div className='h-full flex items-center'>
          <p className='text-lg text-white'>&#8249;</p>
        </div>
        <div className='w-9 h-9 rounded-full mx-2 border-2 overflow-hidden'>
          <Image
            alt='profile'
            src='/assets/chat-app-css-ilustrator/images/avatar.jpg'
            className='object-scale-down w-full h-auto rounded-full'
            width={0}
            height={0}
            sizes='100%'
          />
        </div>
        <div>
          <p className='text-caci-text-200 font-bold text-[calc(300px/22)]'>Samuel Green</p>
          <p className='text-caci-text-50'>Available to Walk</p>
        </div>
      </div>
      <div className='h-full flex items-center text-lg text-caci-text-200 font-bold'>
        <p>&#8942;</p>
      </div>
    </div>
  )
}

export default ChatHeader