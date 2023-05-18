export interface IChatData {
  origin: 'received' | 'sent';
  type: 'chat' | 'walk';
  data: {
    text?: string;
    cost?: string;
    period?: string;
    images?: Array<IChatDataImage>
  }
}

export interface IChatDataImage {
  url: string;
  alt?: string;
}