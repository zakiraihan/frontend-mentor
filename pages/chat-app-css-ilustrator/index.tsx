import Background from '@/components/chat-app-css-ilustrator/Background'
import Description from '@/components/chat-app-css-ilustrator/Description'
import PhoneIlustration from '@/components/chat-app-css-ilustrator/PhoneIlustration'
import React from 'react'

function ChatAppIlustratorPage() {
  return (
    <div className='bg-caci-secondary-0 w-full min-h-screen h-auto font-rubik text-caci-text-300 relative flex flex-col md:flex-row'>
      <Background />
      <PhoneIlustration />
      <Description />
    </div>
  )
}

export default ChatAppIlustratorPage