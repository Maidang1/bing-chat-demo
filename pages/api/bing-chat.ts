// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { BingChat, ChatMessage } from 'bing-chat';

const cookie =
  "1eF359oTx_yIxcOHYse7_xNy7iuz29H6GXBrtiCCpigOz8OK3oJeqT95xGUabwQ7DVT9trVks4TbgZJClE36mkvE1R-l-Xxw8KFElvEyUdl8PIklOfF-_RpqjHY125OwYxKLb9I8lpka4_BmphH7-U46UsLgpBAu8zL5xM-JtWRHXdEDcocIUY3F28xyCB0obkebXnygCuN-veLOa05pJFQ"

let apiInsance: BingChat = '' as unknown as BingChat;


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatMessage>
) {

  if (!apiInsance) {
    apiInsance = new BingChat({
      cookie,
    })
  }

  try {
    console.log(req.body)
    const message = JSON.parse(req.body || {})
    const response = await apiInsance.sendMessage(message.info);
    res.status(200).json(response)
  } catch (e: any) {
    res.status(500).send(e.message)
  }


}
