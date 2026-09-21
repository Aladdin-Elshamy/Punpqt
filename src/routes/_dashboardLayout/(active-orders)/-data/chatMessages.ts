export type ChatAttachment = {
  id: string
  name: string
  size: number
  imageUrl?: string
}
export type ChatMessage = {
  id: string
  outgoing: boolean
  text: string
  time: string
  attachments?: Array<ChatAttachment>
}

// Screenshot preview data; messaging and presence are not connected to an API.
export const initialMessages: Array<ChatMessage> = [
  {
    id: 'sample-1',
    outgoing: false,
    text: 'Hi! I received the business card sample.',
    time: '10:30 AM',
  },
  {
    id: 'sample-2',
    outgoing: true,
    text: 'Great! What do you think about it?',
    time: '10:32 AM',
  },
  {
    id: 'sample-3',
    outgoing: false,
    text: 'It looks perfect! Can we proceed with the full order?',
    time: '10:35 AM',
  },
  {
    id: 'sample-4',
    outgoing: true,
    text: 'Excellent! I will start production today. Expected delivery in 3 days.',
    time: '10:40 AM',
  },
  {
    id: 'sample-5',
    outgoing: false,
    text: 'Thanks for the sample!',
    time: '10:36 AM',
  },
]
