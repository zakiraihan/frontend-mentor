import { IChatData } from "@/interface/chat-app-css-ilustrator";

export const data = [
  {
    origin: 'received',
    type: 'walk',
    data: {
      text: '',
      cost: '$49',
      period: '1 hour',
      images: []
    }
  },
  {
    origin: 'received',
    type: 'walk',
    data: {
      text: 'She looks so happy! The time we discussed works. How long shall I take her out for?',
      cost: '$29',
      period: '30 minute walk',
      images: []
    }
  },
  {
    origin: 'received',
    type: 'chat',
    data: {
      text: 'She looks so happy! The time we discussed works. How long shall I take her out for?',
      cost: '',
      period: '',
      images: []
    }
  },
  {
    origin: 'sent',
    type: 'chat',
    data: {
      text: 'Can you make it?',
      cost: '',
      period: '',
      images: []
    }
  },
  {
    origin: 'sent',
    type: 'chat',
    data: {
      text: 'Here are a few pictures. She\'s a happy girl!',
      cost: '',
      period: '',
      images: [
        {
          url: '/assets/chat-app-css-ilustrator/images/dog-image-1.jpg'
        },
        {
          url: '/assets/chat-app-css-ilustrator/images/dog-image-2.jpg'
        },
        {
          url: '/assets/chat-app-css-ilustrator/images/dog-image-3.jpg'
        },
      ]
    }
  },
  {
    origin: 'received',
    type: 'chat',
    data: {
      text: 'Could you send over some pictures of your dog, please?',
      cost: '',
      period: '',
      images: []
    }
  },
  {
    origin: 'received',
    type: 'chat',
    data: {
      text: 'That sounds great. I\'d be happy with that.',
      cost: '',
      period: '',
      images: []
    }
  },
  
] satisfies Array<IChatData>