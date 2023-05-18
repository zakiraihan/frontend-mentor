import { IChatData, IChatDataImage } from '@/interface/chat-app-css-ilustrator';

import Image from 'next/image';
import React from 'react'

function ChatBubble({ chat, index }: ChatBubbleProps) {
  let { origin, type, data } = chat;
  let chatPositionStyle = 'flex-row-reverse';
  let chatOriginStyle = 'bg-white text-caci-text-150 shadow-md';
  let chatImagePositionStyle = 'justify-end'

  if (origin === 'received') {
    chatPositionStyle = 'flex-row';
    chatOriginStyle = 'bg-caci-secondary-400 text-caci-text-100';
    chatImagePositionStyle = 'justify-start'
  }


  return (
    <div>
      { data.images && data.images.length > 0 &&
        <div className={`mb-2 w-full h-12 flex items-center ${chatImagePositionStyle} space-x-2`}>
          {data.images.map((image: IChatDataImage, index) => (
            <div className='w-12 h-12 rounded-md overflow-hidden'>
              <Image 
                src={image.url}
                alt=''
                sizes='100%'
                width={0}
                height={0}
                className='object-contain w-full'
              />
            </div>
          ))}
        </div>
      }
      <div className={`flex ${chatPositionStyle} ${index === 0 ? '' : 'pb-2'}`}>
        {type !== 'chat' ? 
          <div className={`pl-2 pr-5 py-2 w-3/4 rounded-[15px] flex items-center justify-between bg-gradient-to-r from-caci-grad-100 to-caci-grad-900`}>
            <div className='flex'>
              <div className='w-4 h-4 border-2 border-caci-secondary-300 rounded-full mr-2'/>
              <p className='text-caci-text-200'>{ data.period }</p>
            </div>
            <p className='text-white text-base font-bold'>{ data.cost }</p>
          </div>
          :
          <div className={`px-2 py-2 rounded-[15px] max-w-[calc(100%*2/3)] ${chatOriginStyle}`}>
            { data.text }
          </div> 
        }
      </div>
    </div>
  )
}

export default ChatBubble

interface ChatBubbleProps {
  chat: IChatData,
  index: number
}

