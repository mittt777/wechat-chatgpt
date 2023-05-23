import { XMLParser, XMLBuilder } from 'fast-xml-parser'

export const parseXml = (xml: string): WeChatMessageText | WeChatMessageSendImage | WeChatMessageSendVoice => {
  const parser = new XMLParser()
  const result = parser.parse(xml)
  return result.xml
}

export const buildXml = (messageObj: WeChatMessageText | WeChatMessageSendImage | WeChatMessageSendVoice): string => {
  const builder = new XMLBuilder();
  const result = builder.build(messageObj);
  return `<xml>${result}</xml>`
}
