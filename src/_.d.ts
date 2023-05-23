type Env = {
  KV: NAMESPACE
}

interface WeChatMessage {
  ToUserName: string
  FromUserName: string
  CreateTime: number
  MsgType: 'text' | 'image' | 'voice'
}

interface WeChatMessageText extends WeChatMessage {
  Content: string
}

interface WeChatMessageReceivedImage extends WeChatMessage {
  PicUrl: string
}

interface WeChatMessageReceivedVoice extends WeChatMessage {
  MediaId: string
}

interface WeChatMessageSendImage extends WeChatMessage {
  Image: {
    MediaId: string
  }
}

interface WeChatMessageSendVoice extends WeChatMessage {
  Voice: {
    MediaId: string
  }
}
