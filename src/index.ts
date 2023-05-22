import checkSignature from './utils/check-signature'

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    if (request.headers.get('content-type') === 'text/xml') {

			return new Response('hash')
    } else{
      const echostr: string | null = checkSignature(new URL(request.url), await env.KV.get('WECHAT_TOKEN'))

      if (echostr !== null) {
        return new Response(echostr)
      }
      return new Response('Error')
    }
  },
};
