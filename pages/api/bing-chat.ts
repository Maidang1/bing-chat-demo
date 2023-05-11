// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { BingChat, ChatMessage } from 'bing-chat';

const defaultCookie =
  '1tOY2mjMgnHntA29jKMbkxmrU3aVdh7TD4eyCew5YSzwGe0lDyDaI3wfWwSl_cQX6mRHOBIDTDltFUw3w-WXAP1kpUn6cJQeXPC3GEV-CdILnTqDcRNqUDBCsQ45tG0sr_1jQ-HyhR_3NsE1yxNx8ECNOUqmooQPVxoPr9kPpLjzIn54eiTfbQujD9Fz76P4io4Nwc8KidglmQio0J3DmXg';

let apiInsance: BingChat = '' as unknown as BingChat;


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatMessage>
) {

  if (!apiInsance) {
    apiInsance = new BingChat({
      cookie: defaultCookie,
    })
  }

  try {
    const response = await apiInsance.sendMessage("helo world");
    res.status(200).json(response)

  } catch (e: any) {
    res.status(500).send(e.message)
  }


}
