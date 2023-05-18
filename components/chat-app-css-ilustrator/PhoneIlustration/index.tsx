import ChatBubble from './ChatBubble'
import ChatHeader from './ChatHeader'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IChatData } from '@/interface/chat-app-css-ilustrator'
import { data } from '@/mockdata/chat-app-css-ilustrator-data'

function PhoneIlustration() {
  const [chats, setChats] = useState<Array<IChatData>>([]);

  useEffect(() => {
    setChats(data satisfies Array<IChatData>);
  }, [])

  return (
    <div className='z-10 w-full md:w-1/2 flex items-center justify-center md:justify-end pt-16 md:pt-0 md:pr-24 text-[calc(300px/27)]'>
      <div className='w-[300px] h-[615px] bg-caci-secondary-100 rounded-[30px] shadow-xl border-8 border-white flex flex-col items-center justify-start relative overflow-hidden'>
        <div className='bg-white w-7/12 h-6 rounded-b-[20px] absolute'/>
        <ChatHeader />
        <div className='w-full h-full px-2 flex flex-col-reverse overflow-y-scroll scrollbar-hide pt-2'>
          {chats.map((chat: IChatData, index) => (
            <ChatBubble key={'Chat: ' + index} chat={chat} index={index} />
          ))}
        </div>
        <div className='w-full flex flex-col '>
          <div className='h-12 bg-white my-3 mx-2 flex items-center justify-between rounded-full overflow-hidden px-1'>
            <input
              className='focus:!outline-none border-none flex-1 h-full px-7 placeholder:text-caci-text-200'
              placeholder='Type a message...'
            />
            <div className='w-10 h-10 border-white bg-caci-secondary-200 rounded-full flex items-center justify-center'>
              <p className='text-xl text-white cursor-pointer font-bold'>&#62;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhoneIlustration