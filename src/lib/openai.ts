const API = 'https://api.openai.com/v1/chat/completions'

export default async (prompt: string, env: Env) => {
  const response = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${await env.KV.get('OPENAI_API_KEY')}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{role: 'user', content: prompt}],
    })
  })
  const result: any = await response.json()

  if (result.error) {
    return result.error.message
  } else {
    return result.choices[0].message.content
  }
}
