import checkSignature from './utils/check-signature'
import { buildXml, parseXml } from './utils/xml-handler';

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    if (request.headers.get('content-type') === 'text/xml') {
      const message: WeChatMessage = parseXml(await request.text())
      let replyMessage: WeChatMessage = {
        ToUserName: message.FromUserName,
        FromUserName: message.ToUserName,
        CreateTime: new Date().getTime(),
        MsgType: message.MsgType
      }
      let replyXml = ''
  
      switch (message.MsgType) {
        case 'text':
          (replyMessage as WeChatMessageText).Content = 'hello'
          replyXml = buildXml(replyMessage as WeChatMessageText)
          break;
        case 'voice':
          break;
        case 'image':
          break;
        default: break;
      }

			return new Response(replyXml, {headers: {
        'content-type': 'text/xml'
      }})
    } else {
      const echostr: string | null = checkSignature(new URL(request.url), await env.KV.get('WECHAT_TOKEN'))

      if (echostr !== null) {
        return new Response(echostr)
      }

      return new Response('Error')
    }
  },
};
